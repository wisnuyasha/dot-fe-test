import { OpenTDBApiResponse, QuizQuestion } from "@/types/quiz";

export async function fetchQuestions(): Promise<QuizQuestion[]> {
  const url = `https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple`;
  const res = await fetch(url);

  const data: OpenTDBApiResponse = await res.json();

  return data.results.map((q) => ({
    question: q.question,
    correct_answer: q.correct_answer,
    incorrect_answers: q.incorrect_answers,
    options: shuffle([q.correct_answer, ...q.incorrect_answers]),
  }));
}

function shuffle(arr: string[]) {
  return arr.sort(() => Math.random() - 0.5);
}
