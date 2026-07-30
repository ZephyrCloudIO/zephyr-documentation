import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

const clients = {
  codex: {
    label: 'Codex',
    description: 'Connect Codex to Zephyr and sign in with your account.',
    commands: [
      'codex mcp add zephyr --url https://mcp.zephyr-cloud.io/mcp',
      'codex mcp login zephyr',
    ],
  },
  claude: {
    label: 'Claude Code',
    description: 'Add Zephyr as a remote HTTP server for your user account.',
    commands: [
      'claude mcp add --transport http --scope user zephyr https://mcp.zephyr-cloud.io/mcp',
    ],
  },
} as const;

type Client = keyof typeof clients;

export function McpPromo() {
  const [copied, setCopied] = useState<Client | null>(null);

  const copyInstallCommand = (client: Client) => {
    void navigator.clipboard.writeText(clients[client].commands.join('\n'));
    setCopied(client);
    window.setTimeout(() => setCopied(null), 1400);
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {(Object.keys(clients) as Client[]).map((clientName) => {
        const client = clients[clientName];

        return (
          <div
            key={clientName}
            className="group relative min-h-[12rem] overflow-hidden rounded-xl border border-zinc-800/50 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700/70 hover:shadow-lg hover:shadow-zinc-950/20"
          >
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <button
              type="button"
              aria-label={`Copy ${client.label} install commands`}
              className="absolute top-4 right-4 z-20 rounded p-1.5 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--rp-c-brand)]"
              onClick={() => copyInstallCommand(clientName)}
            >
              {copied === clientName ? (
                <Check aria-hidden="true" className="text-blue-300" size={16} />
              ) : (
                <Copy aria-hidden="true" size={16} />
              )}
            </button>

            <div className="relative z-10 flex h-full flex-col">
              <h3 className="!m-0 !pr-10 !text-xl !leading-tight !font-semibold !text-white">
                {client.label}
              </h3>
              <p className="!mt-2 !mb-3 !text-sm !leading-snug !text-zinc-400">
                {client.description}
              </p>

              <div className="mt-auto rounded-lg border border-zinc-800 bg-zinc-950/70 px-3 py-2.5 font-mono text-sm leading-6">
                {client.commands.map((command) => (
                  <div key={command} className="flex min-w-0 gap-2">
                    <span aria-hidden="true" className="shrink-0 text-zinc-600">
                      $
                    </span>
                    <code className="min-w-0 break-words whitespace-normal !bg-transparent !p-0 !text-zinc-300">
                      {command}
                    </code>
                  </div>
                ))}
              </div>

              <span className="sr-only" aria-live="polite">
                {copied === clientName
                  ? `${client.label} install commands copied`
                  : ''}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
