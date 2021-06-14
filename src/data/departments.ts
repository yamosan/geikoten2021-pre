import type { Department } from "models/department";

// 幹部
export const LEADERS: Department[] = [
  {
    id: 1,
    name: "芸工祭長",
    manager: {
      name: "脛骨",
      class: "3O",
    },
    qAndA: [],
  },
  {
    id: 2,
    name: "副祭長",
    manager: {
      name: "はんぶんこ",
      class: "3O",
    },
    qAndA: [],
  },
  {
    id: 3,
    name: "会計",
    manager: {
      name: "グリマネ",
      class: "3O",
    },
    qAndA: [],
  },
  {
    id: 4,
    name: "書記",
    manager: {
      name: "サブリナ",
      class: "3N",
    },
    qAndA: [],
  },
  {
    id: 5,
    name: "総務",
    manager: {
      name: "シャウエッセン",
      class: "3M",
    },
    qAndA: [],
  },
];

// 部署
export const DEPARTMENTS: Department[] = [
  {
    id: 6,
    name: "Web",
    manager: {
      name: "212",
      class: "3M",
    },
    qAndA: [],
  },
  {
    id: 7,
    name: "映像",
    manager: {
      name: "風月課長",
      class: "3M",
    },
    qAndA: [],
  },
  {
    id: 8,
    name: "グラフィック",
    manager: {
      name: "ラブマシーン",
      class: "3M",
    },
    qAndA: [],
  },
  {
    id: 9,
    name: "PA",
    manager: {
      name: "ベニ",
      class: "3M",
    },
    qAndA: [],
  },
  {
    id: 10,
    name: "昼ステ",
    manager: {
      name: "おだんござむらい",
      class: "3O",
    },
    qAndA: [],
  },
  {
    id: 11,
    name: "夜ステ",
    manager: {
      name: "マチュピチュ",
      class: "3N",
    },
    qAndA: [],
  },
  {
    id: 12,
    name: "ワークショップ",
    manager: {
      name: "スイレン",
      class: "3M",
    },
    qAndA: [],
  },
  {
    id: 13,
    name: "ディレクション",
    manager: {
      name: "みるみる",
      class: "3N",
    },
    qAndA: [],
  },
  {
    id: 14,
    name: "インテリア",
    manager: {
      name: "ロック・リー",
      class: "3O",
    },
    qAndA: [],
  },
  {
    id: 15,
    name: "エクステリア",
    manager: {
      name: "タピオカ",
      class: "3O",
    },
    qAndA: [],
  },
  {
    id: 16,
    name: "ブース",
    manager: {
      name: "エマ",
      class: "3N",
    },
    qAndA: [],
  },
  {
    id: 17,
    name: "カフェ",
    manager: {
      name: "エイミー",
      class: "3O",
    },
    qAndA: [],
  },
  {
    id: 18,
    name: "バー",
    manager: {
      name: "バサロ",
      class: "3N",
    },
    qAndA: [],
  },
  {
    id: 19,
    name: "運動家",
    manager: {
      name: "ラモス",
      class: "3O",
    },
    qAndA: [],
  },
];

export default [...LEADERS, ...DEPARTMENTS];
