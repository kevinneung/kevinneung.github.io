import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Kevin Neung</h1>
        <p className="text-xl text-gray-300 mb-8">
          ML Ops Engineer | Data Professional | Computer Vision Enthusiast
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Building scalable ML systems with deep interests in machine perception,
          life science, and dynamic systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center mb-12">
          <Link href="/projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold">
            View Projects
          </Link>
          <Link href="/about" className="px-6 py-3 border border-blue-600 hover:bg-blue-600/10 rounded-lg text-blue-400 font-semibold">
            Learn More
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center text-2xl">
          <a href="https://github.com/kevinneung" className="text-gray-400 hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/kevinneung" className="text-gray-400 hover:text-white transition">
            <FaLinkedin />
          </a>
          <a href="mailto:your-email@example.com" className="text-gray-400 hover:text-white transition">
            <FaEnvelope />
          </a>
        </div>
      </section>
    </main>
  );
}
