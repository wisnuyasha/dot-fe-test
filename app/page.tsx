import { redirect } from "next/navigation";
// TEMP: Auth disabled for prod screenshots - re-enable when done
// import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  // TEMP: Skip auth check - always go to quiz for SS
  // const supabase = await createClient();
  // const { data: { user } } = await supabase.auth.getUser();
  // if (!user) return redirect("/login");
  return redirect("/quiz");
}
