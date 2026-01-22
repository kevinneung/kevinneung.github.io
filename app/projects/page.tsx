import Link from 'next/link';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
        <p className="text-gray-400 mb-12">
          A collection of ML and computer vision projects with live demos.
        </p>

        <div className="grid gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block bg-slate-800 rounded-lg p-6 hover:bg-slate-750 transition border border-slate-700 hover:border-blue-500"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-semibold text-white">
                  {project.title}
                </h2>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    project.status === 'Live'
                      ? 'bg-green-900 text-green-300'
                      : project.status === 'In Progress'
                      ? 'bg-yellow-900 text-yellow-300'
                      : 'bg-gray-700 text-gray-300'
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-gray-400 mb-4">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.category.map((cat) => (
                  <span
                    key={cat}
                    className="text-xs px-2 py-1 bg-blue-900/50 text-blue-300 rounded"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
