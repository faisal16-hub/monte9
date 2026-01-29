import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export function SafeImage({ 
  src, 
  alt, 
  fallbackSrc = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80', 
  className = '',
  onLoad,
  onError 
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      // Convert Dropbox URL to direct download format
      if (imgSrc.includes('dropbox.com') && !imgSrc.includes('dl.dropboxusercontent.com')) {
        const convertedUrl = imgSrc
          .replace('www.dropbox.com', 'dl.dropboxusercontent.com')
          .replace('?raw=1', '')
          .replace(/&raw=1/, '')
          .replace(/\?rlkey=[^&]+/, '')
          .replace(/&st=[^&]+/, '');
        
        setImgSrc(convertedUrl);
        setHasError(false);
      } else {
        // Use fallback if conversion didn't work
        setImgSrc(fallbackSrc);
        setHasError(true);
      }
    }
    onError?.();
  };

  const handleLoad = () => {
    onLoad?.();
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      onLoad={handleLoad}
      loading="lazy"
    />
  );
}
