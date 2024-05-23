import { remark } from "remark";
import { readFile, writeFile, appendFile } from "node:fs/promises";
import remarkGfm from "remark-gfm";

async function getInputFile() {
  const readme = await readFile("./README.md", "utf-8");
  const tree = remark().use(remarkGfm).parse(readme);
  return tree;
}

console.log("Generating template...");

const tree = await getInputFile();

const table = tree.children.find((node) => node.type === "table");
const rows: any[] = (table as any)?.children;

const result = [];

const headings = rows?.[0]?.children?.map(
  (cell: any) => cell.children[0].value,
);

result.push(headings);

for (const row of rows.slice(1)) {
  const cells = row.children;
  const name = cells[0].children[0].children[0].value;
  const link = cells[0].children[0].url;
  const level = cells[1].children[0].value;
  const scope = cells[2].children[0].value;
  const comment = cells?.[3]?.children?.[0]?.value ?? "";

  result.push([name, level, scope, comment, link]);
}

const getJiraPriority = (level: string) => {
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
};

const getClickupPriority = (level: string) => {
  switch (level) {
    case "Critical 🔴":
      return "Urgent";
    case "Should have 🟡":
      return "Normal";
    case "Nice to have 🟢":
      return "Low";
    default:
      return "Unknown";
  }
};

const jiraTemplateFile = "./jira-template.csv";
const clickupTemplateFile = "./clickup-template.csv";

let jiraTemplate = `Summary;Issue Type;Status;Project url; Priority;Labels;Labels;Labels;Description;Epic Summary
`;

let clickupTemplate = `Task name;Status;Priority;Description;Tags
`;

await writeFile(jiraTemplateFile, jiraTemplate, { encoding: "utf-8" });
await writeFile(clickupTemplateFile, clickupTemplate, { encoding: "utf-8" });

result.forEach(async (row, index) => {
  if (index === 0) {
    return;
  }
  const [name, level, scope, _comment, link] = row;
  const jiraRow = `${name};Story;To Do;;${getJiraPriority(level)};${
    scope.split(",")?.[0]?.trim() ?? ""
  };${scope.split(",")?.[1]?.trim() ?? ""};${
    scope.split(",")?.[2]?.trim() ?? ""
  };https://github.com/gorrion-io/production-readiness-checklist/blob/main${link.replace(
    ".",
    "",
  )};PRC\n`;
  await appendFile(jiraTemplateFile, jiraRow, { encoding: "utf-8", flag: "a" });

  const clickupRow = `${name};To Do;${getClickupPriority(
    level,
  )};https://github.com/gorrion-io/production-readiness-checklist/blob/main${link.replace(
    ".",
    "",
  )};${scope}\n`;

  await appendFile(clickupTemplateFile, clickupRow, {
    encoding: "utf-8",
    flag: "a",
  });
});

console.log("Done!");
