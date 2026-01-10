import HuggingFaceEmbed from '@/components/HuggingFaceEmbed';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

// This would typically come from a database or CMS
const projectsData: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  spaceId: string;
  tags: string[];
}> = {
  'object-detection': {
    title: 'Real-time Object Detection',
    description: 'A YOLOv8-based object detection system.',
    longDescription: 'This project demonstrates real-time object detection using the YOLOv8 model. Upload an image or use your webcam to detect objects in real-time. The model can identify over 80 different object categories.',
    spaceId: 'kevinneung/object-detection',
    tags: ['Computer Vision', 'YOLO', 'Python'],
  },
  'image-segmentation': {
    title: 'Image Segmentation',
    description: 'Semantic segmentation for scene understanding.',
    longDescription: 'This project uses transformer-based models to perform semantic segmentation on images. It can identify and label different regions of an image, useful for autonomous driving, medical imaging, and more.',
    spaceId: 'kevinneung/image-segmentation',
    tags: ['Segmentation', 'Transformers', 'PyTorch'],
  },
  'face-recognition': {
    title: 'Face Recognition System',
    description: 'Face detection and recognition pipeline.',
    longDescription: 'A comprehensive face recognition system that can detect faces in images and match them against a database. Built using deep learning techniques and optimized for real-time performance.',
    spaceId: 'kevinneung/face-recognition',
    tags: ['Face Recognition', 'Deep Learning', 'OpenCV'],
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projectsData[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
        >
          <FaArrowLeft className="mr-2" />
          Back to Projects
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          {project.longDescription}
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Live Demo
          </h2>
          <HuggingFaceEmbed spaceId={project.spaceId} title={project.title} />
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(projectsData).map((id) => ({ id }));
}
