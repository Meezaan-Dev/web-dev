export interface Website {
  title: string;
  description: string;
  category: string;
  year: string;
  url: string;
  preview: string;
}

export const websites: Website[] = [
  {
    title: "AK Comms",
    description:
      "A service-led website helping homes and businesses find practical connectivity, security, and smart technology solutions.",
    category: "Connectivity & Security",
    year: "2026",
    url: "https://www.akcomms.co.za/",
    preview: "/ak-comms-preview.png",
  },
  {
    title: "Muks Afrikollective",
    description:
      "A culture-forward commerce platform connecting African creativity, sustainable brands, and global audiences.",
    category: "Brand Collective",
    year: "2026",
    url: "https://muksafrikollective.com/",
    preview: "/muks-afrikollective-preview.png",
  },
];
