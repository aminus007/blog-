import React from 'react';
import Layout from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About This Blog</h1>
        <div className="prose prose-lg">
          <p className="mb-4">
            Welcome to our blog! We're passionate about sharing knowledge and insights about
            web development, programming, and technology.
          </p>
          <p className="mb-4">
            Our mission is to provide high-quality content that helps developers of all
            levels improve their skills and stay up-to-date with the latest trends in
            technology.
          </p>
          <p>
            Whether you're a beginner just starting your coding journey or an experienced
            developer looking to expand your knowledge, we hope you'll find valuable
            information and inspiration here.
          </p>
        </div>
      </div>
    </Layout>
  );
} 