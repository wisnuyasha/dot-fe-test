// import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  } else {
    return redirect("/quiz");
  }

  // return (
  //   <main
  //     id="main-content"
  //     className="min-h-screen w-full h-full flex flex-col items-center justify-center bg-slate-50"
  //   >
  //     <h1
  //       className="text-6xl md:text-[13rem]  absolute font-semibold opacity-3 select-none"
  //       aria-hidden="true"
  //     >
  //       dot-fe-test
  //     </h1>
  //     <h2 className="text-2xl md:text-6xl  font-semibold absolute">
  //       redirecting...
  //     </h2>
  //   </main>
  // );
}
