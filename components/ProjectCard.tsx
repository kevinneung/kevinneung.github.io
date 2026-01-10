'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function ProjectCard({ id, title, description, image, tags }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link href={`/projects/${id}`}>
        <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
