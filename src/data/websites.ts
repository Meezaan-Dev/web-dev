export interface Website {
  slug: string;
  title: string;
  business: string;
  need: string;
  built: string;
  category: string;
  year: string;
  url: string;
  preview: string;
}

export const websites: Website[] = [
  {
    slug: "ak-comms",
    title: "AK Comms",
    business: "Local connectivity and security business.",
    need: "They needed somewhere customers could understand their services and get in touch.",
    built: "So I built a clean, service-led website that makes their work easier to explore.",
    category: "Connectivity & Security",
    year: "2026",
    url: "https://www.akcomms.co.za/",
    preview: "/ak-comms-preview.png",
  },
  {
    slug: "muks-afrikollective",
    title: "Muks Afrikollective",
    business: "African creativity, products and brand partnerships.",
    need: "They needed one online place for products, content and collaborations to live together.",
    built: "So I built a digital platform that gives the brand room to show up properly.",
    category: "Brand Collective",
    year: "2026",
    url: "https://muksafrikollective.com/",
    preview: "/muks-afrikollective-preview.png",
  },
  {
    slug: "anele-pama",
    title: "Anele Pama",
    business: "Cape Town visual artist working in oil and charcoal.",
    need: "They needed an artist portfolio where visitors could browse the work and make enquiries.",
    built: "So I built a gallery-led website that presents the artwork clearly and points people toward contact.",
    category: "Artist Portfolio",
    year: "2026",
    url: "https://anelepama.com/",
    preview: "/anele-pama-preview.png",
  },
];
