import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import BlogPostModel from '@/models/BlogPost';

export async function GET() {
  try {
    await connectDB();
    
    const posts = await BlogPostModel.find()
      .sort({ date: -1 })
      .limit(50);

    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
} 