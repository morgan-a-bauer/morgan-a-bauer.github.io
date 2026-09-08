import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { BeyondTheLab } from "@/components/sections/BeyondTheLab";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Beyond the Lab — M. Bauer",
  description:
    "Hobbies, media, and stats outside of robotics and analytics work.",
};

export default function BeyondTheLabPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <BeyondTheLab />
      </main>
      <Footer />
    </>
  );
}
