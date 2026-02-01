"use server";

// TEMP: Bypass login - always redirect to quiz when button clicked
// import { loginSchema } from "@/types/login";
// import { encodedRedirect } from "@/utils/redirect";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function signInAction(_formData: FormData) {
  // TEMP: Skip real auth - just go to quiz
  // const raw = { email: formData.get("email"), password: formData.get("password") };
  // const result = loginSchema.safeParse(raw);
  // if (!result.success) { ... }
  // const supabase = await createClient();
  // const { error } = await supabase.auth.signInWithPassword({ email, password });
  // if (error) return encodedRedirect("error", "/login", error.message);
  return redirect("/quiz");
}

export const signOutAction = async () => {
  const supabase = await createClient();

  await supabase.auth.signOut();

  return redirect("/login");
};
