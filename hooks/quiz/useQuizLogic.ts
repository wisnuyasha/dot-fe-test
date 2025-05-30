import { useQuizStore } from "@/store/quiz-store";
import { useCallback } from "react";
import { useQuizQuestions } from "./useQuizQuestions";

const DURATION_SECONDS = 5 * 60;

export function useQuizLogic() {
  const {
    questions,
    answers,
    current,
    status,
    timeLeft,
    start,
    answer,
    skip,
    back,
    finish,
    reset,
    setTimeLeft,
  } = useQuizStore();

  const { isFetching, isLoading, isError, error, refetch } = useQuizQuestions();

  const startQuiz = async () => {
    const { data: fetched } = await refetch();
    if (fetched) {
      start(fetched, DURATION_SECONDS);
    }
  };

  const handleAnswer = useCallback(
    (selected: string) => {
      answer(selected);
    },
    [status, answer]
  );

  const handleSkip = useCallback(() => {
    skip();
  }, [status, skip]);

  const handleBack = useCallback(() => {
    back();
  }, [status, back]);

  const handleFinish = useCallback(() => {
    finish();
  }, [status, finish]);

  const totalQuestions = questions.length;
  const answeredCount = answers.filter((a) => a.answer !== "").length;
  const progress = totalQuestions
    ? Math.min((answeredCount / totalQuestions) * 100, 100)
    : 0;
  const correctCount = answers.filter((a) => a.isCorrect).length;
  const q = questions[current];
  const isAnswered = answers[current]?.answer !== "";

  return {
    questions,
    answers,
    current,
    status,
    timeLeft,
    start,
    setTimeLeft,
    handleAnswer,
    handleSkip,
    handleBack,
    handleFinish,
    reset,
    startQuiz,
    isLoading,
    isError,
    error,
    isFetching,
    totalQuestions,
    answeredCount,
    progress,
    correctCount,
    isAnswered,
    currentQuestion: q,
  };
}
