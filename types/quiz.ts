export type OpenTDBApiQuestion = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type OpenTDBApiResponse = {
  response_code: number;
  results: OpenTDBApiQuestion[];
};

export type QuizQuestion = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  options: string[];
};

export type QuizAnswer = {
  questionIndex: number;
  answer: string;
  isCorrect: boolean;
};

export type QuizStatus = "idle" | "ongoing" | "finished";
