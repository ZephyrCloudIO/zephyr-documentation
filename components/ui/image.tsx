export const Image = ({ src }: { src?: string }) => {
  return (
    <div className="items-center flex justify-center">
      <img src={src} className="w-1/3 rounded-lg" />
    </div>
  );
};
