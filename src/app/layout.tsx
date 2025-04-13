import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { BlogProvider } from '@/context/BlogContext';
import { SettingsProvider } from '@/context/SettingsContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechBlog',
  description: 'Your source for tech news and insights',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style>
          {`
            :root {
              --primary: #2563eb;
              --secondary: #1e40af;
              --accent: #3b82f6;
              --background: #ffffff;
              --text: #1f2937;
              --text-light: #6b7280;
            }
          `}
        </style>
      </head>
      <body className={inter.className}>
        <SettingsProvider>
          <BlogProvider>
            {children}
          </BlogProvider>
        </SettingsProvider>
      </body>
    </html>
  );
} 