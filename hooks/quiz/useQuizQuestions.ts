import { useQuery } from "@tanstack/react-query";
import { fetchQuestions } from "@/utils/opentdb";
import type { QuizQuestion } from "@/types/quiz";

export function useQuizQuestions() {
  return useQuery<QuizQuestion[]>({
    queryKey: ["quiz-questions"],
    queryFn: () => fetchQuestions(),
    refetchOnWindowFocus: false,
    enabled: false,
  });
}
