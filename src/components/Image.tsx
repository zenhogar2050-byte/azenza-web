import React, { forwardRef, useState, useEffect, useRef } from 'react';

export type ImagePreset = 
  | 'thumbnail'
  | 'thumb'
  | 'avatar'
  | 'badge'
  | 'logo'
  | 'card'
  | 'hero'
  | 'gallery'
  | 'partner'
  | 'full';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  preset?: ImagePreset;
  widths?: number[];
  priority?: boolean;
  autoSizes?: boolean;
}

const PRESET_CONFIGS: Record<ImagePreset, { sizes: string; defaultWidth?: number; defaultHeight?: number; widths: number[] }> = {
  thumbnail: {
    sizes: '(max-width: 640px) 80px, 120px',
    defaultWidth: 80,
    defaultHeight: 80,
    widths: [80, 160, 240],
  },
  thumb: {
    sizes: '(max-width: 640px) 80px, 120px',
    defaultWidth: 80,
    defaultHeight: 80,
    widths: [80, 160, 240],
  },
  avatar: {
    sizes: '(max-width: 640px) 48px, 64px',
    defaultWidth: 48,
    defaultHeight: 48,
    widths: [48, 96],
  },
  logo: {
    sizes: '(max-width: 640px) 64px, 120px',
    defaultWidth: 64,
    defaultHeight: 64,
    widths: [64, 128, 256],
  },
  badge: {
    sizes: '(max-width: 640px) 80px, 120px',
    defaultWidth: 80,
    defaultHeight: 80,
    widths: [80, 160, 240],
  },
  partner: {
    sizes: '(max-width: 640px) 120px, 160px',
    defaultWidth: 120,
    defaultHeight: 40,
    widths: [120, 240],
  },
  card: {
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px',
    defaultWidth: 400,
    defaultHeight: 400,
    widths: [200, 400, 800],
  },
  hero: {
    sizes: '(max-width: 640px) 92vw, (max-width: 1024px) 50vw, 800px',
    defaultWidth: 800,
    defaultHeight: 800,
    widths: [320, 580, 800],
  },
  gallery: {
    sizes: '(max-width: 640px) 92vw, (max-width: 1024px) 50vw, 800px',
    defaultWidth: 800,
    defaultHeight: 800,
    widths: [320, 580, 800],
  },
  full: {
    sizes: '100vw',
    defaultWidth: 1200,
    defaultHeight: 800,
    widths: [400, 800, 1200],
  },
};

/**
 * Responsive Image Component that automatically handles `srcSet`, `sizes`,
 * lazy loading, async decoding, and container-aware image optimization to satisfy
 * Core Web Vitals and Lighthouse audits.
 */
export const Image = forwardRef<HTMLImageElement, ImageProps>(function Image(
  {
    src,
    alt,
    preset,
    widths: customWidths,
    sizes: customSizes,
    srcSet: customSrcSet,
    width: propWidth,
    height: propHeight,
    loading: propLoading,
    decoding = 'async',
    referrerPolicy = 'no-referrer',
    priority = false,
    fetchPriority: propFetchPriority,
    autoSizes = false,
    className,
    style,
    ...rest
  },
  ref
) {
  const presetConfig = preset ? PRESET_CONFIGS[preset] : undefined;
  
  const width = propWidth ?? presetConfig?.defaultWidth;
  const height = propHeight ?? presetConfig?.defaultHeight;
  
  // Determine widths array for srcset
  const targetWidths = customWidths ?? presetConfig?.widths ?? [200, 400, 800];

  // Build responsive srcSet
  const computedSrcSet = customSrcSet ?? (
    src && targetWidths.length > 0
      ? targetWidths.map(w => `${src} ${w}w`).join(', ')
      : undefined
  );

  // Compute smart fallback sizes if not explicitly provided
  const computedSizes = customSizes ?? presetConfig?.sizes ?? (() => {
    if (typeof width === 'number') {
      if (width <= 100) return `(max-width: 640px) ${width}px, ${Math.round(width * 1.25)}px`;
      if (width <= 250) return `(max-width: 640px) ${width}px, ${Math.round(width * 1.5)}px`;
      if (width <= 450) return `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${width}px`;
      return `(max-width: 640px) 92vw, (max-width: 1024px) 50vw, ${width}px`;
    }
    return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px';
  })();

  const [dynamicSizes, setDynamicSizes] = useState<string | undefined>(computedSizes);
  const internalRef = useRef<HTMLImageElement | null>(null);

  // Dynamic container detection when autoSizes is enabled
  useEffect(() => {
    if (!autoSizes) return;
    const imgEl = internalRef.current;
    if (!imgEl) return;

    const updateSize = () => {
      const renderedWidth = imgEl.getBoundingClientRect().width;
      if (renderedWidth > 0) {
        setDynamicSizes(`${Math.round(renderedWidth)}px`);
      }
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(imgEl);
    return () => observer.disconnect();
  }, [autoSizes]);

  const loading = priority ? 'eager' : (propLoading ?? 'lazy');
  const fetchPriority = priority ? 'high' : (propFetchPriority ?? (loading === 'eager' ? 'high' : 'auto'));

  return (
    <img
      ref={(node) => {
        internalRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLImageElement | null>).current = node;
        }
      }}
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={autoSizes ? dynamicSizes : computedSizes}
      srcSet={computedSrcSet}
      loading={loading}
      decoding={decoding}
      referrerPolicy={referrerPolicy}
      fetchPriority={fetchPriority as any}
      className={className}
      style={style}
      {...rest}
    />
  );
});

export const OptimizedImage = Image;
export default Image;
