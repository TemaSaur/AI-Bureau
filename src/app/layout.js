import { Noto_Sans } from "next/font/google";
import "./globals.css";

const sans = Noto_Sans({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  title: "ИИБюро — Правовая помощь в один клик!",
  description: "Юридическая помощь от ИИ. Круглосуточная юридическая поддержка",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sans.className + " bg-light"}>{children}</body>
    </html>
  );
}
