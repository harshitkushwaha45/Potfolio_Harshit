import { useState } from 'react';
import { ImageIcon } from 'lucide-react';

// Shows a neutral placeholder until a real screenshot path is set in the data file.
// Also falls back to the placeholder if the image fails to load.
export default function ImageWithFallback({ src, alt, label }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="flex h-full min-h-[220px] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-line/50 via-surface to-accent/10 p-6 text-center"
      >
        <ImageIcon className="text-muted" size={28} aria-hidden="true" />
        <p className="text-sm text-muted">{label}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
    />
  );
}
