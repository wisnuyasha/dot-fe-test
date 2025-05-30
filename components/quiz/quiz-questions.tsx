import { Button } from "@/components/button";
import { RiHourglassFill } from "react-icons/ri";
import React from "react";
import { formatTime } from "@/utils/formatTime";
import cn from "@/lib/cn";

interface QuizQuestionSectionProps {
  questions: any[];
  answers: any[];
  current: number;
  status: string;
  timeLeft: number;
  handleAnswer: (answer: string) => void;
  handleSkip: () => void;
  handleBack: () => void;
  handleFinish: () => void;
  totalQuestions: number;
  answeredCount: number;
  progress: number;
  currentQuestion: any;
}

export default function QuizQuestionSection({
  answers,
  current,
  timeLeft,
  handleAnswer,
  handleSkip,
  handleBack,
  handleFinish,
  totalQuestions,
  answeredCount,
  progress,
  currentQuestion,
}: QuizQuestionSectionProps) {
  return (
    <main
      id="main-content"
      className="min-h-screen w-full h-full flex flex-col items-center px-4 md:px-8 font-poppins justify-center bg-slate-50"
    >
      <section className="w-full max-w-6xl h-full flex flex-col p-6 bg-white rounded-lg">
        <header className="w-full flex justify-between items-center border-b-3 border-slate-50 pb-6">
          <div className="flex flex-col">
            <div className="flex items-center">
              <RiHourglassFill className="size-4.5 md:size-[22px] text-neutral-500" />
              <p className="font-bold text-neutral-700 text-xl md:text-2xl">
                {formatTime(timeLeft)}
              </p>
            </div>
            <p className="text-neutral-500 text-sm md:text-base font-medium">
              Time Remaining
            </p>
          </div>
          <Button
            onClick={handleFinish}
            className="bg-neutral-100 gap-x-2 text-neutral-600 font-semibold text-sm md:text-base hover:outline-1 outline-neutral-400"
          >
            <div className="bg-neutral-500 size-2.5 rounded-[2px]" />
            Finish
          </Button>
        </header>
        <div className="md:px-20 lg:px-32 px-5 w-full h-[36rem] flex flex-col items-center justify-center">
          <div className="w-full h-fit gap-y-8 items-start flex flex-col">
            <p className="font-semibold text-base mx-auto md:mx-0 md:text-lg -mb-5 flex items-center text-center md:text-left text-neutral-700">
              No.{current + 1}
            </p>
            <p className="font-bold text-2xl md:text-4xl flex items-center text-center md:text-left text-neutral-700">
              <span
                dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
              />
            </p>
            <div className="flex flex-wrap gap-4 justify-start max-w-[36rem]">
              {currentQuestion.options.map((option: string) => {
                const userAnswered = answers.find(
                  (a) => a.questionIndex === current
                );
                const isSelected =
                  userAnswered && userAnswered.answer === option;
                return (
                  <div
                    key={option}
                    className={cn(
                      "border-1 flex group cursor-pointer items-center gap-x-2 rounded-md py-2 w-full sm:w-68 px-2",
                      isSelected
                        ? "border-slate-500 bg-neutral-100"
                        : "bg-white hover:bg-neutral-100 border-neutral-200"
                    )}
                    onClick={() => handleAnswer(option)}
                  >
                    <div
                      className={cn(
                        "rounded-full min-w-4.5 min-h-4.5 flex items-center justify-center border-1",
                        isSelected
                          ? "border-slate-500"
                          : "border-neutral-300 group-hover:border-slate-500"
                      )}
                    >
                      <div
                        className={cn(
                          "size-2.5 rounded-full bg-slate-500",
                          isSelected
                            ? "bg-slate-500"
                            : " group-hover:bg-slate-500 bg-white"
                        )}
                      />
                    </div>
                    <p
                      className={cn(
                        "text-sm md:text-base font-medium",
                        isSelected
                          ? "text-neutral-900"
                          : "group-hover:text-neutral-900 text-neutral-500"
                      )}
                      dangerouslySetInnerHTML={{ __html: option }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="w-full h-fit flex gap-x-4">
              <Button
                className="sm:min-w-36 w-full sm:w-fit font-semibold bg-slate-100 text-slate-500 hover:outline-1 disabled:outline-0 outline-slate-300"
                onClick={handleBack}
                disabled={current === 0}
              >
                Back
              </Button>
              {current === totalQuestions - 1 ? (
                <Button
                  className="sm:min-w-36 w-full sm:w-fit font-semibold bg-slate-500 hover:bg-slate-600 "
                  onClick={handleFinish}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  className="sm:min-w-36 w-full sm:w-fit font-semibold bg-slate-500 hover:bg-slate-600"
                  onClick={handleSkip}
                >
                  Skip
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="w-full max-w-6xl flex gap-x-4 mt-3 md:mt-4">
        <div className="flex w-full items-center justify-center flex-grow">
          <div className="overflow-hidden relative w-full flex items-start h-1.5 bg-gray-200 rounded-full">
            <div
              className="absolute left-0 h-1.5 bg-slate-400 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <p className="min-w-fit text-sm font-semibold text-neutral-600">
          {answeredCount}/{totalQuestions} Answered
        </p>
      </div>
    </main>
  );
}
