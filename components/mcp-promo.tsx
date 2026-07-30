import { ArrowRight, Check, Copy } from 'lucide-react';
import { useState } from 'react';

const clients = {
  codex: {
    label: 'Codex',
    commands: [
      'codex mcp add zephyr --url https://mcp.zephyr-cloud.io/mcp',
      'codex mcp login zephyr',
    ],
  },
  claude: {
    label: 'Claude Code',
    commands: [
      'claude mcp add --transport http --scope user zephyr https://mcp.zephyr-cloud.io/mcp',
    ],
  },
} as const;

type Client = keyof typeof clients;

export function McpPromo() {
  const [client, setClient] = useState<Client>('codex');
  const [copied, setCopied] = useState(false);
  const selectedClient = clients[client];
  const installCommand = selectedClient.commands.join('\n');

  const copyInstallCommand = () => {
    void navigator.clipboard.writeText(installCommand);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <section
      aria-labelledby="zephyr-mcp-heading"
      className="group relative my-8 overflow-hidden rounded-xl border border-zinc-800/50 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 p-4 text-white transition-all duration-300 hover:border-zinc-700/70 hover:shadow-lg hover:shadow-zinc-950/20 md:p-6"
    >
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div className="flex flex-col items-start">
          <div className="mb-3 flex items-center gap-2">
            <img
              src="/dark-bg-icon.webp"
              alt=""
              aria-hidden="true"
              className="h-7 w-7"
            />
            <span className="text-xs font-medium text-zinc-500">
              Zephyr API MCP
            </span>
          </div>

          <h2
            id="zephyr-mcp-heading"
            className="!m-0 !text-xl !leading-tight !font-semibold !text-white"
          >
            Use Zephyr from your AI assistant
          </h2>
          <p className="!mt-2 !mb-4 max-w-md !text-sm !leading-snug !text-zinc-400">
            Inspect deployments, promote versions, and roll back through your
            existing Zephyr account and permissions.
          </p>

          <a
            href="/tools/api-mcp"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 no-underline transition-colors hover:text-blue-200 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--rp-c-brand)]"
          >
            Setup and usage guide
            <ArrowRight aria-hidden="true" size={14} />
          </a>
        </div>

        <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/70">
          <div className="flex items-center justify-between border-b border-zinc-800 px-3">
            <span className="text-xs text-zinc-500">Quick connect</span>
            <div
              aria-label="Choose an MCP client"
              className="flex"
              role="group"
            >
              {(Object.keys(clients) as Client[]).map((clientName) => (
                <button
                  key={clientName}
                  type="button"
                  aria-pressed={client === clientName}
                  className={`border-b-2 px-3 py-2.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--rp-c-brand)] ${
                    client === clientName
                      ? 'border-[var(--rp-c-brand)] text-white'
                      : 'border-transparent text-zinc-500 hover:text-zinc-300'
                  }`}
                  onClick={() => {
                    setClient(clientName);
                    setCopied(false);
                  }}
                >
                  {clients[clientName].label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative min-h-28 px-4 py-5 pr-12 font-mono text-xs leading-6 sm:text-[0.8rem]">
            {selectedClient.commands.map((command) => (
              <div key={command} className="flex gap-3">
                <span aria-hidden="true" className="shrink-0 text-zinc-600">
                  $
                </span>
                <code className="break-all !bg-transparent !p-0 !text-zinc-300">
                  {command}
                </code>
              </div>
            ))}

            <button
              type="button"
              aria-label={`Copy ${selectedClient.label} install commands`}
              className="absolute top-4 right-3 rounded p-1.5 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--rp-c-brand)]"
              onClick={copyInstallCommand}
            >
              {copied ? (
                <Check aria-hidden="true" className="text-blue-300" size={16} />
              ) : (
                <Copy aria-hidden="true" size={16} />
              )}
            </button>
            <span className="sr-only" aria-live="polite">
              {copied ? 'Install commands copied' : ''}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
