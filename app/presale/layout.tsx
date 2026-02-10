import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Sale - Exclusive $KIRARA Token Presale",
  description:
    "Participate in the exclusive $KIRARA token presale on Solana. Limited allocation for early supporters with premium benefits, 0% tax, and priority access to Asuka Kirara's Web3 ecosystem.",
  keywords: [
    "KIRARA presale",
    "crypto presale",
    "token sale",
    "Asuka Kirara presale",
    "Solana presale",
    "private sale",
    "early access",
    "cryptocurrency investment",
  ],
  openGraph: {
    title: "Private Sale - Exclusive $KIRARA Token Presale",
    description:
      "Participate in the exclusive $KIRARA token presale on Solana. Limited allocation for early supporters with premium benefits.",
    images: [
      {
        url: "/pic_03.png",
        width: 1200,
        height: 630,
        alt: "Asuka Kirara - $KIRARA Token Presale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Sale - Exclusive $KIRARA Token Presale",
    description:
      "Participate in the exclusive $KIRARA token presale on Solana. Limited allocation for early supporters.",
    images: ["/pic_03.png"],
  },
};

export default function PresaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
