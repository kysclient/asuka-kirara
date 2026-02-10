"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Copy, ExternalLink } from "lucide-react";

const tokenInfo = [
  { label: "Total Supply", value: "1,000,000,000" },
  { label: "Network", value: "SOLANA", highlight: true },
  { label: "Taxes", value: "0/0" },
  { label: "Presale Allocation", value: "40%" },
  { label: "Liquidity Pool", value: "30%" },
  { label: "Marketing & Dev", value: "20%" },
  { label: "Team (Locked)", value: "10%" },
];

export function Tokenomics() {
  return (
    <section
      id="tokenomics"
      className="py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
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
            <h3 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              $KIRARA
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12">
              The $KIRARA token is the heartbeat of the ecosystem, designed to
              empower the community and provide exclusive access to the Kira
              Land metaverse.
            </p>

            <div className="space-y-0">
              {tokenInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex justify-between items-center border-b border-white/5 py-4 hover:bg-white/[0.02] px-2 -mx-2 rounded transition-colors"
                >
                  <span className="text-zinc-500 text-sm uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span
                    className={`text-lg font-mono font-bold ${
                      item.highlight ? "text-pink-500" : "text-white"
                    }`}
                  >
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            {/* Kirara Solana image card */}
            <div className="relative bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-indigo-500/10 rounded-2xl p-8 border border-white/5 overflow-hidden flex-1 flex items-center justify-center min-h-[300px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.1),transparent_70%)]" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-48 h-48 lg:w-64 lg:h-64"
              >
                <Image
                  src="/kirara_solana.png"
                  alt="Kirara Solana Token"
                  fill
                  className="object-contain drop-shadow-[0_0_30px_rgba(236,72,153,0.4)]"
                />
              </motion.div>

              {/* Orbiting dots */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-72 h-72 lg:w-96 lg:h-96 relative"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-pink-500 rounded-full" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-500 rounded-full" />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-indigo-500 rounded-full" />
                </motion.div>
              </div>
            </div>

            {/* Contract address card */}
            <div className="glass-panel rounded-2xl p-6 text-center">
              <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-3">
                Contract Address
              </h4>
              <div className="flex items-center justify-center gap-3">
                <p className="font-mono text-zinc-500 text-sm">Coming Soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
