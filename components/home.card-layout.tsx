export const HomeCardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ol className="group/list grid grid-cols-2 gap-4 grid-flow-row ">
      {children}
    </ol>
  );
};
