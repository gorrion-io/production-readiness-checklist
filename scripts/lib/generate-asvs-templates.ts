import type { RootContent, Table, TableCell, TableRow } from "mdast";
import { appendFile, readFile, writeFile } from "node:fs/promises";
import { get } from "node:http";
import { remark } from "remark";
import remarkGfm from "remark-gfm";

async function getInputFile() {
  const readme = await readFile("./OWASP-ASVS.md", "utf-8");
  const tree = remark().use(remarkGfm).parse(readme);
  return tree;
}

function getSections(tree: Awaited<ReturnType<typeof getInputFile>>) {
  const headers = tree.children.filter(
    (node) => node.type === "heading" && node.depth === 2
  ) as TableCell[];
  const tables = tree.children.filter(
    (node) => node.type === "table"
  ) as Table[];

  if (
    headers.length === 0 ||
    tables.length === 0 ||
    tables.length !== headers.length
  ) {
    throw new Error(
      "Invalid input file format. Ensure it contains headers and tables."
    );
  }

  const rows: Array<{ header: TableCell; table: Table }> = [];

  for (let i = 0; i < headers.length; i++) {
    const header = headers[i];
    const table = tables[i];

    if (!header || !table) {
      throw new Error(
        "Invalid input file format. Ensure it contains headers and tables."
      );
    }

    rows.push({ header, table });
  }

  return rows;
}

function getHeadings(rows: TableRow[]) {
  const headings =
    rows.at(0)?.children?.map((cell) => {
      const firstChild = cell.children.at(0);
      if (firstChild && firstChild.type === "text") {
        return firstChild.value;
      }
      return "";
    }) ?? [];

  return headings;
}

function getSectionName(cell?: TableCell | undefined) {
  if (!cell) {
    return "";
  }

  const linkText = cell.children.at(0);
  if (linkText?.type !== "text") {
    return "";
  }
  return linkText.value;
}

function getLink(table?: Table | undefined) {
  if (!table) {
    return "";
  }

  const rows = table.children;

  const row = rows.at(1);

  if (!row) {
    return "";
  }

  const linkRow = row.children.at(0);
  if (!linkRow) {
    return "";
  }

  const link = linkRow.children.at(0);
  if (link?.type !== "link") {
    return "";
  }
  return `https://github.com/gorrion-io/production-readiness-checklist/blob/main${link.url.replace(
    ".",
    ""
  )}`;
}

function getSubsectionRows(table?: Table | undefined) {
  if (!table) {
    return [];
  }

  const rows = table.children;

  return rows.slice(1);
}

function getSubsectionName(tableRow?: TableRow | undefined) {
  if (!tableRow) {
    return "";
  }
  const linkCell = tableRow.children.at(0);

  if (!linkCell) {
    return "";
  }

  const link = linkCell.children.at(0);

  if (link?.type !== "link") {
    return "";
  }
  const linkText = link.children.at(0);
  if (!linkText || linkText.type !== "text") {
    return "";
  }
  return linkText.value;
}

function getSubsectionScope(tableRow?: TableRow | undefined) {
  if (!tableRow) {
    return "";
  }

  const scopeCell = tableRow.children.at(2);

  if (!scopeCell) {
    return "";
  }

  const scope = scopeCell.children.at(0);

  if (!scope || scope.type !== "text") {
    return "";
  }

  return scope.value;
}

function getJiraPriority(level: string) {
  switch (level) {
    case "Critical 🔴":
      return "Highest";
    case "Should have 🟡":
      return "Medium";
    case "Nice to have 🟢":
      return "Low";
    default:
      return "Unknown";
  }
}

async function createJiraTemplate(results: string[][]) {
  const jiraTemplateFile = "./asvs-jira-template.csv";
  let jiraTemplate = `Summary;Issue Type;Priority;Labels;Labels;Labels;Description
`;
  await writeFile(jiraTemplateFile, jiraTemplate, { encoding: "utf-8" });

  for (const row of results) {
    const [name, level, scope, link] = row;

    const labels = Array.from({
      length: 3,
    })
      .map((_, i) => {
        const label = scope?.split(",")[i];
        return label ?? "";
      })
      .join(";");

    const jiraRow = `${name};Story;${getJiraPriority(
      level ?? ""
    )};${labels};${link}\n`;
    await appendFile(jiraTemplateFile, jiraRow, {
      encoding: "utf-8",
      flag: "a",
    });
  }
}

export async function getAsvsTemplates() {
  console.log("Generating template...");
  const result: string[][] = [];

  const tree = await getInputFile();
  const sections = getSections(tree);

  const LEVEL = "Critical 🔴";

  for (const section of sections) {
    const header = section.header;
    const table = section.table;

    const sectionName = getSectionName(header);
    const link = getLink(table);
    const level = LEVEL;
    const subsectionRows = getSubsectionRows(table);

    for (const subsectionRow of subsectionRows) {
      const subsectionName = getSubsectionName(subsectionRow);
      const subsectionScope = getSubsectionScope(subsectionRow);
      const taskName = `${sectionName} - ${subsectionName}`;
      result.push([taskName, level, subsectionScope, link]);
    }
  }

  await createJiraTemplate(result);

  console.log("Done!");
}
