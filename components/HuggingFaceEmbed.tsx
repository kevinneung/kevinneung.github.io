'use client';

interface HuggingFaceEmbedProps {
  spaceId: string;
}

export default function HuggingFaceEmbed({ spaceId }: HuggingFaceEmbedProps) {
  return (
    <div className="w-full rounded-lg overflow-hidden bg-gray-800 p-4">
      <iframe
        src={`https://huggingface.co/embed/${spaceId}`}
        frameBorder="0"
        width="100%"
        height="800"
        className="rounded-lg"
      />
    </div>
  );
}
