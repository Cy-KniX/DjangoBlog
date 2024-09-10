import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cy-Tips",
  description: "Tips for Cybersecurity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <main className="px-16">{children}</main>
        </body>
        
    </html>
  );
}
