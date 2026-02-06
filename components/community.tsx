"use client";

import { motion } from "framer-motion";
import { Twitter, Send, Globe, MessageCircle } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com",
    color: "hover:text-blue-400",
  },
  {
    name: "Telegram",
    icon: Send,
    href: "https://telegram.org",
    color: "hover:text-blue-500",
  },
  {
    name: "Discord",
    icon: MessageCircle,
    href: "https://discord.com",
    color: "hover:text-indigo-400",
  },
  { name: "Website", icon: Globe, href: "/", color: "hover:text-pink-500" },
];

export function Community() {
  return (
    <section
      id="community"
      className="py-24 bg-black border-t border-white/5 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-pink-500 font-medium tracking-widest text-sm mb-4 uppercase">
            Community
          </h2>
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Join the Revolution
          </h3>
          <p className="text-zinc-400 text-lg">
            Stay updated with the latest announcements, exclusive drops, and
            community events. The Asuka Kirara ecosystem is built on active
            participation.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
              className={`p-6 bg-white/5 rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 group`}
            >
              <social.icon
                className={`w-8 h-8 text-white transition-colors ${social.color}`}
              />
              <span className="sr-only">{social.name}</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-8 border-t border-white/5 text-zinc-600 text-sm max-w-4xl mx-auto"
        >
          <p className="mb-4">
            DISCLAIMER: $KIRARA is a meme coin with no intrinsic value or
            expectation of financial return. There is no formal team or roadmap.
            The coin is for entertainment purposes only.
          </p>
          <p>&copy; 2026 ASUKA KIRARA PROJECT. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
