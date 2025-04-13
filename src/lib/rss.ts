import Parser from 'rss-parser';

type CustomFeed = {};
type CustomItem = {
  title: string;
  content: string;
  contentSnippet: string;
  pubDate: string;
  author?: string;
  link: string;
  guid: string;
  categories?: string[];
  enclosure?: {
    url: string;
    type: string;
  };
};

const parser: Parser<CustomFeed, CustomItem> = new Parser({
  customFields: {
    item: ['author', 'enclosure'],
  },
});

export async function parseRssFeed() {
  try {
    // Replace with your actual RSS feed URL
    const feed = await parser.parseURL('https://example.com/feed.xml');
    
    return feed.items.map((item) => ({
      id: item.guid || item.link,
      title: item.title,
      content: item.content,
      excerpt: item.contentSnippet,
      slug: item.link.split('/').pop()?.split('?')[0] || item.guid,
      date: item.pubDate,
      author: item.author || 'Unknown Author',
      imageUrl: item.enclosure?.url || undefined,
    }));
  } catch (error) {
    console.error('Error parsing RSS feed:', error);
    throw new Error('Failed to parse RSS feed');
  }
} 