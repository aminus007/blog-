'use client';

import React, { useState } from 'react';
import { BlogPost } from '@/types/blog';
import { useBlog } from '@/context/BlogContext';

export default function RssFeedImporter() {
  const { addPosts } = useBlog();
  const [feedUrl, setFeedUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewPosts, setPreviewPosts] = useState<BlogPost[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setPreviewPosts([]);

    try {
      const response = await fetch('/api/rss', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedUrl }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch RSS feed');
      }

      const data = await response.json();
      setPreviewPosts(data.posts);
      addPosts(data.posts);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while fetching the RSS feed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-4">
          <input
            type="url"
            value={feedUrl}
            onChange={(e) => setFeedUrl(e.target.value)}
            placeholder="Enter RSS feed URL (e.g., https://dev.to/feed)"
            required
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {loading ? 'Importing...' : 'Import Feed'}
          </button>
        </div>
        {error && (
          <p className="mt-2 text-red-600">{error}</p>
        )}
      </form>

      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}

      {previewPosts.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Imported Posts ({previewPosts.length})</h3>
          <div className="space-y-4">
            {previewPosts.map((post) => (
              <div key={post.id} className="border rounded-md p-4 hover:shadow-md transition-shadow">
                {post.imageUrl && (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                <h4 className="font-medium text-lg">{post.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{post.excerpt}</p>
                <div className="flex gap-4 mt-2 text-sm text-gray-500">
                  <span>By {post.author}</span>
                  <span>•</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 