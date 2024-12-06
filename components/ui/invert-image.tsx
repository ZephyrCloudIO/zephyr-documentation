import React from "react";
import { useEffect, useState } from "react";
import { useDark } from "rspress/runtime";

interface ImageTypeProps {
	darkSrc?: string;
	lightSrc?: string;
}
export const InvertImage = ({ darkSrc, lightSrc }: ImageTypeProps) => {
	const [imageSrc, setImageSrc] = useState("/dark-bg-logo.png");

	const isDark = useDark();

	useEffect(() => {
		if (!isDark) setImageSrc(lightSrc ? lightSrc : "/light-bg-logo.png");

		if (isDark) setImageSrc(darkSrc ? darkSrc : "/dark-bg-logo.png");
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
