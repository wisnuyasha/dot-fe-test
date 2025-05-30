import { FaMedal, FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Button } from "@/components/button";

interface QuizResultSectionProps {
  answeredCount: number;
  correctCount: number;
  totalQuestions: number;
  reset: () => void;
}

export default function QuizResultSection({
  answeredCount,
  correctCount,
  totalQuestions,
  reset,
}: QuizResultSectionProps) {
  return (
    <main
      id="main-content"
      className="min-h-screen w-full h-full flex flex-col items-center px-4 md:px-8 font-poppins justify-center bg-slate-50"
    >
      <section className="w-full max-w-4xl h-full flex flex-col gap-5 p-10 bg-white rounded-lg items-center">
        <FaMedal className="size-14 md:size-18 text-neutral-800" />
        <h1 className="font-bold text-3xl md:text-4xl text-neutral-700">
          Overall Performances
        </h1>
        <p className="font-medium text-lg text-neutral-600">
          <span className="font-bold">{answeredCount}</span> Answered of{" "}
          {totalQuestions}
        </p>
        <div className="space-y-3 min-w-52">
          <div className="flex font-semibold items-center justify-between">
            <div className="flex items-center gap-x-4">
              <div className="flex items-center justify-center rounded-sm bg-emerald-600 size-7">
                <FaCheck className="text-white size-4" />
              </div>
              <p className="text-neutral-600">Correct Answer</p>
            </div>
            <p className="text-neutral-600">{correctCount}</p>
          </div>
          <div className="flex font-semibold items-center justify-between">
            <div className="flex items-center gap-x-4">
              <div className="flex items-center justify-center rounded-sm bg-rose-700 size-7">
                <IoClose className="text-white size-5" />
              </div>
              <p className="text-neutral-600">Wrong Answer</p>
            </div>
            <p className="text-neutral-600">{answeredCount - correctCount}</p>
          </div>
        </div>
        <Button
          onClick={reset}
          className="font-semibold px-12 bg-slate-500 hover:bg-slate-600"
        >
          Exit
        </Button>
      </section>
    </main>
  );
}
