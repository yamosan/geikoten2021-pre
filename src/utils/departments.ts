import { promises as fs } from "fs";
import path from "path";
import type { Department } from "models/department";

export const EXECUTIVE_ID = [1, 2, 3, 4, 5];

export async function getDepartments() {
  const departmentsDirectory = path.join(process.cwd(), "src", "data", "departments");
  const filenames = await fs.readdir(departmentsDirectory);

  const items = filenames.map(async (filename) => {
    const filePath = path.join(departmentsDirectory, filename);
    const fileContents: Department = await fs.readFile(filePath, "utf8").then(JSON.parse);
    return fileContents;
  });
  const departments = await Promise.all(items);

  return departments.sort((a, b) => a.id - b.id);
}
