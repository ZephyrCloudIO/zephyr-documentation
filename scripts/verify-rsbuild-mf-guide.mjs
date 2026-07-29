import { readFile } from 'node:fs/promises';
import { dirname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const guidePath = resolve(
  repositoryRoot,
  'docs/tutorials/rsbuild-react-mf-monorepo.mdx',
);
const guide = await readFile(guidePath, 'utf8');
const codeFencePattern = /^```([^\n]*)\n([\s\S]*?)\n```$/gm;
let verifiedBlocks = 0;
let match;

while ((match = codeFencePattern.exec(guide)) !== null) {
  const contentBeforeFence = guide.slice(0, match.index).trimEnd();
  const precedingLine = contentBeforeFence.split('\n').at(-1) ?? '';
  const fixtureMarker = precedingLine.match(
    /^<!-- fixture: ([a-zA-Z0-9_./-]+) -->$/,
  );

  if (!fixtureMarker) {
    throw new Error(
      `Every code block must have an adjacent fixture marker; missing before byte ${match.index}.`,
    );
  }

  const fixturePath = resolve(repositoryRoot, fixtureMarker[1]);
  if (!fixturePath.startsWith(`${repositoryRoot}${sep}`)) {
    throw new Error(`Fixture path escapes repository: ${fixtureMarker[1]}`);
  }

  const fixtureContent = (await readFile(fixturePath, 'utf8')).trimEnd();
  if (match[2] !== fixtureContent) {
    throw new Error(`Guide block does not exactly match ${fixtureMarker[1]}.`);
  }
  verifiedBlocks += 1;
}

const markerCount = (guide.match(/<!-- fixture: /g) ?? []).length;
if (verifiedBlocks === 0 || verifiedBlocks !== markerCount) {
  throw new Error(
    `Verified ${verifiedBlocks} code blocks but found ${markerCount} fixture markers.`,
  );
}

for (const requiredText of [
  'source.entry',
  "assetPrefix: 'auto'",
  'remoteEntry.js',
  'workspace:*',
  '@production',
  'dependencyUrlMode',
  'rsbuild build --watch',
  'ze-cli watch ./dist --target tap-app --metadata',
  'FEDERATION_DEBUG=true',
  '.mf/typesGenerate.log',
  'TYPE-001',
  'TS6059',
  'remote-first',
  'Header fixture v1',
  'Hero fixture',
]) {
  if (!guide.includes(requiredText)) {
    throw new Error(`Guide is missing required coverage: ${requiredText}`);
  }
}

const sidebar = await readFile(
  resolve(repositoryRoot, 'rspress.config.ts'),
  'utf8',
);
if (!sidebar.includes('/tutorials/rsbuild-react-mf-monorepo')) {
  throw new Error('Rsbuild monorepo guide is missing from the sidebar.');
}

console.log(
  `Verified ${verifiedBlocks} executable guide blocks against committed fixture files.`,
);
