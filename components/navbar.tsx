"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import Link from "next/link";
import { Menu, X, LogOut } from "lucide-react";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Tokenomics", href: "/#tokenomics" },
  { label: "Presale", href: "/presale" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { publicKey, connected, disconnect } = useWallet();
  const { setVisible } = useWalletModal();

  const truncatedAddress = publicKey
    ? `${publicKey.toBase58().slice(0, 4)}...${publicKey.toBase58().slice(-4)}`
    : "";

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-12 backdrop-blur-xl bg-black/40 border-b border-white/5"
      >
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <span className="text-2xl font-bold tracking-[0.1em] text-white font-serif uppercase">
              KIRARA<span className="text-pink-500">.</span>
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative hover:text-white transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-pink-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {!connected ? (
            <button
              onClick={() => setVisible(true)}
              type="button"
              className="bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold px-5 py-2 rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all text-xs"
            >
              Connect Wallet
            </button>
          ) : (
            <div className="flex gap-2">
              <div className="bg-white/10 text-white font-bold px-4 py-2.5 rounded-full text-sm items-center gap-2 hidden sm:flex">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-pink-400 text-xs font-mono">SOL</span>
              </div>
              <button
                onClick={() => setVisible(true)}
                type="button"
                className="bg-white/10 text-white font-bold px-4 py-2.5 rounded-full hover:bg-white/20 transition-colors text-sm font-mono"
              >
                {truncatedAddress}
              </button>
              <button
                onClick={() => disconnect()}
                type="button"
                className="bg-white/10 text-zinc-400 p-2.5 rounded-full hover:bg-red-500/20 hover:text-red-400 transition-colors hidden sm:flex items-center"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative pt-24 px-6 flex flex-col gap-6"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl font-serif text-white hover:text-pink-500 transition-colors block py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {connected && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <button
                    onClick={() => {
                      disconnect();
                      setMobileOpen(false);
                    }}
                    className="text-red-400 text-sm flex items-center gap-2 py-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Disconnect Wallet
                  </button>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-6 border-t border-white/10"
              >
                <p className="text-zinc-600 text-sm">
                  The official $KIRARA ecosystem on Solana
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
