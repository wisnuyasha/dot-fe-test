import { signOutAction } from "@/hooks/login/actions";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

export default async function QuizPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <main
      id="main-content"
      className="min-h-screen w-full h-full flex flex-col items-center font-poppins justify-center bg-slate-50"
    >
      <h1
        className="text-6xl md:text-[13rem] absolute pointer-events-none font-semibold opacity-3 select-none"
        aria-hidden="true"
      >
        dot-fe-test
      </h1>
      <h2 className="text-2xl md:text-6xl font-semibold absolute">
        loading...
      </h2>
      <form action={signOutAction}>
        <button type="submit" className="mt-64 z-50 cursor-pointer">
          Sign out
        </button>
      </form>
    </main>
  );
}
