import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

const clients = {
  claude: {
    label: 'Claude Code',
    shortLabel: 'Claude Code',
    logo: '/ai-tools/claude.svg',
    description: 'Add Zephyr as a remote HTTP server for your user account.',
    format: 'shell',
    commands: [
      'claude mcp add --transport http --scope user zephyr https://mcp.zephyr-cloud.io/mcp',
    ],
  },
  codex: {
    label: 'Codex',
    shortLabel: 'Codex',
    logo: '/ai-tools/codex.svg',
    description: 'Connect Codex to Zephyr and sign in with your account.',
    format: 'shell',
    commands: [
      'codex mcp add zephyr --url https://mcp.zephyr-cloud.io/mcp',
      'codex mcp login zephyr',
    ],
  },
  cursor: {
    label: 'Cursor',
    shortLabel: 'Cursor',
    logo: '/ai-tools/cursor.svg',
    description: 'Add this remote server to your .cursor/mcp.json file.',
    format: 'config',
    commands: [
      '{',
      '  "mcpServers": {',
      '    "zephyr": { "url": "https://mcp.zephyr-cloud.io/mcp" }',
      '  }',
      '}',
    ],
  },
  gemini: {
    label: 'Gemini CLI',
    shortLabel: 'Gemini',
    logo: '/ai-tools/gemini.svg',
    description: 'Add Zephyr over HTTP, then authenticate from /mcp.',
    format: 'shell',
    commands: [
      'gemini mcp add --transport http --scope user zephyr https://mcp.zephyr-cloud.io/mcp',
    ],
  },
  vscode: {
    label: 'VS Code + GitHub Copilot',
    shortLabel: 'VS Code',
    logo: '/ai-tools/github-copilot.svg',
    description: 'Install Zephyr in your VS Code user profile.',
    format: 'shell',
    commands: [
      'code --add-mcp \'{"name":"zephyr","type":"http","url":"https://mcp.zephyr-cloud.io/mcp"}\'',
    ],
  },
} as const;

type Client = keyof typeof clients;

export function McpPromo() {
  const [selected, setSelected] = useState<Client>('claude');
  const [copied, setCopied] = useState<Client | null>(null);
  const selectedClient = clients[selected];

  const copyInstallCommand = (client: Client) => {
    void navigator.clipboard.writeText(clients[client].commands.join('\n'));
    setCopied(client);
    window.setTimeout(() => setCopied(null), 1400);
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Choose an AI client"
        className="not-prose mb-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5"
      >
        {(Object.keys(clients) as Client[]).map((clientName) => {
          const client = clients[clientName];
          const isSelected = selected === clientName;

          return (
            <button
              key={clientName}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls="mcp-client-panel"
              className={`flex min-h-11 items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--rp-c-brand)] ${
                isSelected
                  ? 'border-[var(--rp-c-brand)] bg-zinc-800 text-white'
                  : 'border-zinc-800/70 bg-zinc-950/50 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-200'
              }`}
              onClick={() => {
                setSelected(clientName);
                setCopied(null);
              }}
            >
              <img
                src={client.logo}
                alt=""
                aria-hidden="true"
                className="h-5 w-5 shrink-0"
              />
              <span>{client.shortLabel}</span>
            </button>
          );
        })}
      </div>

      <div
        id="mcp-client-panel"
        role="tabpanel"
        className="relative overflow-hidden rounded-xl border border-zinc-800/50 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 p-4"
      >
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5" />

        <button
          type="button"
          aria-label={`Copy ${selectedClient.label} install commands`}
          className="absolute top-4 right-4 z-20 rounded p-1.5 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--rp-c-brand)]"
          onClick={() => copyInstallCommand(selected)}
        >
          {copied === selected ? (
            <Check aria-hidden="true" className="text-blue-300" size={16} />
          ) : (
            <Copy aria-hidden="true" size={16} />
          )}
        </button>

        <div className="relative z-10 flex h-full flex-col">
          <h3 className="!m-0 !pr-10 !text-xl !leading-tight !font-semibold !text-white">
            {selectedClient.label}
          </h3>
          <p className="!mt-2 !mb-3 !text-sm !leading-snug !text-zinc-400">
            {selectedClient.description}
          </p>

          <div className="mt-auto rounded-lg border border-zinc-800 bg-zinc-950/70 px-3 py-2.5 font-mono text-sm leading-6">
            {selectedClient.commands.map((command, index) => (
              <div key={`${selected}-${index}`} className="flex min-w-0 gap-2">
                {selectedClient.format === 'shell' && (
                  <span aria-hidden="true" className="shrink-0 text-zinc-600">
                    $
                  </span>
                )}
                <code className="min-w-0 break-words whitespace-pre-wrap !bg-transparent !p-0 !text-zinc-300">
                  {command}
                </code>
              </div>
            ))}
          </div>

          <span className="sr-only" aria-live="polite">
            {copied === selected
              ? `${selectedClient.label} install commands copied`
              : ''}
          </span>
        </div>
      </div>
    </div>
  );
}
