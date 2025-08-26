import { createModuleFederationConfig } from "@module-federation/rspress-plugin";

export default createModuleFederationConfig({
  filename: "remoteEntry.js",
  name: "host_docs",
  remotes: {
    ai_docs: "ai_docs@http://localhost:3001/remoteEntry.js",
    cloud_docs: "cloud_docs@http://localhost:3002/remoteEntry.js",
    mobile_docs: "mobile_docs@http://localhost:3003/remoteEntry.js",
    sidepanel_docs: "sidepanel_docs@http://localhost:3004/remoteEntry.js",
    web_docs: "web_docs@http://localhost:3005/remoteEntry.js",
  },
});
