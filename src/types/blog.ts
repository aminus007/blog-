export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  imageUrl?: string;
  tags?: string[];
} 