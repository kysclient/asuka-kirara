import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ASUKA KIRARA | $KIRARA - Official Web3 Token",
    short_name: "ASUKA KIRARA",
    description:
      "The official Web3 ecosystem of Asuka Kirara. Join the $KIRARA token revolution on Solana.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    orientation: "portrait",
    icons: [
      {
        src: "/pic_02.png",
        sizes: "any",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
