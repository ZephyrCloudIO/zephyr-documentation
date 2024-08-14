import { useState } from 'react';
import { getErrorMessage } from '../../lib/error-helpers';
import { useNavigate } from 'rspress/runtime';

export function ErrorLink({ code }: { code: string }) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  if (!getErrorMessage(code)) {
    throw new Error(`Invalid error code: ${code}`);
  }

  return (
    <code>
      <a
        href={`/errors/${code}`}
        className="hover:text-[var(--rp-c-brand)] hover:decoration-[var(--rp-c-brand)]"
        title={getErrorMessage(code)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={(e) => {
          e.preventDefault();
          navigate(`/errors/${code}`);
        }}
      >
        {hover ? getErrorMessage(code) : code}
      </a>
    </code>
  );
}