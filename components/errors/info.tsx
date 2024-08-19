import { Helmet } from 'rspress/runtime';
import { getErrorMessage } from '../../lib/error-helpers';
import { ErrorLink } from './link';

export function ErrorInfo({
  code,
  browser,
  terminal,
  plugins = 'all',
  related,
}: {
  code: string;
  browser?: boolean;
  terminal?: boolean;
  related?: string;
  plugins?: string;
}) {
  const message = getErrorMessage(code);

  if (!message) {
    throw new Error(`Invalid error code: ${code}`);
  }

  if ((browser && terminal) || (!browser && !terminal)) {
    throw new Error(
      'Please provide only one of the following: browser or terminal'
    );
  }

  return (
    <div>
      <Helmet>
        <meta property="og:description" content={message} />
        <meta property="og:title" content={code} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://docs.zephyr-cloud.io/errors/${code.toLowerCase()}`}
        />
        <title>
          {code} - {message}
        </title>
      </Helmet>

      <ul className="list-disc leading-10">
        <li>
          Error Code: <code>{code}</code>
        </li>
        <li>
          Location:{' '}
          <b
            title={
              browser
                ? 'In our Browser Extension'
                : 'When using one of our plugins for your bundler'
            }
          >
            {browser ? 'Browser' : 'Terminal'}
          </b>
        </li>

        {plugins && (
          <li>
            Related plugins: <b>{plugins}</b>
          </li>
        )}

        {related && (
          <li>
            Similar errors:
            {related.split(',').map((code) => (
              <span className="ml-2" key={code}>
                <ErrorLink code={code} />
              </span>
            ))}
          </li>
        )}
      </ul>

      <div className="py-8 lg:my-4 md:my-6">
        <div className="h-[0.4px] bg-zinc-200/30" />
      </div>
    </div>
  );
}
