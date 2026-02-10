"use client";

import { Navbar } from "@/components/navbar";
import { PresaleForm } from "@/components/presale-form";
import { StarField } from "@/components/star-field";
import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Clock, Percent, Users, Flame } from "lucide-react";

export default function PresalePage() {
  return (
    <main className="min-h-screen bg-black selection:bg-pink-500 selection:text-white">
      <Navbar />
      <StarField />

      {/* Background image - lowest layer */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/pic_03.png"
          alt="Asuka Kirara - Exclusive presale background showcasing the icon behind $KIRARA token"
          fill
          className="object-cover opacity-10 grayscale blur-[6px]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
      </div>

      {/* Glow orbs - above starfield for color bleed */}
      <div className="fixed inset-0 z-[2] pointer-events-none">
        <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[130px] animate-glow-pulse" />
        <div
          className="absolute bottom-[5%] right-[-10%] w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-[130px] animate-glow-pulse"
          style={{ animationDelay: "-1.5s" }}
        />
        <div
          className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[150px] animate-glow-pulse"
          style={{ animationDelay: "-2.5s" }}
        />
        <div
          className="absolute top-[70%] left-[20%] w-[300px] h-[300px] bg-fuchsia-600/15 rounded-full blur-[100px] animate-glow-pulse"
          style={{ animationDelay: "-1s" }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(236,72,153,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(236,72,153,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i < 4 ? "w-1.5 h-1.5 bg-pink-500/30" : "w-1 h-1 bg-purple-400/25"}`}
            style={{
              left: `${10 + i * 11}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -(60 + i * 10), 0],
              x: [0, i % 2 === 0 ? 15 : -15, 0],
              opacity: [0.15, 0.5, 0.15],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 5 + i * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.5)_100%)]" />
      </div>

      <div className="relative pt-28 sm:pt-32 pb-20 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left side - Info */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Title area */}
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 mb-6"
                >
                  <Flame className="w-3.5 h-3.5 text-pink-500" />
                  <span className="text-pink-400 text-xs font-bold tracking-wider uppercase">
                    Limited Allocation
                  </span>
                </motion.div>

                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
                  Secure Your <br />
                  <span className="text-gradient">Early Access</span>
                </h1>
                <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-lg">
                  Participate in the exclusive presale event for Asuka
                  Kirara&apos;s official Web3 ecosystem. Early supporters
                  receive premium benefits and priority access to future drops.
                </p>
              </div>

              {/* Progress bar card */}
              <div className="glass-panel rounded-2xl p-6 space-y-4">
                <div className="flex justify-between text-sm text-zinc-400 mb-1">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-pink-500" />
                    Funding Progress
                  </span>
                  <span className="text-pink-500 font-bold font-mono">65%</span>
                </div>
                <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "65%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 rounded-full relative"
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse" />
                  </motion.div>
                </div>
                <div className="flex justify-between text-xs text-zinc-500 font-mono">
                  <span>Soft Cap: 50,000 USDT</span>
                  <span>Hard Cap: 200,000 USDT</span>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  {
                    icon: Percent,
                    value: "0%",
                    label: "Taxes",
                    color: "text-green-400",
                  },
                  {
                    icon: Clock,
                    value: "3 Mo",
                    label: "Lockup",
                    color: "text-blue-400",
                  },
                  {
                    icon: Shield,
                    value: "Audit",
                    label: "Verified",
                    color: "text-purple-400",
                  },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="glass-panel rounded-xl p-4 text-center hover:bg-white/10 transition-colors group"
                  >
                    <stat.icon
                      className={`w-5 h-5 mx-auto mb-2 ${stat.color} group-hover:scale-110 transition-transform`}
                    />
                    <div className="text-xl sm:text-2xl font-bold text-white font-mono">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-[0.15em] font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right side - Form */}
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
