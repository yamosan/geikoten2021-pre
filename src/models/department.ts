import { QAndA } from "models/qAndA";
type TClass = "3M" | "3N" | "3O";

export type Department = {
  id: number;
  name: string;
  displayName: string;
  managers: {
    name: string;
    shortenedName?: string;
    class: TClass;
  }[];
  qAndA: QAndA[];
};
