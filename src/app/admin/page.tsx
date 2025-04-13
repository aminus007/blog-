'use client';

import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { useBlog } from '@/context/BlogContext';
import { useSettings } from '@/context/SettingsContext';
import { Post } from '@/types';

export default function AdminPage() {
  const blogContext = useBlog();
  const settingsContext = useSettings();

  if (!blogContext || !settingsContext) {
    return <div>Loading...</div>;
  }

  const { 
    importPosts, 
    startPeriodicScan, 
    stopPeriodicScan, 
    getPendingPosts,
    approvePost,
    rejectPost,
    bulkApprovePosts,
    bulkRejectPosts,
    getPostPreview,
    calculateValidationScore,
    getPublishedPosts,
    deletePost
  } = blogContext;
  
  const { settings, updateSettings } = settingsContext;
  
  const [isImporting, setIsImporting] = useState(false);
  const [importError, setImportError] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(true);
  const [rejectionReason, setRejectionReason] = useState('');
  const [selectedPosts, setSelectedPosts] = useState<string[]>([]);
  const [previewPostId, setPreviewPostId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'posts' | 'settings' | 'analytics'>('posts');
  const [localSettings, setLocalSettings] = useState(settings);

  const pendingPosts = getPendingPosts();
  const publishedPosts = getPublishedPosts();

  const handleImport = async () => {
    setIsImporting(true);
    setImportError(null);
    try {
      await importPosts();
    } catch (error) {
      setImportError('Failed to import posts. Please try again.');
    } finally {
      setIsImporting(false);
    }
  };

  const handleSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSettingsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(localSettings);
  };

  const handleDeletePost = async (postId: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      await deletePost(postId);
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Admin Navigation */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('posts')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'posts' ? 'bg-blue-500 text-white' : 'bg-gray-100'
              }`}
            >
              Posts Management
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'settings' ? 'bg-blue-500 text-white' : 'bg-gray-100'
              }`}
            >
              Website Settings
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'analytics' ? 'bg-blue-500 text-white' : 'bg-gray-100'
              }`}
            >
              Analytics
            </button>
          </div>
        </div>

        {/* Posts Management Tab */}
        {activeTab === 'posts' && (
          <div className="space-y-8">
            {/* RSS Feed Management */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold mb-4">RSS Feed Management</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600">Automatic scanning is {isScanning ? 'enabled' : 'disabled'}</p>
                    <p className="text-sm text-gray-500">Posts are automatically imported every 10 minutes</p>
                  </div>
                  <button
                    onClick={() => {
                      if (isScanning) {
                        stopPeriodicScan();
                      } else {
                        startPeriodicScan();
                      }
                      setIsScanning(!isScanning);
                    }}
                    className={`px-4 py-2 rounded-md ${
                      isScanning ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                    } text-white`}
                  >
                    {isScanning ? 'Stop Scanning' : 'Start Scanning'}
                  </button>
                </div>
                <div className="border-t pt-4">
                  <button
                    onClick={handleImport}
                    disabled={isImporting}
                    className="btn-primary"
                  >
                    {isImporting ? 'Importing...' : 'Import Posts Now'}
                  </button>
                  {importError && (
                    <p className="text-red-600 mt-2">{importError}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Pending Posts */}
            {pendingPosts.length > 0 && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-4">Pending Posts ({pendingPosts.length})</h2>
                <div className="space-y-4">
                  {pendingPosts.map((post) => (
                    <div key={post.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{post.title}</h3>
                          <p className="text-gray-600 mb-2">{post.excerpt}</p>
                          <div className="text-sm text-gray-500">
                            <span>{post.author}</span>
                            <span className="mx-2">•</span>
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <button
                            onClick={() => setPreviewPostId(post.id)}
                            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                          >
                            Preview
                          </button>
                          <button
                            onClick={() => approvePost(post.id)}
                            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                          >
                            Approve
                          </button>
                          <div className="flex items-center space-x-2">
                            <input
                              type="text"
                              placeholder="Rejection reason"
                              value={rejectionReason}
                              onChange={(e) => setRejectionReason(e.target.value)}
                              className="px-3 py-1 border rounded"
                            />
                            <button
                              onClick={() => rejectPost(post.id, rejectionReason)}
                              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                              Reject
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Published Posts */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold mb-4">Published Posts ({publishedPosts.length})</h2>
              <div className="space-y-4">
                {publishedPosts.map((post: Post) => (
                  <div key={post.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{post.title}</h3>
                        <p className="text-gray-600 mb-2">{post.excerpt}</p>
                        <div className="text-sm text-gray-500">
                          <span>{post.author}</span>
                          <span className="mx-2">•</span>
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <button
                          onClick={() => setPreviewPostId(post.id)}
                          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                          Preview
                        </button>
                        <button
                          onClick={() => handleDeletePost(post.id)}
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Website Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-8">
            {/* Site Settings */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold mb-4">Site Settings</h2>
              <form onSubmit={handleSettingsSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Site Name
                    </label>
                    <input
                      type="text"
                      name="siteName"
                      value={localSettings.siteName}
                      onChange={handleSettingsChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Logo Text
                    </label>
                    <input
                      type="text"
                      name="logoText"
                      value={localSettings.logoText}
                      onChange={handleSettingsChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Hero Title
                    </label>
                    <input
                      type="text"
                      name="heroTitle"
                      value={localSettings.heroTitle}
                      onChange={handleSettingsChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Hero Subtitle
                    </label>
                    <input
                      type="text"
                      name="heroSubtitle"
                      value={localSettings.heroSubtitle}
                      onChange={handleSettingsChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Footer Text
                    </label>
                    <input
                      type="text"
                      name="footerText"
                      value={localSettings.footerText}
                      onChange={handleSettingsChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Primary Color
                    </label>
                    <input
                      type="color"
                      name="primaryColor"
                      value={localSettings.primaryColor}
                      onChange={handleSettingsChange}
                      className="w-full h-10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Secondary Color
                    </label>
                    <input
                      type="color"
                      name="secondaryColor"
                      value={localSettings.secondaryColor}
                      onChange={handleSettingsChange}
                      className="w-full h-10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Accent Color
                    </label>
                    <input
                      type="color"
                      name="accentColor"
                      value={localSettings.accentColor}
                      onChange={handleSettingsChange}
                      className="w-full h-10"
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Database Configuration */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold mb-4">Database Configuration</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Database Host
                    </label>
                    <input
                      type="text"
                      name="database.host"
                      value={localSettings.database.host}
                      onChange={(e) => {
                        setLocalSettings(prev => ({
                          ...prev,
                          database: {
                            ...prev.database,
                            host: e.target.value
                          }
                        }));
                      }}
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="localhost"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Database Port
                    </label>
                    <input
                      type="text"
                      name="database.port"
                      value={localSettings.database.port}
                      onChange={(e) => {
                        setLocalSettings(prev => ({
                          ...prev,
                          database: {
                            ...prev.database,
                            port: e.target.value
                          }
                        }));
                      }}
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="5432"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Database Username
                    </label>
                    <input
                      type="text"
                      name="database.username"
                      value={localSettings.database.username}
                      onChange={(e) => {
                        setLocalSettings(prev => ({
                          ...prev,
                          database: {
                            ...prev.database,
                            username: e.target.value
                          }
                        }));
                      }}
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="postgres"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Database Password
                    </label>
                    <input
                      type="password"
                      name="database.password"
                      value={localSettings.database.password}
                      onChange={(e) => {
                        setLocalSettings(prev => ({
                          ...prev,
                          database: {
                            ...prev.database,
                            password: e.target.value
                          }
                        }));
                      }}
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Database Name
                    </label>
                    <input
                      type="text"
                      name="database.databaseName"
                      value={localSettings.database.databaseName}
                      onChange={(e) => {
                        setLocalSettings(prev => ({
                          ...prev,
                          database: {
                            ...prev.database,
                            databaseName: e.target.value
                          }
                        }));
                      }}
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="blog"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Connection String (Optional)
                    </label>
                    <input
                      type="text"
                      name="database.connectionString"
                      value={localSettings.database.connectionString}
                      onChange={(e) => {
                        setLocalSettings(prev => ({
                          ...prev,
                          database: {
                            ...prev.database,
                            connectionString: e.target.value
                          }
                        }));
                      }}
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="postgresql://user:password@host:port/database"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      updateSettings(localSettings);
                    }}
                    className="btn-primary"
                  >
                    Save Database Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Website Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Total Posts</h3>
                <p className="text-3xl font-bold">{publishedPosts.length}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Pending Posts</h3>
                <p className="text-3xl font-bold">{pendingPosts.length}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">RSS Status</h3>
                <p className="text-3xl font-bold">{isScanning ? 'Active' : 'Inactive'}</p>
              </div>
            </div>
          </div>
        )}

        {/* Preview Modal */}
        {previewPostId && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{getPostPreview(previewPostId)?.title}</h2>
                <button
                  onClick={() => setPreviewPostId(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              {getPostPreview(previewPostId)?.imageUrl && (
                <img
                  src={getPostPreview(previewPostId)?.imageUrl}
                  alt={getPostPreview(previewPostId)?.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              )}
              <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: getPostPreview(previewPostId)?.content || '' }} />
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
} 