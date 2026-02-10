import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Gallery } from "@/components/gallery";
import { Tokenomics } from "@/components/tokenomics";
import { Community } from "@/components/community";
import { StarField } from "@/components/star-field";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">
        Asuka Kirara - Official $KIRARA Token on Solana Blockchain
      </h1>
      <main className="min-h-screen bg-black selection:bg-pink-500 selection:text-white">
        <StarField />
        <Navbar />
        <Hero />
        <About />
        <Gallery />
        <Tokenomics />
        <Community />
      </main>
    </>
  );
}
