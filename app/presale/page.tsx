"use client";

import { Navbar } from "@/components/navbar";
import { PresaleForm } from "@/components/presale-form";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PresalePage() {
  return (
    <main className="min-h-screen bg-black selection:bg-pink-500 selection:text-white">
      <Navbar />

      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/2.jpg"
          alt="Background"
          fill
          className="object-cover opacity-60 grayscale-[0.2] blur-[2px]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-10" />

        {/* Abstract Glows */}
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-pink-600/30 rounded-full blur-[130px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[700px] h-[700px] bg-purple-600/30 rounded-full blur-[130px] mix-blend-screen animate-pulse" />
      </div>

      <div className="relative pt-32 pb-20 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-panel p-8 lg:p-12 rounded-3xl border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-pink-500/50" />

              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                Secure Your <br />
                <span className="text-pink-500 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  Early Access
                </span>
              </h1>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-lg">
                Participate in the exclusive presale event for Asuka Kirara's
                official Web3 ecosystem. Early supporters receive premium
                benefits and priority access to future drops.
              </p>

              <div className="space-y-4 max-w-md">
                <div className="flex justify-between text-sm text-zinc-400 mb-1">
                  <span>Progress</span>
                  <span className="text-pink-500 font-bold">65%</span>
                </div>
                <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "65%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 rounded-full"
                  />
                </div>
                <div className="flex justify-between text-xs text-zinc-500 font-mono">
                  <span>Soft Cap: 50,000 USDT</span>
                  <span>Hard Cap: 200,000 USDT</span>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8 max-w-sm">
                <div className="group">
                  <div className="text-3xl font-bold text-white group-hover:text-pink-500 transition-colors">
                    0
                  </div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-medium">
                    Taxes
                  </div>
                </div>
                <div className="group">
                  <div className="text-3xl font-bold text-white group-hover:text-purple-500 transition-colors">
                    3 Mo
                  </div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-medium">
                    Lockup
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <PresaleForm />
          </div>
        </div>
      </div>

      <footer className="py-8 text-center text-zinc-600 text-sm relative z-10">
        <p>&copy; 2026 ASUKA KIRARA. All rights reserved.</p>
      </footer>
    </main>
  );
}
