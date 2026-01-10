import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Kevin Neung. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/kevinneung"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/kevinneung"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/kevinneung"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
