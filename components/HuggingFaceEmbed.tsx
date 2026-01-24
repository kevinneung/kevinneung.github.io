'use client';

interface HuggingFaceEmbedProps {
  spaceId: string;
  title?: string;
}

export default function HuggingFaceEmbed({ spaceId, title }: HuggingFaceEmbedProps) {
  return (
    <div className="w-full rounded-lg overflow-hidden bg-gray-800 p-4">
      <iframe
        src={`https://huggingface.co/spaces/${spaceId}/embed`}
        title={title || 'Hugging Face Demo'}
        width="100%"
        height="800"
        className="rounded-lg"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; camera"
      />
    </div>
  );
}
