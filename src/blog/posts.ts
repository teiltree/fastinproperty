export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO-ish: YYYY-MM-DD
  category: string;
  readTimeMinutes: number;
  heroImage?: string;
  content: string; // Markdown-ish (rendered as paragraphs for now)
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-buy-at-auction",
    title: "How to Buy Property at Auction in Zimbabwe",
    excerpt:
      "A practical step-by-step guide to bidding, deposits, paperwork, and what happens after the hammer falls.",
    date: "2026-05-28",
    category: "Guides",
    readTimeMinutes: 6,
    heroImage: "https://i.postimg.cc/tJS9pvXM/IMG_20251104_WA0038.jpg",
    content: [
      "Buying at auction can be one of the most transparent ways to purchase property — you see the demand in real time and you know exactly when the sale happens.",
      "Before you bid, make sure you understand the bidding process, the deposit requirements, and the conditions of sale. If you have questions, contact our team and we’ll guide you through it.",
      "On auction day, you can bid online or via the auction platform. When you win, you’ll be guided on the next steps, including payments and conveyancing.",
      "If you’re new to auctions, start with our Auction Guide and then browse the current auction stock to see what’s available.",
    ].join("\n\n"),
  },
  {
    slug: "how-we-market-your-property",
    title: "How We Market Your Property for Auction",
    excerpt:
      "From database buyers to social campaigns and national exposure — here’s how we create demand before auction day.",
    date: "2026-05-26",
    category: "Marketing",
    readTimeMinutes: 5,
    heroImage: "https://i.postimg.cc/3NJKMQHg/IMG_20251104_WA0036.jpg",
    content: [
      "A strong auction result starts with demand. Our marketing approach combines multiple channels so buyers see your property repeatedly — and act.",
      "We promote listings to our buyer database, publish across relevant platforms, and run targeted social campaigns. We also coordinate viewing opportunities and buyer follow-ups leading up to auction day.",
      "Want to sell? Reach out via the contact page and we’ll recommend the best approach for your property and timeline.",
    ].join("\n\n"),
  },
];

export function getAllPosts() {
  return [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find(p => p.slug === slug) ?? null;
}
