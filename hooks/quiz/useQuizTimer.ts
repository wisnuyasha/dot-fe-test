import { useEffect } from "react";
import { useQuizStore } from "@/store/quiz-store";

export function useQuizTimer(onFinish: () => void) {
  const timeLeft = useQuizStore((s) => s.timeLeft);
  const setTimeLeft = useQuizStore((s) => s.setTimeLeft);
  const status = useQuizStore((s) => s.status);

  useEffect(() => {
    if (status !== "ongoing") return;
    if (timeLeft <= 0) {
      onFinish();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, status, setTimeLeft, onFinish]);
}
