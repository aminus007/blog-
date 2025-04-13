import React from 'react';
import Layout from '@/components/Layout';
import { BlogPost } from '@/types/blog';

// Mock data for demonstration
const mockPost: BlogPost = {
  id: '1',
  title: 'Getting Started with Next.js',
  content: `
    Next.js is a React framework that enables server-side rendering and static site generation for React applications.
    It provides an excellent developer experience with features like:
    - File-based routing
    - API routes
    - Built-in CSS and Sass support
    - TypeScript support
    - And much more!
    
    In this post, we'll explore how to get started with Next.js and build your first application.
  `,
  excerpt: 'Learn how to get started with Next.js and build modern web applications.',
  date: '2024-03-20',
  author: 'John Doe',
  slug: 'getting-started-with-nextjs',
  imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the post data based on the slug
  const post = mockPost;

  return (
    <Layout>
      <article className="max-w-3xl mx-auto">
        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        )}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center space-x-4 text-gray-500 mb-8">
          <span>{post.author}</span>
          <span>•</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <div className="prose prose-lg max-w-none">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </Layout>
  );
} 