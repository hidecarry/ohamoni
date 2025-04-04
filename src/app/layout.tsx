import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "早起きSNS",
  description: "仲間と楽しむ早起き習慣SNS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
