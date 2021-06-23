type Answer = {
  content: string;
  highlight?: string[];
};

export type QAndA = {
  question: string;
  answers: Answer[];
};
