import { FormMessage } from "@/components/form-message";
import LoginForm from "@/components/login/login-form";
import { AuthMessage } from "@/types/auth";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

interface LoginPageProps {
  searchParams: Promise<AuthMessage>;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;

  return (
    <main
      id="main-content"
      role="main"
      className="min-h-screen w-full h-full flex flex-col items-center font-poppins justify-center bg-slate-50 px-4"
    >
      <section
        aria-labelledby="login-form-heading"
        className="flex h-fit flex-col rounded-xl border-[1px] border-slate-300 bg-white p-6 shadow-sm md:p-10 w-full sm:w-fit sm:min-w-96"
      >
        <div className="space-y-2.5 mb-4">
          <h1
            id="login-form-heading"
            className="font-sans font-bold text-slate-900 text-4xl"
          >
            Login
          </h1>
          <p className="font-sans text-sm text-slate-500">
            Please enter your name and password to log in.
          </p>
        </div>
        <LoginForm />
        <FormMessage message={params} />
      </section>
    </main>
  );
}
