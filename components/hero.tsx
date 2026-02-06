"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          style={{ y: y1 }}
          className="text-center lg:text-left space-y-6 lg:space-y-8 -mt-16 lg:mt-0 relative z-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
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
              className="px-8 py-4 bg-white text-black font-bold text-sm tracking-wider hover:bg-zinc-200 transition-colors rounded-full text-center"
            >
              ENTER PRESALE
            </Link>
            <Link
              href="#about"
              className="px-8 py-4 border border-white/20 text-white font-bold text-sm tracking-wider hover:bg-white/5 transition-colors rounded-full text-center"
            >
              READ WHITEPAPER
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-[400px] sm:h-[500px] lg:h-[700px] w-full order-first lg:order-last"
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

          {/* Floating Elements - Hidden on very small screens to avoid clutter */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-4 lg:bottom-20 lg:-left-10 z-20 glass-panel p-4 lg:p-6 rounded-xl border border-white/10 hidden sm:block"
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
            className="absolute top-10 right-4 lg:top-20 lg:-right-5 z-20 glass-panel p-4 lg:p-6 rounded-xl border border-white/10 hidden sm:block"
          >
            <div className="text-xs text-zinc-400 uppercase tracking-wider mb-1">
              Network
            </div>
            <div className="text-2xl font-bold font-mono text-pink-500">
              SOLANA
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
