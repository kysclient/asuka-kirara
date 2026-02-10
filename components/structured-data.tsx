export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Asuka Kirara",
    alternateName: "$KIRARA",
    url: "https://asukakirara.com",
    logo: "https://asukakirara.com/kirara_solana.png",
    description:
      "The official Web3 ecosystem of Asuka Kirara - legendary Japanese icon entering blockchain revolution",
    sameAs: [
      "https://twitter.com/asukakirara",
      // Add other social media links as needed
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ASUKA KIRARA | $KIRARA",
    url: "https://asukakirara.com",
    description:
      "The official Web3 ecosystem of Asuka Kirara. Join the $KIRARA token revolution on Solana.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://asukakirara.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const tokenSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "$KIRARA Token",
    description:
      "The $KIRARA token is the heartbeat of the Asuka Kirara ecosystem, providing exclusive access to NFTs, DAO governance, and the Kira Land metaverse on Solana blockchain.",
    brand: {
      "@type": "Brand",
      name: "Asuka Kirara",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      price: "0",
      priceCurrency: "USD",
      url: "https://asukakirara.com/presale",
    },
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Asuka Kirara",
    alternateName: "Konno Eri",
    description:
      "Legendary Japanese entertainment icon, actress, and Web3 entrepreneur. Transitioned from industry star to blockchain revolutionary, pioneering digital sovereignty and fan connection in the decentralized era.",
    knowsAbout: [
      "Entertainment",
      "Fashion",
      "Web3",
      "Blockchain",
      "NFT",
      "Cryptocurrency",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tokenSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
