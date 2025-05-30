import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function QuizLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return <>{children}</>;
}
