export const Keyboard = ({ shortcuts }: { shortcuts: string | string[] }) => {
  return (
    <>
      {!Array.isArray(shortcuts) ? (
        <span className="keyboard-shortcut">{shortcuts}</span>
      ) : (
        shortcuts.map((shortcut, index) => {
          return (
            <>
              {" "}
              <span className="keyboard-shortcut">{shortcut}</span>
              {index === shortcuts.length - 1 ? " " : " + "}
            </>
          );
        })
      )}
    </>
  );
};
