export const Video = ({ src, title }: { src: string; title: string }) => {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "64.67065868263472%",
        height: 0,
      }}
    >
      <iframe
        title={title}
        src={src}
        frameBorder="0"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};
