'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { useBlog } from '@/context/BlogContext';

export default function Home() {
  const { 
    loading, 
    error, 
    currentPage, 
    totalPages, 
    setCurrentPage, 
    getPaginatedPosts 
  } = useBlog();

  const posts = getPaginatedPosts();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center mb-12">
          <h1 className="heading">Latest Tech News & Insights</h1>
          <p className="text-[var(--text-light)] max-w-2xl mx-auto">
            Stay up to date with the latest technology news, tutorials, and insights from around the web.
          </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-[var(--primary)] border-t-transparent"></div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <div className="text-red-600 mb-4">
              <p>Error loading posts: {error}</p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Try Again
            </button>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[var(--text-light)] mb-4">No posts available yet.</p>
            <Link href="/admin" className="btn-primary">
              Import Posts
            </Link>
          </div>
        ) : (
          <>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.id} className="card group">
                  {post.imageUrl && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-[var(--text-light)] mb-2">
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-[var(--primary)] mb-3 group-hover:text-[var(--secondary)] transition-colors">
                      <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-[var(--text-light)] mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link
                      href={`/posts/${post.slug}`}
                      className="text-[var(--accent)] hover:text-[var(--secondary)] font-medium inline-flex items-center"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <nav className="flex items-center space-x-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-md bg-white text-[var(--primary)] border border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-md ${
                        currentPage === page
                          ? 'bg-[var(--primary)] text-white'
                          : 'bg-white text-[var(--primary)] border border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-md bg-white text-[var(--primary)] border border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </nav>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
} 