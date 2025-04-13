export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl?: string;
  status: 'pending' | 'published' | 'rejected';
  rejectionReason?: string;
  validationScore?: number;
  validationCriteria?: {
    hasImage: boolean;
    hasExcerpt: boolean;
    hasAuthor: boolean;
    wordCount: number;
    hasKeywords: boolean;
  };
  keywords?: string[];
} 