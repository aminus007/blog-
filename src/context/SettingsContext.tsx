'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Settings = {
  siteName: string;
  logoText: string;
  logoMonogram: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  textLightColor: string;
  heroTitle: string;
  heroSubtitle: string;
  footerText: string;
  database: {
    host: string;
    port: string;
    username: string;
    password: string;
    databaseName: string;
    connectionString?: string;
  };
};

export const defaultSettings: Settings = {
  siteName: 'TechBlog',
  logoText: 'TechBlog',
  logoMonogram: 'TB',
  primaryColor: '#2563eb',
  secondaryColor: '#1e40af',
  accentColor: '#3b82f6',
  backgroundColor: '#ffffff',
  textColor: '#1f2937',
  textLightColor: '#6b7280',
  heroTitle: 'Latest Tech News & Insights',
  heroSubtitle: 'Stay up to date with the latest technology news, tutorials, and insights from around the web.',
  footerText: 'Your source for tech news and insights',
  database: {
    host: 'localhost',
    port: '5432',
    username: 'postgres',
    password: '',
    databaseName: 'blog',
    connectionString: '',
  },
};

type SettingsContextType = {
  settings: Settings;
  updateSettings: (newSettings: Settings) => void;
  loading: boolean;
  error: string | null;
};

const SettingsContext = createContext<SettingsContextType | null>(null);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const response = await fetch('/api/settings');
        if (response.ok) {
          const data = await response.json();
          setSettings(data || defaultSettings);
        } else {
          setSettings(defaultSettings);
        }
      } catch (err) {
        console.error('Error loading settings:', err);
        setSettings(defaultSettings);
      } finally {
        setLoading(false);
      }
    };

    loadSettings();
  }, []);

  const updateSettings = async (newSettings: Settings) => {
    try {
      const response = await fetch('/api/settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSettings),
      });

      if (response.ok) {
        setSettings(newSettings);
      } else {
        throw new Error('Failed to update settings');
      }
    } catch (err) {
      console.error('Error updating settings:', err);
      setError('Failed to update settings');
    }
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings, loading, error }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
} 