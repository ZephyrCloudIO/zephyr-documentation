export const Keyboard = ({ shortcuts }: { shortcuts: string | string[] }) => {
  return (
    <div className="flex gap-1">
      {!Array.isArray(shortcuts) ? (
        <span className="keyboard-shortcut">{shortcuts}</span>
      ) : (
        shortcuts.map((shortcut, index) => {
          return (
            <div key={index}>
              {' '}
              <span className="keyboard-shortcut">{shortcut}</span>
              <span>{index === shortcuts.length - 1 ? ' ' : ' + '}</span>
            </div>
          );
        })
      )}
    </div>
  );
};
