import type { Metadata, Viewport } from "next";
import { Inter, Bodoni_Moda, Syne } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { StructuredData } from "@/components/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "ASUKA KIRARA | $KIRARA - Official Web3 Token & NFT Ecosystem",
    template: "%s | ASUKA KIRARA"
  },
  description:
    "The official Web3 ecosystem of Asuka Kirara - legendary Japanese icon entering blockchain. Join the $KIRARA token revolution on Solana. Exclusive NFTs, DAO governance, and metaverse access.",
  keywords: [
    "Asuka Kirara",
    "KIRARA token",
    "Solana token",
    "Web3",
    "NFT",
    "cryptocurrency",
    "blockchain",
    "meme coin",
    "presale",
    "crypto presale",
    "Japanese celebrity token",
    "metaverse",
    "DAO",
    "Solana ecosystem"
  ],
  authors: [{ name: "Asuka Kirara Team" }],
  creator: "Asuka Kirara",
  publisher: "Asuka Kirara",
  metadataBase: new URL("https://asukakirara.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://asukakirara.com",
    title: "ASUKA KIRARA | $KIRARA - Official Web3 Token",
    description:
      "The official Web3 ecosystem of Asuka Kirara. Join the $KIRARA token revolution on Solana with exclusive NFTs, DAO governance, and metaverse access.",
    siteName: "ASUKA KIRARA",
    images: [
      {
        url: "/pic_02.png",
        width: 1200,
        height: 630,
        alt: "Asuka Kirara - The Queen of Web3",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASUKA KIRARA | $KIRARA - Official Web3 Token",
    description:
      "The official Web3 ecosystem of Asuka Kirara. Join the $KIRARA token revolution on Solana.",
    images: ["/pic_02.png"],
    creator: "@asukakirara",
    site: "@asukakirara",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/kirara_solana.png", sizes: "32x32", type: "image/png" },
      { url: "/kirara_solana.png", sizes: "64x64", type: "image/png" },
      { url: "/kirara_solana.png", sizes: "128x128", type: "image/png" },
    ],
    apple: [
      { url: "/kirara_solana.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/kirara_solana.png",
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
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
        <StructuredData />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
