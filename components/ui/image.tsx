import { cn } from '../../lib/cn';

export const Image = ({
  src,
  alt,
  size,
}: {
  src?: string;
  alt?: string;
  size?: 'medium' | 'large';
}) => {
  const _size = size === 'large' ? 'w-2/3' : 'w-1/3';
  return (
    <div className="flex items-center justify-center py-2 lg:py-4">
      <img src={src} alt={alt} className={cn(' rounded-lg', _size)} />
    </div>
  );
};
