import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bell, Users, Award, Sun } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white shadow-sm backdrop-blur">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sun className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-bold">早起きSNS</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              特徴
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              ユーザーの声
            </Link>
            <Link
              href="#register"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              登録する
            </Link>
          </nav>
          <Link href="#register">
            <button className="px-4 py-2 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors shadow-md">
              無料で始める
            </button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl/none">
                    毎朝の&quot;おはよう&quot;を共有しよう
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    仲間と楽しむ早起き習慣SNS。一人では続かない早起きも、みんなと一緒なら楽しく続けられます。
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#register">
                    <button className="px-6 py-3 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors inline-flex items-center">
                      無料で使ってみる
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative w-full max-w-[550px] aspect-square mx-auto">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  fill
                  alt="早起きSNSのイメージ"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                  早起きSNSとは？
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  毎朝起きたら時間を投稿し、仲間から&quot;いいね&quot;やコメントで励まされるサービスです。たったワンタップの報告が、あなたのモチベーションを変えます！
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                主な特徴
              </h2>
              <p className="max-w-[85%] text-gray-600 md:text-xl">
                シンプルで使いやすい機能で、あなたの早起き習慣をサポートします
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8 mt-8">
              <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  仲間と励まし合える
                </h3>
                <p className="text-gray-700 mt-2">
                  一人では挫折しがちな早起きも、SNSで応援し合うから頑張れる
                </p>
              </div>
              <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <Bell className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  シンプルな記録機能
                </h3>
                <p className="text-gray-700 mt-2">
                  ボタン一つで起床時間を投稿、余計な操作は不要
                </p>
              </div>
              <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  ゲーム感覚の達成感
                </h3>
                <p className="text-gray-700 mt-2">
                  バッジや称賛コメントで「続けたい」気持ちを維持
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* App Screenshots */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-gray-900">
                アプリの画面
              </h2>
              <p className="max-w-[85%] text-gray-700 md:text-xl">
                シンプルで使いやすいインターフェースで、毎朝の報告が楽しくなります
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="mx-auto overflow-hidden rounded-xl border border-gray-200 shadow-sm w-full max-w-[300px]">
                <div className="relative w-full aspect-[3/6]">
                  <Image
                    src="/placeholder.svg?height=600&width=300"
                    fill
                    alt="投稿画面"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">投稿画面</h3>
                  <p className="text-sm text-gray-600">
                    ワンタップで起床時間を投稿
                  </p>
                </div>
              </div>
              <div className="mx-auto overflow-hidden rounded-xl border border-gray-200 shadow-sm w-full max-w-[300px]">
                <div className="relative w-full aspect-[3/6]">
                  <Image
                    src="/placeholder.svg?height=600&width=300"
                    fill
                    alt="タイムライン画面"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">タイムライン</h3>
                  <p className="text-sm text-gray-600">
                    仲間の起床時間をチェック
                  </p>
                </div>
              </div>
              <div className="mx-auto overflow-hidden rounded-xl border border-gray-200 shadow-sm w-full max-w-[300px]">
                <div className="relative w-full aspect-[3/6]">
                  <Image
                    src="/placeholder.svg?height=600&width=300"
                    fill
                    alt="プロフィール画面"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">プロフィール</h3>
                  <p className="text-sm text-gray-600">
                    あなたの早起き記録を確認
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                ユーザーの声
              </h2>
              <p className="max-w-[85%] text-gray-600 md:text-xl">
                早起きSNSを使っている方々からの感想
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div>
                  <p className="mb-4 italic">
                    「このサービスのおかげで毎朝スッキリ起きられるようになりました！朝の時間を有効に使えるようになって、勉強の効率も上がりました。」
                  </p>
                </div>
                <div>
                  <p className="font-semibold">大学生 Aさん</p>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div>
                  <p className="mb-4 italic">
                    「仲間がいると挫折しないって本当ですね。早起きが楽しくなりました！在宅ワークでも生活リズムが整い、仕事の効率が上がっています。」
                  </p>
                </div>
                <div>
                  <p className="font-semibold">在宅ワーカー Bさん</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="register"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-blue-50"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                  さあ、始めましょう
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  無料で簡単に登録できます。仲間と一緒に、早起き習慣を身につけましょう。
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-2">
                  <input
                    type="email"
                    placeholder="メールアドレス"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-3 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors inline-flex items-center justify-center shadow-md"
                  >
                    無料で登録する
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </form>
                <p className="text-xs text-gray-600">
                  登録することで、
                  <Link href="#" className="underline underline-offset-2">
                    利用規約
                  </Link>
                  に同意したことになります。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 py-6 md:py-0 bg-white">
        <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-orange-500" />
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} 早起きSNS.
              本サービスは現在ベータ版です。
            </p>
          </div>
          <div className="flex items-center">
            <Link href="#register">
              <button className="px-4 py-2 text-sm text-gray-700 hover:text-orange-600 inline-flex items-center">
                無料で使ってみる
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
