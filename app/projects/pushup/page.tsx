import Link from 'next/link';
import { getProjectBySlug } from '@/data/projects';

export default function PushupProjectPage() {
  const project = getProjectBySlug('pushup-form-classification');

  return (
    <main className="min-h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8"
        >
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl font-bold text-white">Pushup Counter Model</h1>
            <span className="text-xs px-2 py-1 rounded bg-gray-700 text-gray-300">
              Coming Soon
            </span>
          </div>
          <p className="text-gray-300 text-lg mb-6">
            A computer vision model that detects and counts pushups in real-time using pose estimation.
          </p>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Technologies</h3>
              <ul className="text-gray-300 space-y-2">
                <li>- Python and PyTorch</li>
                <li>- MediaPipe Pose Detection</li>
                <li>- Computer Vision</li>
                <li>- Model Training and Evaluation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Key Features</h3>
              <ul className="text-gray-300 space-y-2">
                <li>- Real-time pose detection</li>
                <li>- Accurate rep counting</li>
                <li>- Video processing capabilities</li>
                <li>- High accuracy metrics</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <a
              href="https://github.com/kevinneung/pushup_model"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white text-center"
            >
              View Repository
            </a>
            <a
              href="https://huggingface.co/kevinneung/pushup_model"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white text-center"
            >
              Hugging Face Model
            </a>
          </div>
        </div>

        {/* Demo Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Live Demo</h2>

          {/* Good Form Detection */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-green-400 mb-4">Detection of good form:</h3>
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <img
                src="/good_form.gif"
                alt="Push-up good form detection demo"
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* Bad Form Detection */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-red-400 mb-4">Detection of bad form:</h3>
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <img
                src="/bad_form.gif"
                alt="Push-up bad form detection demo"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
          <p className="text-gray-300 mb-4">
            This project demonstrates expertise in computer vision and model deployment.
            The pushup counter uses pose estimation to detect body keypoints and identify
            pushup repetitions with high accuracy.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">Architecture</h3>
          <p className="text-gray-300 mb-4">
            The system uses MediaPipe for real-time pose detection combined with custom
            logic to count repetitions. Models are optimized for deployment on Hugging Face Spaces.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">Results</h3>
          <p className="text-gray-300 mb-4">
            Achieves high accuracy in counting pushups across different video qualities
            and angles. The model is production-ready and scalable.
          </p>
        </div>
      </div>
    </main>
  );
}
