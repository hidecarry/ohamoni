export const dynamic = 'force-dynamic';

import { AlarmClock, Book, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// import prisma from "../../lib/prisma";
// import { createPrismaClientWithD1 } from "../../lib/prisma-d1";

export interface Env {
  // If you set another name in the Wrangler config file for the value for 'binding',
  // replace "DB" with the variable name you defined.
  DB: D1Database;
}

export default async function Home() {
  console.log("process.env.DB:", process.env.DB);
  console.log("process.env.DATABASE_URL:", process.env.DATABASE_URL);
  console.log("Using Prisma client");

  // Use the appropriate Prisma client based on the environment
  // const client =
  //   process.env.NODE_ENV === "production" && process.env.DB
  //     ? createPrismaClientWithD1(process.env.DB as unknown as D1Database)
  //     : prisma;
  // const results = await client.customers.findMany({
  //   where: {
  //     CompanyName: "Bs Beverages",
  //   },
  // });
  // console.log(results);
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <AlarmClock className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">おはよう日記sabun</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-blue-600"
            >
              機能
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-blue-600"
            >
              使い方
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-blue-600"
            >
              ユーザーの声
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
                ログイン
              </button>
            </Link>
            <Link href="/register">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
                無料登録
              </button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container mx-auto px-4 py-24 md:py-32">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  起床時間を記録して、
                  <br />
                  毎日を大切に
                </h1>
                <p className="text-xl text-gray-500">
                  起床時間の記録と日記をシンプルに一つのアプリで。あなたの生活リズムを整え、日々の思い出を残しましょう。
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <button className="w-full min-[400px]:w-auto px-6 py-3 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 flex items-center justify-center">
                    今すぐ始める
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
                <Link href="#how-it-works">
                  <button className="w-full min-[400px]:w-auto px-6 py-3 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
                    詳しく見る
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[450px]">
                <Image
                  src="/placeholder.svg?height=450&width=450"
                  alt="おはよう日記アプリのイメージ"
                  className="w-full h-full object-contain"
                  width={450}
                  height={450}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                主な機能
              </h2>
              <p className="mt-4 text-xl text-gray-500">
                シンプルで使いやすい機能で、あなたの毎日をサポートします
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="mb-4 rounded-full bg-blue-100 p-3 w-fit">
                  <AlarmClock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">起床時間の記録</h3>
                <p className="mt-2 text-gray-500">
                  毎日の起床時間を簡単に記録。グラフやカレンダーで傾向を確認できます。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="mb-4 rounded-full bg-blue-100 p-3 w-fit">
                  <Book className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">日記機能</h3>
                <p className="mt-2 text-gray-500">
                  その日あったことや感じたことを記録。写真も添付できます。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="mb-4 rounded-full bg-blue-100 p-3 w-fit">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">統計と分析</h3>
                <p className="mt-2 text-gray-500">
                  睡眠パターンを分析し、より良い生活リズムのためのアドバイスを提供します。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                使い方
              </h2>
              <p className="mt-4 text-xl text-gray-500">
                シンプルな3ステップで始められます
              </p>
            </div>
            <div className="grid gap-10 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold">アカウント作成</h3>
                <p className="mt-2 text-gray-500">
                  メールアドレスで簡単に登録できます。SNSアカウントでのログインも可能です。
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold">起床時間を記録</h3>
                <p className="mt-2 text-gray-500">
                  朝起きたら、ワンタップで起床時間を記録。習慣化すれば自動的に記録することも可能です。
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold">日記を書く</h3>
                <p className="mt-2 text-gray-500">
                  その日の出来事や感想を記録。短い一言でも、長文でも自由に書けます。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ユーザーの声
              </h2>
              <p className="mt-4 text-xl text-gray-500">
                実際に使っている方々からの感想
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="font-bold text-blue-600">T.K</span>
                  </div>
                  <div>
                    <p className="font-bold">田中 健太</p>
                    <p className="text-sm text-gray-500">会社員 / 32歳</p>
                  </div>
                </div>
                <p className="text-gray-500">
                  「朝型の生活に切り替えたくて使い始めました。起床時間を記録するのが習慣になり、自然と早起きできるようになりました。日記も続けられて一石二鳥です。」
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="font-bold text-blue-600">Y.M</span>
                  </div>
                  <div>
                    <p className="font-bold">山田 美咲</p>
                    <p className="text-sm text-gray-500">学生 / 22歳</p>
                  </div>
                </div>
                <p className="text-gray-500">
                  「授業の前に早起きする習慣をつけたかったので使っています。グラフで起床時間の変化が見られるのがモチベーションになります。日記も短く書けるので続けやすいです。」
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="font-bold text-blue-600">S.K</span>
                  </div>
                  <div>
                    <p className="font-bold">佐藤 健一</p>
                    <p className="text-sm text-gray-500">フリーランス / 41歳</p>
                  </div>
                </div>
                <p className="text-gray-500">
                  「在宅勤務で生活リズムが崩れがちでしたが、このアプリのおかげで規則正しい生活に戻れました。日記を書く習慣も身につき、毎日の振り返りができるようになりました。」
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="rounded-lg bg-blue-600 p-8 md:p-12 lg:p-16">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  今日から始めましょう
                </h2>
                <p className="mt-4 text-xl text-white/90">
                  起床時間の記録と日記をつけることで、より充実した毎日を。
                </p>
                <div className="mt-8">
                  <Link href="/register">
                    <button className="px-6 py-3 bg-white text-blue-600 rounded-md text-sm font-medium hover:bg-gray-100 w-full sm:w-auto">
                      無料で始める
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <AlarmClock className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">おはよう日記</span>
            </div>
            <nav className="flex gap-6">
              <Link
                href="#"
                className="text-sm font-medium hover:text-blue-600"
              >
                利用規約
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:text-blue-600"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:text-blue-600"
              >
                お問い合わせ
              </Link>
            </nav>
            <div className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} おはよう日記 All rights
              reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
