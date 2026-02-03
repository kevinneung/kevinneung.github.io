export interface Project {
  slug: string;
  title: string;
  category: string[];
  summary: string;
  description: string;
  technologies: string[];
  features: string[];
  demoUrl?: string;
  repoUrl?: string;
  spaceId?: string;
  status: 'Live' | 'In Progress' | 'Coming Soon';
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: 'pushup-form-classification',
    title: 'Push-Up Form Classification',
    category: ['Computer Vision', 'Pose Estimation'],
    summary: 'Pose-based classification of exercise form using real-time video analysis.',
    description: `This project demonstrates expertise in computer vision and model deployment. 
The pushup counter uses pose estimation to detect body keypoints and identify 
pushup repetitions with high accuracy. The system uses MediaPipe for real-time 
pose detection combined with custom logic to count repetitions.`,
    technologies: ['Python', 'PyTorch', 'MediaPipe', 'Computer Vision'],
    features: [
      'Real-time pose detection',
      'Accurate rep counting',
      'Video processing capabilities',
      'High accuracy metrics',
    ],
    demoUrl: 'https://huggingface.co/spaces/kevinneung/pushup_counter',
    repoUrl: 'https://github.com/kevinneung/pushup_model',
    spaceId: 'kevinneung/pushup_counter',
    status: 'Live',
    featured: true,
  },
  {
    slug: 'ml-model-comparison',
    title: 'Machine Learning Model Comparison Dashboard',
    category: ['MLOps', 'Data Analytics'],
    summary: 'Dashboard for comparing ML model performance metrics and MLOps benchmarks.',
    description: `A comprehensive dashboard for comparing machine learning models across both
performance metrics (accuracy, F1 score, precision, recall) and MLOps benchmarks
(training time, inference speed, resource usage). Helps data scientists and ML engineers
make informed decisions when selecting models for production deployment.`,
    technologies: ['Python', 'Machine Learning', 'Data Visualization'],
    features: [
      'Performance metrics comparison (accuracy, F1, precision, recall)',
      'MLOps benchmarking (training time, inference speed)',
      'Resource usage analysis',
      'Side-by-side model evaluation',
    ],
    status: 'Coming Soon',
    featured: false,
  },
  {
    slug: 'clinical-research-assistant',
    title: 'Clinical Research AI Agent Assistant',
    category: ['AI Agents', 'Healthcare'],
    summary: 'Multi-agent assistant that automates clinical research workflows with human-in-the-loop approval.',
    description: `A multi-agent clinical research assistant built with Pydantic-AI, PySide6, and SQLite
that automates labor-intensive clinical study workflows through orchestrated AI agents with
human-in-the-loop approval flows. Features specialized agents for project management,
document drafting, and professional correspondence.`,
    technologies: ['Python', 'Pydantic-AI', 'PySide6', 'SQLite', 'LLMs'],
    features: [
      'Multi-agent architecture (Orchestrator, Project Manager, Document Maker, Email Drafter)',
      'Human-in-the-loop approval for critical actions',
      'MCP integration for filesystem and web search',
      'Full-featured desktop UI with chat, file browser, and agent monitoring',
    ],
    repoUrl: 'https://github.com/kevinneung/clinical_research_assistant',
    status: 'In Progress',
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
