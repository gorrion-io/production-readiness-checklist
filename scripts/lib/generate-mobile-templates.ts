import type { Table, TableCell, TableRow } from "mdast";
import { appendFile, readFile, writeFile } from "node:fs/promises";
import { remark } from "remark";
import remarkGfm from "remark-gfm";

async function getInputFile() {
  const readme = await readFile("./MOBILE.md", "utf-8");
  const tree = remark().use(remarkGfm).parse(readme);
  return tree;
}

function getRows(tree: Awaited<ReturnType<typeof getInputFile>>) {
  const table: Table =
    (tree.children.find((node) => node.type === "table") as Table) ?? null;
  const rows = table?.children;

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

function getLink(cell?: TableCell | undefined) {
  if (!cell) {
    return "";
  }
  const link = cell.children.at(0);
  if (link?.type !== "link") {
    return "";
  }
  return `https://github.com/gorrion-io/production-readiness-checklist/blob/main${link.url.replace(
    ".",
    ""
  )}`;
}

function getName(cell?: TableCell | undefined) {
  if (!cell) {
    return "";
  }
  const link = cell.children.at(0);
  if (link?.type !== "link") {
    return "";
  }

  const linkText = link.children.at(0);
  if (linkText?.type !== "text") {
    return "";
  }
  return linkText.value;
}

function getLevel(cell?: TableCell | undefined) {
  if (!cell) {
    return "";
  }
  const level = cell.children.at(0);
  if (level?.type !== "text") {
    return "";
  }
  return level.value;
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
  const jiraTemplateFile = "./mobile-jira-template.csv";
  let jiraTemplate = `Summary;Issue Type;Priority;Description
`;
  await writeFile(jiraTemplateFile, jiraTemplate, { encoding: "utf-8" });

  results.forEach(async (row, index) => {
    if (index === 0) {
      return;
    }
    const [name, level, link] = row;
    const jiraRow = `${name};Story;${getJiraPriority(level ?? "")};${link}\n`;
    await appendFile(jiraTemplateFile, jiraRow, {
      encoding: "utf-8",
      flag: "a",
    });
  });
}

export async function getMobileTemplates() {
  console.log("Generating template...");
  const result: string[][] = [];

  const tree = await getInputFile();
  const rows = getRows(tree);
  const headings = getHeadings(rows);
  result.push(headings);

  for (const row of rows.slice(1)) {
    const cells = row.children;
    const name = getName(cells.at(0));
    const link = getLink(cells.at(0));
    const level = getLevel(cells.at(1));

    result.push([name, level, link]);
  }

  await createJiraTemplate(result);

  console.log("Done!");
}
