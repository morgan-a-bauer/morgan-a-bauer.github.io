import type { Metadata } from "next";
import { Oswald, Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M. Bauer // Robotics & Analytics",
  description:
    "Portfolio of Morgan Bauer — robotics research and sports analytics engineering.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className="bg-cream text-charcoal flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}
