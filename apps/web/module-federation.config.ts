import { createModuleFederationConfig } from "@module-federation/rspress-plugin";

export default createModuleFederationConfig({
  filename: "remoteEntry.js",
  name: "web_docs",
  exposes: {
    "./App": "./docs/index.md",
    "./Guide": "./docs/guide/index.md",
    "./build": "./docs/build.mdx",
    "./existing-app": "./docs/recipes/existing-app.mdx",
    "./react-vite": "./docs/recipes/react-vite.mdx",
    "./react-rspack-nx": "./docs/recipes/react-rspack-nx.mdx",
    "./turborepo-react": "./docs/recipes/turborepo-react.mdx",
    "./rolldown-react": "./docs/recipes/rolldown-react.mdx",
    "./modernjs": "./docs/recipes/modernjs.mdx",
    "./nx-mf-app": "./docs/recipes/nx-mf-app.mdx",
    "./parcel-react": "./docs/recipes/parcel-react.mdx",
    "./vanilla-mf": "./docs/recipes/vanilla-mf.mdx",
    "./vite-rspack-webpack-mf": "./docs/recipes/vite-rspack-webpack-mf.mdx",
    "./rspress": "./docs/recipes/rspress.mdx"
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true }
  }
});