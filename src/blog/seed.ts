import type { BlogData } from './types';

export const BLOG_SEED_DATA: BlogData = {
  version: 1,
  authors: [
    {
      id: 'author-fastin-team',
      slug: 'fastin-team',
      name: 'Fastin Property Auctions',
      role: 'Editorial Team',
      bio: 'Insights, guides, and updates from Zimbabwe’s premier online property auction platform.',
      avatarUrl: '/logo.png',
      email: 'info@fastinpropertyauctions.com',
    },
    {
      id: 'author-marketing',
      slug: 'marketing-team',
      name: 'Fastin Marketing',
      role: 'Marketing & Communications',
      bio: 'How we create demand, reach buyers nationwide, and deliver results for sellers.',
      avatarUrl: 'https://i.postimg.cc/3NJKMQHg/IMG_20251104_WA0036.jpg',
    },
  ],
  categories: [
    {
      id: 'cat-guides',
      slug: 'guides',
      name: 'Guides',
      description: 'Step-by-step guides for buyers and sellers at auction.',
    },
    {
      id: 'cat-marketing',
      slug: 'marketing',
      name: 'Marketing',
      description: 'Property marketing, campaigns, and auction preparation.',
    },
    {
      id: 'cat-finance',
      slug: 'finance',
      name: 'Finance',
      description: 'Auction finance, deposits, and payment options.',
    },
    {
      id: 'cat-news',
      slug: 'news',
      name: 'News & Updates',
      description: 'Company news and market updates.',
    },
  ],
  tags: [
    { id: 'tag-auction', slug: 'auction', name: 'Auction' },
    { id: 'tag-buying', slug: 'buying', name: 'Buying' },
    { id: 'tag-selling', slug: 'selling', name: 'Selling' },
    { id: 'tag-zimbabwe', slug: 'zimbabwe', name: 'Zimbabwe' },
    { id: 'tag-online-bidding', slug: 'online-bidding', name: 'Online Bidding' },
    { id: 'tag-marketing', slug: 'marketing', name: 'Marketing' },
  ],
  posts: [
    {
      id: 'post-buy-auction',
      slug: 'how-to-buy-at-auction',
      title: 'How to Buy Property at Auction in Zimbabwe',
      excerpt:
        'A practical step-by-step guide to bidding, deposits, paperwork, and what happens after the hammer falls.',
      content: [
        'Buying at auction can be one of the most transparent ways to purchase property — you see the demand in real time and you know exactly when the sale happens.',
        'Before you bid, make sure you understand the bidding process, the deposit requirements, and the conditions of sale. If you have questions, contact our team and we’ll guide you through it.',
        'On auction day, you can bid online or via the auction platform. When you win, you’ll be guided on the next steps, including payments and conveyancing.',
        '- Review the auction catalogue and conditions of sale',
        '- Register to bid and verify your account',
        '- Arrange your deposit and finance if required',
        '- Bid on auction day and complete post-sale steps',
        'If you’re new to auctions, start with our Property Auction Guide and then browse current auction stock.',
      ].join('\n\n'),
      featuredImage: 'https://i.postimg.cc/tJS9pvXM/IMG_20251104_WA0038.jpg',
      featuredImageAlt: 'Buyers reviewing property auction listings',
      publishedAt: '2026-05-28',
      updatedAt: '2026-05-28',
      status: 'published',
      featured: true,
      categoryId: 'cat-guides',
      tagIds: ['tag-auction', 'tag-buying', 'tag-zimbabwe', 'tag-online-bidding'],
      authorId: 'author-fastin-team',
      readTimeMinutes: 6,
      seo: {
        metaTitle: 'How to Buy Property at Auction in Zimbabwe | Fastin',
        metaDescription:
          'Learn how to buy property at auction in Zimbabwe — registration, deposits, bidding online, and what happens after you win.',
        keywords: ['property auction', 'buy at auction', 'Zimbabwe property', 'online bidding'],
      },
    },
    {
      id: 'post-market-property',
      slug: 'how-we-market-your-property',
      title: 'How We Market Your Property for Auction',
      excerpt:
        'From database buyers to social campaigns and national exposure — here’s how we create demand before auction day.',
      content: [
        'A strong auction result starts with demand. Our marketing approach combines multiple channels so buyers see your property repeatedly — and act.',
        'We promote listings to our buyer database, publish across relevant platforms, and run targeted social campaigns. We also coordinate viewing opportunities and buyer follow-ups leading up to auction day.',
        'Want to sell? Reach out via the contact page and we’ll recommend the best approach for your property and timeline.',
      ].join('\n\n'),
      featuredImage: 'https://i.postimg.cc/3NJKMQHg/IMG_20251104_WA0036.jpg',
      featuredImageAlt: 'Marketing a property for auction',
      publishedAt: '2026-05-26',
      updatedAt: '2026-05-26',
      status: 'published',
      featured: false,
      categoryId: 'cat-marketing',
      tagIds: ['tag-selling', 'tag-marketing', 'tag-zimbabwe'],
      authorId: 'author-marketing',
      readTimeMinutes: 5,
      seo: {
        metaTitle: 'How We Market Your Property for Auction | Fastin',
        metaDescription:
          'Discover how Fastin Property Auctions markets your property — buyer database, digital campaigns, and national exposure before auction day.',
        keywords: ['sell at auction', 'property marketing', 'auction marketing', 'Zimbabwe'],
      },
    },
  ],
};
