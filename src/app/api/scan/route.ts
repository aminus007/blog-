import { NextResponse } from 'next/server';
import { parseRssFeed } from '@/lib/rss';

export async function GET() {
  try {
    const posts = await parseRssFeed();
    return NextResponse.json({ success: true, posts });
  } catch (error) {
    console.error('Error scanning RSS feed:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to scan RSS feed' },
      { status: 500 }
    );
  }
} 