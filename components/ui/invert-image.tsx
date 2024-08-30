import React from 'react';
import { useDark } from 'rspress/runtime';
import { useEffect, useState } from 'react';

interface ImageTypeProps {
  darkSrc?: string;
  lightSrc?: string;
}
export const InvertImage = ({ darkSrc, lightSrc }: ImageTypeProps) => {
  const [imageSrc, setImageSrc] = useState('/bg-dark-logo.png');

  const isDark = useDark();

  useEffect(() => {
    if (!isDark) setImageSrc(lightSrc ? lightSrc : '/bg-light-logo.png');

    if (isDark) setImageSrc(darkSrc ? darkSrc : '/bg-dark-logo.png');
  }, [isDark]);

  return (
    <img
      src={imageSrc}
      alt="Zephyr Cloud"
      height="100"
      className="md:w-1/2 w-full md:min-h-[220px] mx-auto"
    />
  );
};
