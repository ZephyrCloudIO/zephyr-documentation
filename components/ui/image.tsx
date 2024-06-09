import { cn } from "../../utils/cn";

export const Image = ({ src, size }: { src?: string, size?: "medium" | "large" }) => {

  const _size = size === "large" ? "w-2/3" : "w-1/3";
  return (
    <div className="flex items-center justify-center py-2 lg:py-4">
      <img src={src} className={cn(" rounded-lg", _size )} />
    </div>
  );
};
