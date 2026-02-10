import type { Metadata } from "next";
import { Inter, Bodoni_Moda, Syne } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bodoni = Bodoni_Moda({ subsets: ["latin"], variable: "--font-bodoni" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

export const metadata: Metadata = {
  title: "ASUKA KIRARA | $KIRARA",
  description:
    "The official Web3 ecosystem of Asuka Kirara. Join the revolution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${bodoni.variable} ${syne.variable} font-sans antialiased bg-black text-white selection:bg-pink-500 selection:text-white`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
