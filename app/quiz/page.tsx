import { Metadata } from "next";
import QuizPage from "@/components/quiz/quiz-page";

export const metadata: Metadata = {
  title: "Quiz | DOT FE Test",
  description: "Login page",
};

export default function Page() {
  return <QuizPage />;
}
