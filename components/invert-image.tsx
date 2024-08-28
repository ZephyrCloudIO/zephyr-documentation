import { useDark } from 'rspress/runtime';

export const InvertImage = ({
  darkSrc,
  lightSrc,
}: {
  darkSrc?: string;
  lightSrc?;
}) => {
  const isDark = useDark();

  console.log('isDark', isDark);

  const darkSource = darkSrc ? darkSrc : '/bg-dark-logo.png';

  const lightSource = lightSrc ? lightSrc : '/bg-light-logo.png';
  return (
    <img
      src={isDark ? darkSource : lightSource}
      alt="Zephyr Cloud"
      height="100"
      className="w-1/2 h-[220px] mx-auto"
    />
  );
};
