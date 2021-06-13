import { QAndA } from "models/qAndA";
type TClass = "3M" | "3N" | "3O";

export type Department = {
  id: number;
  name: string;
  manager: {
    name: string;
    class: TClass;
  };
  qAndA: QAndA[]; // TODO: 正規化
};
