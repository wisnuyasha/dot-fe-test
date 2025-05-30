"use client";
import { useQuizLogic } from "@/hooks/quiz/useQuizLogic";
import { useQuizTimer } from "@/hooks/quiz/useQuizTimer";
import QuizStartSection from "./quiz-start";
import QuizResultSection from "./quiz-result";
import QuizQuestionSection from "./quiz-questions";

export default function QuizPage() {
  const quiz = useQuizLogic();
  useQuizTimer(() => {
    if (quiz.status === "ongoing") quiz.handleFinish();
  });

  if (quiz.status === "idle") return <QuizStartSection {...quiz} />;
  if (quiz.isError)
    return (
      <main
        id="main-content"
        className="min-h-screen w-full h-full flex flex-col items-center px-4 md:px-8 font-poppins justify-center bg-slate-50"
      >
        <p className="text-lg font-bold text-red-500">
          Failed to load questions.
          <br />
          {(quiz.error as Error)?.message}
        </p>
      </main>
    );
  if (
    quiz.status === "finished" ||
    quiz.current >= quiz.totalQuestions ||
    quiz.timeLeft <= 0
  )
    return <QuizResultSection {...quiz} />;
  return <QuizQuestionSection {...quiz} />;
}
