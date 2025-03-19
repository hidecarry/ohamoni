import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://ohamoni.com"
  ),
  title: process.env.NEXT_PUBLIC_SITE_TITLE,
  description:
    "起床時間の記録と日記をシンプルに一つのアプリで。あなたの生活リズムを整え、日々の思い出を残しましょう。無料で始められる早起き習慣化アプリ。",
  keywords:
    "おはよう日記,起床時間記録,日記アプリ,生活リズム改善,早起き習慣,睡眠管理,朝活",
  authors: [{ name: "おはよう日記" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://ohamoni.com/",
    title: process.env.NEXT_PUBLIC_SITE_TITLE,
    description:
      "起床時間の記録と日記をシンプルに一つのアプリで。あなたの生活リズムを整え、日々の思い出を残しましょう。",
    // images: [{ url: "/og-image.svg" }],
    locale: "ja_JP",
    siteName: "おはよう日記",
  },
  twitter: {
    card: "summary_large_image",
    title: process.env.NEXT_PUBLIC_SITE_TITLE,
    description:
      "起床時間の記録と日記をシンプルに一つのアプリで。あなたの生活リズムを整え、日々の思い出を残しましょう。",
    // images: ["/twitter-image.svg"],
  },
  alternates: {
    canonical: "https://ohamoni.com/",
  },
  appleWebApp: {
    title: "おはよう日記",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics gaId="G-VCY4BXMWQ9" />
      </body>
    </html>
  );
}
