"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Loader2, Lock, Unlock, ArrowRight, ShieldCheck } from "lucide-react";
import clsx from "clsx";

export function PresaleForm() {
  const { isConnected } = useAccount();
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const EXCHANGE_RATE = 100; // 1 USDT = 100 KIRARA
  const kiraraAmount = amount ? Number(amount) * EXCHANGE_RATE : 0;

  // Mock Lockup Date: 3 months from now
  const lockupDate = new Date();
  lockupDate.setMonth(lockupDate.getMonth() + 3);

  const handleBuy = () => {
    setIsLoading(true);
    // Mock Transaction Delay
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel p-8 rounded-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />

        <div className="mb-8 text-center">
          <h2 className="text-2xl font-serif text-white mb-2">Private Sale</h2>
          <p className="text-zinc-400 text-sm">
            Join the exclusive circle before public launch
          </p>
        </div>

        {!isConnected ? (
          <div className="h-[300px] flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-2">
              <ShieldCheck className="w-8 h-8 text-pink-500" />
            </div>
            <p className="text-zinc-500 text-center max-w-[200px] mb-4">
              Connect your wallet to access the private sale interface
            </p>
            <ConnectButton />
          </div>
        ) : isSuccess ? (
          <div className="text-center py-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <ShieldCheck className="w-10 h-10 text-green-500" />
            </motion.div>
            <h3 className="text-2xl text-white font-bold mb-2">
              Purchase Successful!
            </h3>
            <p className="text-zinc-400 mb-6">
              You have secured{" "}
              <span className="text-pink-500 font-mono">
                {kiraraAmount.toLocaleString()} KIRARA
              </span>
            </p>

            <div className="bg-white/5 rounded-xl p-4 mb-6 text-left border border-white/10">
              <div className="flex items-center gap-2 text-yellow-500 mb-2">
                <Lock className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Locked Tokens
                </span>
              </div>
              <p className="text-xs text-zinc-500 mb-2">
                Your tokens are safely locked in the smart contract.
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-400">Unlock Date</span>
                <span className="text-white font-mono">
                  {lockupDate.toLocaleDateString()}
                </span>
              </div>
            </div>

            <button
              className="w-full py-3 bg-white/10 text-zinc-500 font-bold rounded-xl cursor-not-allowed flex items-center justify-center gap-2"
              disabled
            >
              <Lock className="w-4 h-4" />
              Claim (Locked)
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="flex justify-between mb-2">
                <label className="text-xs text-zinc-400 uppercase tracking-wider">
                  Pay With
                </label>
                <span className="text-xs text-pink-500 font-mono">
                  Balance: 1,000.00 USDT
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
                  <div className="w-5 h-5 bg-green-500 rounded-full" />
                  <span className="text-white font-bold text-sm">USDT</span>
                </div>
                <input
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-transparent text-2xl font-mono text-white text-right w-full focus:outline-none placeholder:text-zinc-700"
                />
              </div>
            </div>

            <div className="flex justify-center -my-3 relative z-10">
              <div className="bg-zinc-900 border border-white/10 p-2 rounded-full">
                <ArrowRight className="w-4 h-4 text-zinc-500 rotate-90" />
              </div>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="flex justify-between mb-2">
                <label className="text-xs text-zinc-400 uppercase tracking-wider">
                  Receive
                </label>
                <span className="text-xs text-zinc-500 font-mono">
                  1 USDT = {EXCHANGE_RATE} KIRARA
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
                  <div className="w-5 h-5 bg-pink-500 rounded-full" />
                  <span className="text-white font-bold text-sm">KIRARA</span>
                </div>
                <input
                  type="text"
                  readOnly
                  value={kiraraAmount > 0 ? kiraraAmount.toLocaleString() : "0"}
                  className="bg-transparent text-2xl font-mono text-pink-500 text-right w-full focus:outline-none"
                />
              </div>
            </div>

            <button
              onClick={handleBuy}
              disabled={!amount || Number(amount) <= 0 || isLoading}
              className={clsx(
                "w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all",
                !amount || Number(amount) <= 0 || isLoading
                  ? "bg-white/10 text-zinc-500 cursor-not-allowed"
                  : "bg-pink-600 hover:bg-pink-500 text-white shadow-lg shadow-pink-500/25",
              )}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                "Participate in Private Sale"
              )}
            </button>

            <p className="text-xs text-center text-zinc-500">
              *By participating, you agree to the lock-up period and terms of
              service.
            </p>
          </div>
        )}
      </motion.div>

      {/* Mock Claim Section (Hidden until applicable, but shown here for prototype completeness if user scrolls down) */}
      {isConnected && !isSuccess && (
        <div className="mt-8 p-6 border border-white/5 rounded-2xl bg-white/5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-medium">My Allocations</h3>
            <span className="text-xs text-zinc-500 bg-black/40 px-2 py-1 rounded">
              No Active Locks
            </span>
          </div>
          <p className="text-sm text-zinc-500 text-center py-4">
            Purchase tokens to see your vesting schedule here.
          </p>
        </div>
      )}
    </div>
  );
}
