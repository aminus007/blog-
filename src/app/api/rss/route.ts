import { NextResponse } from 'next/server';
import Parser from 'rss-parser';
import { BlogPost } from '@/types/blog';
import connectDB from '@/lib/mongodb';
import BlogPostModel from '@/models/BlogPost';

const parser = new Parser({
  customFields: {
    item: ['media:content', 'media:thumbnail', 'enclosure'],
  },
});

export async function POST(request: Request) {
  try {
    const { feedUrl } = await request.json();
    
    if (!feedUrl) {
      return NextResponse.json({ error: 'Feed URL is required' }, { status: 400 });
    }

    // Add CORS headers
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle OPTIONS request for CORS
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, { headers });
    }

    // Connect to MongoDB
    await connectDB();

    const feed = await parser.parseURL(feedUrl);
    
    const posts: BlogPost[] = feed.items.map((item) => {
      // Try to get image URL from various sources
      const imageUrl = 
        item.enclosure?.url || 
        item['media:content']?.['$']?.url || 
        item['media:thumbnail']?.['$']?.url;

      return {
        id: item.guid || item.link || Math.random().toString(),
        title: item.title || 'Untitled',
        content: item.content || item.contentSnippet || '',
        excerpt: item.contentSnippet || item.content?.slice(0, 150) || '',
        date: item.pubDate || new Date().toISOString(),
        author: item.creator || item.author || 'Unknown',
        slug: item.guid || item.link?.split('/').pop() || Math.random().toString(),
        imageUrl,
        source: feedUrl,
      };
    });

    // Save posts to MongoDB
    for (const post of posts) {
      try {
        await BlogPostModel.findOneAndUpdate(
          { id: post.id },
          { ...post, date: new Date(post.date) },
          { upsert: true, new: true }
        );
      } catch (error) {
        console.error(`Error saving post ${post.id}:`, error);
      }
    }

    return NextResponse.json({ posts }, { headers });
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return NextResponse.json(
      { error: 'Failed to fetch RSS feed. Please check the URL and try again.' },
      { status: 500 }
    );
  }
} 