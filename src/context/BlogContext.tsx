'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  date: string;
  author: string;
  imageUrl?: string;
  status: 'pending' | 'approved' | 'rejected' | 'published';
  rejectionReason?: string;
  validationScore?: number;
  validationCriteria?: {
    hasImage: boolean;
    hasExcerpt: boolean;
    hasAuthor: boolean;
    wordCount: number;
    hasKeywords: boolean;
  };
}

export type BlogContextType = {
  posts: Post[];
  loading: boolean;
  error: string | null;
  importPosts: () => Promise<void>;
  startPeriodicScan: () => void;
  stopPeriodicScan: () => void;
  currentPage: number;
  totalPages: number;
  postsPerPage: number;
  setCurrentPage: (page: number) => void;
  getPaginatedPosts: () => Post[];
  approvePost: (postId: string) => Promise<void>;
  rejectPost: (postId: string, reason: string) => Promise<void>;
  getPendingPosts: () => Post[];
  bulkApprovePosts: (postIds: string[]) => Promise<void>;
  bulkRejectPosts: (postIds: string[], reason: string) => Promise<void>;
  getPostPreview: (postId: string) => Post | undefined;
  calculateValidationScore: (post: Post) => number;
  getPublishedPosts: () => Post[];
  deletePost: (postId: string) => Promise<void>;
};

export const BlogContext = createContext<BlogContextType | null>(null);

export function BlogProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [scanInterval, setScanInterval] = useState<NodeJS.Timeout | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 7;

  const loadPosts = async () => {
    try {
      const response = await fetch('/api/posts');
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      }
    } catch (err) {
      setError('Failed to load posts');
      console.error('Error loading posts:', err);
    } finally {
      setLoading(false);
    }
  };

  const calculateValidationScore = (post: Post) => {
    const criteria = {
      hasImage: !!post.imageUrl,
      hasExcerpt: !!post.excerpt && post.excerpt.length > 50,
      hasAuthor: !!post.author,
      wordCount: post.content.split(/\s+/).length,
      hasKeywords: post.content.toLowerCase().includes('blog') || 
                  post.content.toLowerCase().includes('article') ||
                  post.content.toLowerCase().includes('post')
    };

    let score = 0;
    if (criteria.hasImage) score += 20;
    if (criteria.hasExcerpt) score += 20;
    if (criteria.hasAuthor) score += 20;
    if (criteria.wordCount > 300) score += 20;
    if (criteria.hasKeywords) score += 20;

    return score;
  };

  const importPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/import');
      if (!response.ok) {
        throw new Error('Failed to import posts');
      }
      const newPosts = await response.json();
      setPosts(prevPosts => [...prevPosts, ...newPosts]);
    } catch (error) {
      console.error('Error importing posts:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const approvePost = async (postId: string) => {
    try {
      const response = await fetch(`/api/posts/${postId}/approve`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to approve post');
      }
      setPosts(prevPosts =>
        prevPosts.map(post =>
          post.id === postId ? { ...post, status: 'published' } : post
        )
      );
    } catch (error) {
      console.error('Error approving post:', error);
      throw error;
    }
  };

  const rejectPost = async (postId: string, reason: string) => {
    try {
      const response = await fetch(`/api/posts/${postId}/reject`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reason }),
      });
      if (!response.ok) {
        throw new Error('Failed to reject post');
      }
      setPosts(prevPosts =>
        prevPosts.map(post =>
          post.id === postId ? { ...post, status: 'rejected', rejectionReason: reason } : post
        )
      );
    } catch (error) {
      console.error('Error rejecting post:', error);
      throw error;
    }
  };

  const startPeriodicScan = () => {
    if (scanInterval) {
      clearInterval(scanInterval);
    }

    importPosts();

    const interval = setInterval(importPosts, 10 * 60 * 1000);
    setScanInterval(interval);
  };

  const stopPeriodicScan = () => {
    if (scanInterval) {
      clearInterval(scanInterval);
      setScanInterval(null);
    }
  };

  const getPaginatedPosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return posts
      .filter(post => post.status === 'approved')
      .slice(startIndex, endIndex);
  };

  const getPendingPosts = () => {
    return posts.filter(post => post.status === 'pending');
  };

  const bulkApprovePosts = async (postIds: string[]) => {
    try {
      const response = await fetch('/api/posts/bulk-approve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ postIds }),
      });
      if (!response.ok) {
        throw new Error('Failed to bulk approve posts');
      }
      setPosts(prevPosts =>
        prevPosts.map(post =>
          postIds.includes(post.id) ? { ...post, status: 'published' } : post
        )
      );
    } catch (error) {
      console.error('Error bulk approving posts:', error);
      throw error;
    }
  };

  const bulkRejectPosts = async (postIds: string[], reason: string) => {
    try {
      const response = await fetch('/api/posts/bulk-reject', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ postIds, reason }),
      });
      if (!response.ok) {
        throw new Error('Failed to bulk reject posts');
      }
      setPosts(prevPosts =>
        prevPosts.map(post =>
          postIds.includes(post.id) ? { ...post, status: 'rejected', rejectionReason: reason } : post
        )
      );
    } catch (error) {
      console.error('Error bulk rejecting posts:', error);
      throw error;
    }
  };

  const getPostPreview = (postId: string) => {
    return posts.find(post => post.id === postId);
  };

  const getPublishedPosts = () => {
    return posts.filter(post => post.status === 'published');
  };

  const deletePost = async (postId: string) => {
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete post');
      }
      setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  };

  useEffect(() => {
    loadPosts();
    startPeriodicScan();

    return () => {
      stopPeriodicScan();
    };
  }, []);

  const totalPages = Math.ceil(
    posts.filter(post => post.status === 'approved').length / postsPerPage
  );

  const value: BlogContextType = {
    posts,
    loading,
    error,
    importPosts,
    startPeriodicScan,
    stopPeriodicScan,
    currentPage,
    totalPages,
    postsPerPage,
    setCurrentPage,
    getPaginatedPosts,
    approvePost,
    rejectPost,
    getPendingPosts,
    bulkApprovePosts,
    bulkRejectPosts,
    getPostPreview,
    calculateValidationScore,
    getPublishedPosts,
    deletePost,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}

export function useBlog(): BlogContextType {
  const context = useContext(BlogContext);
  if (context === undefined || context === null) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
}
