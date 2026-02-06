"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const stats = [
  { label: "Followers", value: "5M+" },
  { label: "Industry Awards", value: "15+" },
  { label: "Years Active", value: "12" },
  { label: "Brand Value", value: "∞" },
];

export function About() {
  return (
    <section id="about" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[700px] w-full rounded-2xl overflow-hidden"
            >
              <Image
                src="/2.jpg"
                alt="Asuka Kirara Portrait"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent" />
            </motion.div>

            {/* Overlay Text */}
            <div className="absolute bottom-10 left-10 z-10">
              <p className="text-white/60 font-mono text-sm mb-2">
                CANON IMAGE 002
              </p>
              <h3 className="text-3xl font-serif text-white">Icon Status</h3>
            </div>
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
                <span className="text-zinc-500">Digital Influence</span>
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

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border-t border-white/10 pt-4"
                >
                  <div className="text-3xl font-bold text-white font-serif mb-1">
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
                  <CheckCircle2 className="w-5 h-5 text-pink-500" />
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
