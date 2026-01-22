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
    status: 'Coming Soon',
    featured: true,
  },
  {
    slug: 'object-detection',
    title: 'Real-time Object Detection',
    category: ['Computer Vision', 'Deep Learning'],
    summary: 'A YOLOv8-based object detection system for real-time inference.',
    description: `This project demonstrates real-time object detection using the YOLOv8 model. 
Upload an image or use your webcam to detect objects in real-time. 
The model can identify over 80 different object categories.`,
    technologies: ['Python', 'YOLO', 'OpenCV', 'PyTorch'],
    features: [
      'Real-time detection',
      '80+ object categories',
      'Webcam support',
      'Image upload',
    ],
    spaceId: 'kevinneung/object-detection',
    status: 'Coming Soon',
    featured: false,
  },
  {
    slug: 'image-segmentation',
    title: 'Image Segmentation',
    category: ['Computer Vision', 'Transformers'],
    summary: 'Semantic segmentation for scene understanding using transformer models.',
    description: `This project uses transformer-based models to perform semantic segmentation on images. 
It can identify and label different regions of an image, useful for autonomous driving, 
medical imaging, and more.`,
    technologies: ['Python', 'Transformers', 'PyTorch', 'Hugging Face'],
    features: [
      'Semantic segmentation',
      'Scene understanding',
      'Multiple model support',
      'Batch processing',
    ],
    spaceId: 'kevinneung/image-segmentation',
    status: 'Coming Soon',
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
