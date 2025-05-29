"use server";

import { loginSchema } from "@/types/login";
import { encodedRedirect } from "@/utils/redirect";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function signInAction(formData: FormData) {
  const raw = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = loginSchema.safeParse(raw);

  if (!result.success) {
    const firstError =
      Object.values(result.error.flatten().fieldErrors)[0]?.[0] ??
      "Login Failed";

    return encodedRedirect("error", "/login", firstError);
  }

  const { email, password } = result.data;

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/login", error.message);
  }

  return redirect("/quiz");
}

export const signOutAction = async () => {
  const supabase = await createClient();

  await supabase.auth.signOut();

  return redirect("/login");
};
