export const HomeCardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ol className="group/list md:grid md:grid-cols-2 flex flex-col gap-4 grid-flow-row ">
      {children}
    </ol>
  );
};
