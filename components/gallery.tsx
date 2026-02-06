"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/3.jpg", title: "Street Fashion", year: "2024" },
  { src: "/4.webp", title: "Studio Session", year: "2023" },
  { src: "/1.webp", title: "The Concept", year: "2025" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-black relative">
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-pink-500 font-medium tracking-widest text-sm mb-4 uppercase">
            Visual Archives
          </h2>
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-white">
            The Collection
          </h3>
        </motion.div>
      </div>

      <div className="flex overflow-x-auto pb-8 gap-8 px-6 lg:px-12 snap-x snap-mandatory scrollbar-hide">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="snap-center shrink-0 w-[80vw] lg:w-[600px] h-[400px] lg:h-[700px] relative rounded-lg overflow-hidden group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <Image
              src={img.src}
              alt={img.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              <p className="text-pink-500 text-sm font-mono mb-2">{img.year}</p>
              <h4 className="text-2xl font-serif text-white">{img.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
