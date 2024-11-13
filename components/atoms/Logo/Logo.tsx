import React from 'react';
import Image from 'next/image';

export type LogoProps = {
  className?: string;
  src: string;
  alt: string;
};

const Logo: React.FC<LogoProps> = ({ className, src, alt }) => {
  return (
    <Image
      className={`logo ${className || ''}`}
      src={src}
      alt={alt}
      width={144}
      height={30}
    />
  );
};

export default Logo;
