"use client";

import { motion } from "framer-motion";
import { Twitter, Send, Globe, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com",
    color: "group-hover:text-blue-400",
    bg: "group-hover:bg-blue-400/10 group-hover:border-blue-400/20",
  },
  {
    name: "Telegram",
    icon: Send,
    href: "https://telegram.org",
    color: "group-hover:text-blue-500",
    bg: "group-hover:bg-blue-500/10 group-hover:border-blue-500/20",
  },
  {
    name: "Discord",
    icon: MessageCircle,
    href: "https://discord.com",
    color: "group-hover:text-indigo-400",
    bg: "group-hover:bg-indigo-400/10 group-hover:border-indigo-400/20",
  },
  {
    name: "Website",
    icon: Globe,
    href: "/",
    color: "group-hover:text-pink-500",
    bg: "group-hover:bg-pink-500/10 group-hover:border-pink-500/20",
  },
];

export function Community() {
  return (
    <section
      id="community"
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto mb-16"
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

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16">
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
              className={`group p-6 sm:p-8 bg-white/5 rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-2 ${social.bg}`}
            >
              <social.icon
                className={`w-7 h-7 sm:w-8 sm:h-8 text-white transition-colors ${social.color}`}
              />
              <p className={`mt-2 text-xs text-zinc-600 transition-colors ${social.color}`}>
                {social.name}
              </p>
            </motion.a>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="glass-panel rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-indigo-500/5" />
            <div className="relative z-10">
              <h4 className="text-2xl sm:text-3xl font-serif text-white mb-4">
                Don&apos;t Miss the Private Sale
              </h4>
              <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
                Secure your $KIRARA tokens at the lowest price. Early supporters
                get exclusive benefits and priority access.
              </p>
              <Link
                href="/presale"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold text-sm tracking-wider rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all"
              >
                Enter Presale Now
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-8 border-t border-white/5 text-zinc-600 text-sm max-w-4xl mx-auto"
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
