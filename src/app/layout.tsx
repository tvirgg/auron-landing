import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Preloader from "../components/Preloader";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Auron Bundler — Launch & Trade Automation",
  description: "Auron Bundler — автоматизация запуска токена, объёмов, сделок и кошельков.",
  icons: {
    icon: "/logo-auron.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Небольшой плавный прелоадер */}
        <Preloader />

        {children}
      </body>
    </html>
  );
}
