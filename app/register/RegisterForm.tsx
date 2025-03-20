"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { registerUser } from "../actions/auth";

export default function RegisterForm() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success") === "true";
  const message = searchParams.get("message");

  return (
    <>
      {success ? (
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-800 text-center">
            登録確認メールを送信しました。メールのリンクをクリックして登録を完了してください。
          </p>
        </div>
      ) : (
        <form action={registerUser} className="mt-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="nickname"
                className="block text-sm font-medium text-gray-700"
              >
                ニックネーム
              </label>
              <input
                id="nickname"
                name="nickname"
                type="text"
                placeholder="山田 太郎"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                メールアドレス
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            {message && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-800 text-sm">{message}</p>
              </div>
            )}
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              アカウント登録
            </button>
          </div>
          <div className="mt-4 text-center text-sm">
            すでにアカウントをお持ちですか？{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              ログイン
            </Link>
          </div>
        </form>
      )}
    </>
  );
}
