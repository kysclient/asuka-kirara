"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Rocket, Zap, Timer, TrendingUp } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const y1 = useTransform(smoothScrollY, [0, 500], [0, 100]);
  const y2 = useTransform(smoothScrollY, [0, 500], [0, -80]);
  const opacity = useTransform(smoothScrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "-1.5s" }} />
        <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "-2s" }} />
      </div>

      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-4 lg:gap-12 items-center">
        <motion.div
          style={{ y: y1, opacity }}
          className="text-center lg:text-left space-y-6 lg:space-y-8 -mt-32 lg:mt-0 relative z-20 will-change-transform"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Live badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 mb-6"
            >
              <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
              <span className="text-pink-400 text-xs font-bold tracking-wider uppercase">
                Private Sale Live
              </span>
            </motion.div>

            <h2 className="text-pink-500 font-bold tracking-[0.3em] text-xs mb-4 uppercase font-serif">
              The Queen of Web3
            </h2>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-serif font-bold leading-[0.9]">
              ASUKA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
                KIRARA
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-zinc-400 text-lg max-w-md mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0"
          >
            From industry icon to blockchain revolutionary. Join the exclusive
            ecosystem built around elegance, transformation, and digital
            ownership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              href="/presale"
              className="group relative px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold text-sm tracking-wider rounded-full text-center overflow-hidden transition-all hover:shadow-lg hover:shadow-pink-500/25"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Rocket className="w-4 h-4" />
                ENTER PRESALE
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="#about"
              className="px-8 py-4 border border-white/20 text-white font-bold text-sm tracking-wider hover:bg-white/5 hover:border-white/30 transition-all rounded-full text-center"
            >
              READ WHITEPAPER
            </Link>
          </motion.div>

          {/* Quick stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4"
          >
            {[
              { icon: Zap, label: "0% Tax", color: "text-yellow-400" },
              { icon: Timer, label: "3Mo Lock", color: "text-blue-400" },
              { icon: TrendingUp, label: "100x Potential", color: "text-green-400" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5 text-zinc-500 text-xs">
                <item.icon className={`w-3.5 h-3.5 ${item.color}`} />
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-[400px] sm:h-[500px] lg:h-[700px] w-full order-first lg:order-last will-change-transform"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black z-10 hidden lg:block" />

          <Image
            src="/1.webp"
            alt="Asuka Kirara"
            fill
            className="object-cover object-top lg:object-center rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-out"
            priority
          />

          {/* Floating info cards */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-4 lg:bottom-20 lg:-left-10 z-20 glass-panel-strong p-4 lg:p-6 rounded-xl border border-white/10 hidden sm:block"
          >
            <div className="text-xs text-zinc-400 uppercase tracking-wider mb-1">
              Total Supply
            </div>
            <div className="text-2xl font-bold font-mono text-white">
              1,000,000,000
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-10 right-4 lg:top-20 lg:-right-5 z-20 glass-panel-strong p-4 lg:p-6 rounded-xl border border-white/10 hidden sm:block"
          >
            <div className="text-xs text-zinc-400 uppercase tracking-wider mb-1">
              Network
            </div>
            <div className="text-2xl font-bold font-mono text-pink-500">
              SOLANA
            </div>
          </motion.div>

          {/* kirara_solana.png floating element */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 3, -3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-4 right-4 lg:bottom-10 lg:right-10 z-20 hidden sm:block"
          >
            <div className="relative w-20 h-20 lg:w-28 lg:h-28">
              <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-xl animate-pulse" />
              <Image
                src="/kirara_solana.png"
                alt="Kirara Solana"
                fill
                className="object-contain drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-zinc-600 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 border border-zinc-700 rounded-full flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-1 bg-pink-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
