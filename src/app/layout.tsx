import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valozzi — Estratégia, Consórcio e Patrimônio",
  description:
    "Estratégia, planejamento e consórcio para quem pensa além do presente. A Valozzi trabalha com consórcio como parte de uma estratégia de aquisição patrimonial.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-valozzi-offwhite text-valozzi-black">
        {children}
      </body>
    </html>
  );
}
