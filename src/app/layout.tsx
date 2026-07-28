import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Header from "@/components/Header";
import MobileBuyBar from "@/components/MobileBuyBar";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://biblioteca-lily-anjos.vercel.app"),
  title: "Guia do Decorador e Florista — Biblioteca Lily Anjos",
  description:
    "Guia do Decorador e Florista, da Biblioteca Lily Anjos: centenas de flores, folhagens e elementos da decoração de eventos reunidos em um só lugar. 5 volumes digitais, mais de 550 páginas, acesso imediato.",
  openGraph: {
    title: "Guia do Decorador e Florista — Biblioteca Lily Anjos",
    description:
      "Centenas de flores, folhagens e elementos da decoração de eventos reunidos em um só lugar.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c110d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-(--color-bg) text-(--color-text) pb-16 md:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <MobileBuyBar />
      </body>
    </html>
  );
}
