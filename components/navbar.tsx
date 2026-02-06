"use client";

import { motion } from "framer-motion";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-12 backdrop-blur-sm bg-black/20 border-b border-white/5"
    >
      <div className="flex items-center gap-2">
        <Link href={"/"}>
          <span className="text-2xl font-bold tracking-[0.1em] text-white font-serif uppercase">
            KIRARA<span className="text-pink-500">.</span>
          </span>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
        <Link href="/#about" className="hover:text-white transition-colors">
          About
        </Link>
        <Link href="/#gallery" className="hover:text-white transition-colors">
          Gallery
        </Link>
        <Link
          href="/#tokenomics"
          className="hover:text-white transition-colors"
        >
          Tokenomics
        </Link>
        <Link href="/#roadmap" className="hover:text-white transition-colors">
          Roadmap
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            const ready = mounted && authenticationStatus !== "loading";
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus ||
                authenticationStatus === "authenticated");

            return (
              <div
                {...(!ready && {
                  "aria-hidden": true,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none",
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <button
                        onClick={openConnectModal}
                        type="button"
                        className="bg-white text-black font-bold px-4 py-1.5 rounded-full hover:bg-zinc-200 transition-colors text-xs"
                      >
                        Connect Wallet
                      </button>
                    );
                  }

                  if (chain.unsupported) {
                    return (
                      <button
                        onClick={openChainModal}
                        type="button"
                        className="bg-red-500 text-white font-bold px-6 py-2.5 rounded-full text-sm"
                      >
                        Wrong network
                      </button>
                    );
                  }

                  return (
                    <div style={{ display: "flex", gap: 12 }}>
                      <button
                        onClick={openChainModal}
                        style={{ display: "flex", alignItems: "center" }}
                        type="button"
                        className="bg-white/10 text-white font-bold px-4 py-2.5 rounded-full hover:bg-white/20 transition-colors text-sm items-center gap-2 hidden sm:flex"
                      >
                        {chain.hasIcon && (
                          <div
                            style={{
                              background: chain.iconBackground,
                              width: 20,
                              height: 20,
                              borderRadius: 999,
                              overflow: "hidden",
                              marginRight: 4,
                            }}
                          >
                            {chain.iconUrl && (
                              <img
                                alt={chain.name ?? "Chain icon"}
                                src={chain.iconUrl}
                                style={{ width: 20, height: 20 }}
                              />
                            )}
                          </div>
                        )}
                        {chain.name}
                      </button>

                      <button
                        onClick={openAccountModal}
                        type="button"
                        className="bg-white/10 text-white font-bold px-4 py-2.5 rounded-full hover:bg-white/20 transition-colors text-sm"
                      >
                        {account.displayName}
                        {account.displayBalance
                          ? ` (${account.displayBalance})`
                          : ""}
                      </button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
      </div>
    </motion.nav>
  );
}
