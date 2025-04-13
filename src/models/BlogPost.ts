import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  excerpt: { type: String, required: true },
  date: { type: Date, required: true },
  author: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  imageUrl: { type: String },
  tags: [{ type: String }],
  source: { type: String, required: true }, // RSS feed URL
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Update the updatedAt field before saving
blogPostSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.models.BlogPost || mongoose.model('BlogPost', blogPostSchema); 