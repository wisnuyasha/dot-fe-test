// TEMP: Auth disabled for prod screenshots - re-enable when done
// import { redirect } from "next/navigation";
// import { createClient } from "@/utils/supabase/server";

export default async function QuizLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TEMP: Skip auth check - allow quiz access without login
  // const supabase = await createClient();
  // const { data: { user } } = await supabase.auth.getUser();
  // if (!user) return redirect("/login");
  return <>{children}</>;
}
