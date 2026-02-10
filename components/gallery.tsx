"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/3.jpg", title: "Street Fashion", year: "2024" },
  { src: "/kirara_solana.png", title: "Solana Era", year: "2025" },
  { src: "/4.webp", title: "Studio Session", year: "2023" },
  { src: "/1.webp", title: "The Concept", year: "2025" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-32 relative">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="container mx-auto px-6 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-pink-500 font-medium tracking-widest text-sm mb-4 uppercase">
            Visual Archives
          </h2>
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            The Collection
          </h3>
          <p className="text-zinc-500 max-w-md mx-auto">
            Exclusive imagery from the Asuka Kirara universe
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 flex overflow-x-auto pb-8 gap-6 px-6 lg:px-12 snap-x snap-mandatory scrollbar-hide">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="snap-center shrink-0 w-[80vw] sm:w-[60vw] lg:w-[500px] h-[350px] sm:h-[400px] lg:h-[650px] relative rounded-2xl overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
          >
            <Image
              src={img.src}
              alt={img.title}
              fill
              className={`transition-transform duration-700 group-hover:scale-110 ${
                img.src === "/kirara_solana.png"
                  ? "object-contain bg-black/50"
                  : "object-cover"
              }`}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Border glow on hover */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-pink-500/30 transition-colors duration-500" />

            {/* Info */}
            <div className="absolute bottom-8 left-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              <p className="text-pink-500 text-sm font-mono mb-2">{img.year}</p>
              <h4 className="text-2xl font-serif text-white">{img.title}</h4>
            </div>

            {/* Index number */}
            <div className="absolute top-6 right-6 text-white/10 text-6xl font-serif font-bold group-hover:text-white/20 transition-colors">
              {String(i + 1).padStart(2, "0")}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
