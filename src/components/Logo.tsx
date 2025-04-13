'use client';

import React from 'react';
import Link from 'next/link';
import { useSettings } from '@/context/SettingsContext';

export default function Logo() {
  const { settings } = useSettings();
  
  // Use default values if settings are not loaded
  const currentSettings = settings || {
    logoText: 'TechBlog',
    logoMonogram: 'TB',
    primaryColor: '#2563eb'
  };

  return (
    <Link href="/" className="flex items-center space-x-2">
      <div 
        className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--primary)] text-white font-bold text-xl"
        style={{ backgroundColor: currentSettings.primaryColor }}
      >
        {currentSettings.logoMonogram}
      </div>
      <span className="text-xl font-bold">{currentSettings.logoText}</span>
    </Link>
  );
} 