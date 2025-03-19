import { AlarmClock } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col justify-center px-6 py-12">
        <div className="mx-auto w-full max-w-sm">
          <div className="flex flex-col items-center space-y-2 text-center">
            <AlarmClock className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold">おはよう日記</h1>
            <p className="text-sm text-gray-500">アカウントにログイン</p>
          </div>
          <div className="mt-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  メールアドレス
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    パスワード
                  </label>
                  <Link href="/forgot-password" className="text-xs text-blue-600 hover:underline">
                    パスワードをお忘れですか？
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                ログイン
              </button>
            </div>
            <div className="mt-4 text-center text-sm">
              アカウントをお持ちでないですか？{" "}
              <Link href="/register" className="text-blue-600 hover:underline">
                新規登録
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
