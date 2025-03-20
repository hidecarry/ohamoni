"use server";

import { createClient } from "../lib/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { AuthError } from "@supabase/supabase-js";

export async function registerUser(formData: FormData): Promise<void> {
  const nickname = formData.get("nickname") as string;
  const email = formData.get("email") as string;
  // Generate a random password since we're using email-based authentication
  const password =
    Math.random().toString(36).slice(-10) +
    Math.random().toString(36).slice(-10);

  if (!nickname || !email) {
    redirect(
      `/register?message=${encodeURIComponent(
        "ニックネームとメールアドレスは必須です"
      )}`
    );
  }

  const supabase = createClient();

  try {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { nickname },
        emailRedirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback`,
      },
    });

    if (error) {
      console.error("Supabase auth error:", error);
      redirect(`/register?message=${encodeURIComponent(error.message)}`);
    }

    revalidatePath("/register");
    redirect("/register?success=true");
  } catch (error: unknown) {
    console.error("Registration error:", error);
    const errorMessage =
      error instanceof AuthError
        ? error.message
        : "登録処理中にエラーが発生しました";
    redirect(`/register?message=${encodeURIComponent(errorMessage)}`);
  }
}
