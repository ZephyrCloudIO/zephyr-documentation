import { ArrowRight, Check, Copy, RadioTower } from 'lucide-react';
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
      className="group relative my-10 overflow-hidden rounded-[1.75rem] border border-sky-300/20 bg-[#061018] text-white shadow-[0_24px_80px_-36px_rgba(14,165,233,0.65)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_90%_95%,rgba(16,185,129,0.13),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:linear-gradient(to_bottom,black,transparent_76%)]" />

      <div className="relative grid gap-8 p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1 font-mono text-[0.68rem] font-semibold tracking-[0.18em] text-sky-200 uppercase">
            <RadioTower aria-hidden="true" size={13} />
            Zephyr API MCP
          </div>

          <h2
            id="zephyr-mcp-heading"
            className="!m-0 max-w-xl !text-[clamp(1.75rem,4vw,2.75rem)] !leading-[1.04] !font-semibold !tracking-[-0.035em] !text-white"
            style={{ fontFamily: "'Nebulica-SemiBold', sans-serif" }}
          >
            Give your AI assistant a live view of Zephyr.
          </h2>
          <p className="!mt-4 !mb-6 max-w-lg !text-[0.98rem] !leading-7 !text-slate-300">
            Inspect deployments, trace versions, promote releases, and roll
            back—through your existing Zephyr account and permissions.
          </p>

          <a
            href="/tools/api-mcp"
            className="inline-flex items-center gap-2 rounded-full bg-sky-300 px-4 py-2.5 text-sm font-bold text-slate-950 no-underline transition-all duration-300 hover:gap-3 hover:bg-white hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
          >
            Open the MCP guide
            <ArrowRight aria-hidden="true" size={16} />
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#03080c]/90 shadow-2xl shadow-black/30">
          <div className="flex flex-col gap-3 border-b border-white/10 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.14em] text-slate-500 uppercase">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              Quick connect
            </div>

            <div
              aria-label="Choose an MCP client"
              className="flex w-fit rounded-lg border border-white/10 bg-white/[0.04] p-1"
              role="group"
            >
              {(Object.keys(clients) as Client[]).map((clientName) => (
                <button
                  key={clientName}
                  type="button"
                  aria-pressed={client === clientName}
                  className={`rounded-md px-3 py-1.5 font-mono text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 ${
                    client === clientName
                      ? 'bg-sky-300 font-bold text-slate-950'
                      : 'text-slate-400 hover:text-white'
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

          <div className="relative min-h-36 px-5 py-6 pr-14 font-mono text-[0.76rem] leading-7 sm:text-[0.82rem]">
            {selectedClient.commands.map((command) => (
              <div key={command} className="flex gap-3">
                <span aria-hidden="true" className="shrink-0 text-emerald-400">
                  $
                </span>
                <code className="break-all !bg-transparent !p-0 !text-slate-200">
                  {command}
                </code>
              </div>
            ))}

            <button
              type="button"
              aria-label={`Copy ${selectedClient.label} install commands`}
              className="absolute top-5 right-4 rounded-lg border border-white/10 bg-white/[0.06] p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              onClick={copyInstallCommand}
            >
              {copied ? (
                <Check
                  aria-hidden="true"
                  className="text-emerald-400"
                  size={16}
                />
              ) : (
                <Copy aria-hidden="true" size={16} />
              )}
            </button>
            <span className="sr-only" aria-live="polite">
              {copied ? 'Install commands copied' : ''}
            </span>
          </div>

          <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 bg-white/[0.025]">
            {[
              ['2 tools', 'search + execute'],
              ['Live schema', 'no hard-coded paths'],
              ['OAuth', 'your permissions'],
            ].map(([title, detail]) => (
              <div key={title} className="px-3 py-3 sm:px-4">
                <div className="font-mono text-[0.66rem] font-bold text-sky-200 sm:text-xs">
                  {title}
                </div>
                <div className="mt-0.5 text-[0.58rem] leading-tight text-slate-500 sm:text-[0.68rem]">
                  {detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
