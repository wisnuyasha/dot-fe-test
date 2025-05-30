import { Button } from "@/components/button";
import { signOutAction } from "@/hooks/login/actions";
import { MdQuiz } from "react-icons/md";

interface QuizStartSectionProps {
  isFetching: boolean;
  startQuiz: () => void;
}

export default function QuizStartSection({
  isFetching,
  startQuiz,
}: QuizStartSectionProps) {
  return (
    <main
      id="main-content"
      className="min-h-screen w-full h-full flex flex-col items-center px-4 md:px-8 font-poppins justify-center bg-slate-50"
    >
      <form action={signOutAction} className="absolute left-4 top-4">
        <Button type="submit" className="bg-slate-600 cursor-pointer">
          Sign out
        </Button>
      </form>
      <section className="w-full max-w-4xl h-full flex flex-col gap-5 md:gap-7 p-8 md:p-10 bg-white rounded-lg items-center">
        <MdQuiz className="size-14 md:size-16 text-neutral-700" />
        <h1 className="text-4xl md:text-5xl font-bold text-center text-neutral-700">
          Quiz App
        </h1>
        <p className="max-w-[40ch] text-base md:text-lg text-neutral-700 font-medium text-center">
          Ready for a quick trip through easy history facts? Let’s see how much
          you remember!
        </p>
        <p className="font-semibold text-sm md:text-base text-neutral-700 text-center">
          10 Questions • 5 Minutes • History • Easy
        </p>
        <Button
          className="bg-slate-500 hover:bg-slate-600"
          onClick={startQuiz}
          disabled={isFetching}
        >
          {isFetching ? "Loading..." : "Start Quiz"}
        </Button>
      </section>
    </main>
  );
}
