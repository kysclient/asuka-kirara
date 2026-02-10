"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Shield, Gem, Users } from "lucide-react";

const stats = [
  { label: "Followers", value: "5M+", icon: Users },
  { label: "Industry Awards", value: "15+", icon: Gem },
  { label: "Years Active", value: "12", icon: Shield },
  { label: "Brand Value", value: "\u221E", icon: Shield },
];

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] lg:h-[700px] w-full rounded-2xl overflow-hidden"
            >
              <Image
                src="/pic_03.png"
                alt="Asuka Kirara Portrait - Icon status in Asian entertainment, award-winning actress and digital influencer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
            </motion.div>

            {/* Overlay text */}
            <div className="absolute bottom-10 left-10 z-10">
              <p className="text-white/60 font-mono text-sm mb-2">
                CANON IMAGE 002
              </p>
              <h3 className="text-3xl font-serif text-white">Icon Status</h3>
            </div>

            {/* Decorative corner */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-pink-500/30 rounded-tl-lg" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-purple-500/30 rounded-br-lg" />
          </div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-pink-500 font-medium tracking-widest text-sm mb-4 uppercase">
                The Biography
              </h2>
              <h3 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-8">
                Redefining <br />
                <span className="text-gradient">Digital Influence</span>
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Born Konno Eri in Tokyo, Asuka Kirara rose to become one of the
                most recognizable faces in Asian entertainment. Starting her
                journey in 2007, she dominated the industry for over a decade,
                winning countless awards including the prestigious Sky PerfecTV!
                Actress Award.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Retiring at the peak of her fame in 2020, she seamlessly
                transitioned into a business mogul and fashion icon. Now, she
                steps into the Web3 space to reclaim digital sovereignty and
                connect with her millions of global fans in a decentralized era.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-panel rounded-xl p-5 hover:bg-white/10 transition-colors group"
                >
                  <div className="text-3xl font-bold text-white font-serif mb-1 group-hover:text-pink-500 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-500 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              {[
                "Official Web3 Debut",
                "Exclusive NFT Collections",
                "DAO Governance",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 text-zinc-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
