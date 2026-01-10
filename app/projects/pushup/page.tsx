import HuggingFaceEmbed from '@/components/HuggingFaceEmbed';

export default function PushupProjectPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Pushup Counter Model</h1>
          <p className="text-gray-300 text-lg mb-6">
            A computer vision model that detects and counts pushups in real-time using pose estimation.
          </p>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Technologies</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Python & PyTorch</li>
                <li>• MediaPipe Pose Detection</li>
                <li>• Computer Vision</li>
                <li>• Model Training & Evaluation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Key Features</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Real-time pose detection</li>
                <li>• Accurate rep counting</li>
                <li>• Video processing capabilities</li>
                <li>• High accuracy metrics</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <a href="https://github.com/kevinneung/pushup_model"
               className="inline-block px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white text-center">
              View Repository
            </a>
            <a href="https://huggingface.co/kevinneung/pushup_model"
               className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white text-center">
              Hugging Face Model
            </a>
            <a href="https://huggingface.co/spaces/kevinneung/pushup_counter"
               className="inline-block px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded text-white text-center">
              Try Live Demo
            </a>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Try It Live</h2>
          <p className="text-gray-300 mb-6">
            Upload a video or image to see the pushup detection in action:
          </p>
          <HuggingFaceEmbed spaceId="kevinneung/pushup_counter" />
        </div>

        {/* Project Description */}
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
          <p className="text-gray-300 mb-4">
            This project demonstrates my expertise in computer vision and model deployment.
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
