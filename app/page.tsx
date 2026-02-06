import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Gallery } from "@/components/gallery";
import { Tokenomics } from "@/components/tokenomics";
import { Community } from "@/components/community";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-pink-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Tokenomics />
      <Community />
    </main>
  );
}
