import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { QuizQuestion, QuizAnswer, QuizStatus } from "@/types/quiz";

type QuizState = {
  questions: QuizQuestion[];
  answers: QuizAnswer[];
  current: number;
  status: QuizStatus;
  timeLeft: number;
  start: (questions: QuizQuestion[], duration: number) => void;
  answer: (answer: string) => void;
  skip: () => void;
  back: () => void;
  finish: () => void;
  reset: () => void;
  setTimeLeft: (sec: number) => void;
};

export const useQuizStore = create<QuizState>()(
  persist(
    (set, get) => ({
      questions: [],
      answers: [],
      current: 0,
      status: "idle",
      timeLeft: 0,
      start: (questions, duration) =>
        set(() => ({
          questions,
          answers: questions.map((_, i) => ({
            questionIndex: i,
            answer: "",
            isCorrect: false,
          })),
          current: 0,
          status: "ongoing",
          timeLeft: duration,
        })),
      answer: (answer: string) => {
        const { current, questions, answers } = get();
        if (!questions[current]) return;
        const isCorrect = answer === questions[current].correct_answer;
        const newAnswers = [...answers];
        newAnswers[current] = { questionIndex: current, answer, isCorrect };
        set({
          answers: newAnswers,
          current: Math.min(current + 1, questions.length - 1),
        });
      },
      skip: () => {
        const { current, answers } = get();
        if (answers[current].answer !== "") {
          set({
            current: Math.min(current + 1, answers.length - 1),
          });
          return;
        }
        const newAnswers = [...answers];
        newAnswers[current] = {
          questionIndex: current,
          answer: "",
          isCorrect: false,
        };
        set({
          answers: newAnswers,
          current: Math.min(current + 1, answers.length - 1),
        });
      },
      back: () => {
        const { current } = get();
        if (current <= 0) return;
        set({
          current: current - 1,
        });
      },
      finish: () =>
        set({
          status: "finished",
        }),
      reset: () =>
        set({
          questions: [],
          answers: [],
          current: 0,
          status: "idle",
          timeLeft: 0,
        }),
      setTimeLeft: (sec: number) =>
        set({
          timeLeft: sec,
        }),
    }),
    {
      name: "quiz-storage",
      partialize: (state) => ({
        questions: state.questions,
        answers: state.answers,
        current: state.current,
        status: state.status,
        timeLeft: state.timeLeft,
      }),
    }
  )
);
