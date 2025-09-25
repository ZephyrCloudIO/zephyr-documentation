import { useState } from 'react';
import { useNavigate } from '@rspress/core/runtime';
import { getErrorMessage } from '../../lib/error-helpers';

export function ErrorLink({ code }: { code: string }) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  if (!getErrorMessage(code)) {
    throw new Error(`Invalid error code: ${code}`);
  }

  return (
    <code>
      <a
        href={`/errors/${code.toLowerCase()}`}
        className="underline hover:no-underline"
        title="View more information about this error"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={(e) => {
          e.preventDefault();
          navigate(`/errors/${code.toLowerCase()}`);
        }}
      >
        {hover ? getErrorMessage(code) : code}
      </a>
    </code>
  );
}
