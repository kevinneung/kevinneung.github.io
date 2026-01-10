'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
              Hi! I'm Kevin Neung, a computer vision enthusiast passionate about
              building AI-powered applications that can see and understand the world.
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
              My work focuses on developing practical computer vision solutions using
              deep learning frameworks like PyTorch and TensorFlow. I enjoy creating
              interactive demos that make AI accessible to everyone.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">
              Skills & Technologies
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'Hugging Face', 'YOLO', 'Transformers', 'React', 'Next.js'].map((skill) => (
                <div
                  key={skill}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow"
                >
                  <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h2>

            <div className="flex space-x-6">
              <a
                href="https://github.com/kevinneung"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <FaGithub size={24} className="mr-2" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/kevinneung"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <FaLinkedin size={24} className="mr-2" />
                LinkedIn
              </a>
              <a
                href="mailto:kevin@example.com"
                className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <FaEnvelope size={24} className="mr-2" />
                Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
