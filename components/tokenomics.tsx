"use client";

import { motion } from "framer-motion";

export function Tokenomics() {
  return (
    <section
      id="tokenomics"
      className="py-32 bg-zinc-950 relative border-t border-white/5"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-pink-500 font-medium tracking-widest text-sm mb-4 uppercase">
              Economics
            </h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-8">
              $KIRARA
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12">
              The $KIRARA token is the heartbeat of the ecosystem, designed to
              empower the community and provide exclusive access to the Kira
              Land metaverse.
            </p>

            <div className="space-y-8">
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <span className="text-zinc-500 text-sm uppercase tracking-wider">
                  Total Supply
                </span>
                <span className="text-2xl font-mono text-white">
                  1,000,000,000
                </span>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <span className="text-zinc-500 text-sm uppercase tracking-wider">
                  Network
                </span>
                <span className="text-2xl font-mono text-pink-500">SOLANA</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <span className="text-zinc-500 text-sm uppercase tracking-wider">
                  Taxes
                </span>
                <span className="text-2xl font-mono text-white">0/0</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 10, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl p-12 border border-white/5 flex flex-col justify-center items-center text-center backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-[url('/1.webp')] opacity-5 bg-cover bg-center rounded-2xl" />
            <h4 className="text-2xl font-serif text-white mb-2 z-10">
              Contract Address
            </h4>
            <p className="font-mono text-zinc-500 z-10 break-all">
              Coming Soon
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
