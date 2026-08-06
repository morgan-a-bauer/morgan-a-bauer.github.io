import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { CV } from "@/components/sections/CV";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "CV — M. Bauer",
  description:
    "Curriculum vitae of Morgan Bauer — robotics research and sports analytics engineering.",
};

export default function CVPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <CV />
      </main>
      <Footer />
    </>
  );
}
