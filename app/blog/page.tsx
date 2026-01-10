'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const blogPosts = [
  {
    id: 'getting-started-yolo',
    title: 'Getting Started with YOLOv8 for Object Detection',
    excerpt: 'A comprehensive guide to setting up and using YOLOv8 for real-time object detection in your projects.',
    date: '2024-01-15',
    readTime: '8 min read',
  },
  {
    id: 'huggingface-spaces-guide',
    title: 'Deploying ML Models with Hugging Face Spaces',
    excerpt: 'Learn how to deploy your machine learning models as interactive web apps using Hugging Face Spaces.',
    date: '2024-01-10',
    readTime: '6 min read',
  },
  {
    id: 'transformer-vision',
    title: 'Vision Transformers: A Deep Dive',
    excerpt: 'Understanding how transformers are revolutionizing computer vision and image understanding.',
    date: '2024-01-05',
    readTime: '12 min read',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Blog
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            Thoughts and tutorials on computer vision, machine learning, and AI development.
          </p>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {post.excerpt}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
