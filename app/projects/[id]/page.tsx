import Link from 'next/link';
import { projects, getProjectBySlug, getAllProjectSlugs } from '@/data/projects';
import HuggingFaceEmbed from '@/components/HuggingFaceEmbed';

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectBySlug(id);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-blue-400 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/projects"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8"
        >
          Back to Projects
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-bold text-white">{project.title}</h1>
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

        <div className="flex flex-wrap gap-2 mb-6">
          {project.category.map((cat) => (
            <span
              key={cat}
              className="px-3 py-1 text-sm bg-blue-900/50 text-blue-300 rounded"
            >
              {cat}
            </span>
          ))}
        </div>

        <p className="text-lg text-gray-300 mb-8">{project.description}</p>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mb-12">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white"
            >
              View Repository
            </a>
          )}
          {project.demoUrl && project.status === 'Live' && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
            >
              Try Live Demo
            </a>
          )}
        </div>

        {/* Demo Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Live Demo</h2>
          {project.status === 'Live' && project.spaceId ? (
            <HuggingFaceEmbed spaceId={project.spaceId} title={project.title} />
          ) : (
            <div className="bg-slate-800 rounded-lg p-12 text-center border border-slate-700">
              <div className="text-5xl mb-4">Coming Soon</div>
              <h3 className="text-xl text-white mb-2">Demo In Development</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                This demo is currently being built. Check back soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ id: slug }));
}
