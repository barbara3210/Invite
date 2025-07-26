import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Zrinka & Mato",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}