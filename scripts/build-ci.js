#!/usr/bin/env node

const { execSync } = require("node:child_process");

// Run the build twice on CI to ensure search functionality works
console.log("🔄 Running first build for CI...");
try {
  // First build to generate the necessary files
  execSync("rspress build", { stdio: "inherit" });

  console.log("✅ First build completed");
  console.log("🔄 Running second build to ensure search works correctly...");

  // Second build to use the generated search index
  execSync("rspress build", { stdio: "inherit" });

  console.log("✅ CI build completed successfully!");
} catch (error) {
  console.error("❌ Build failed:", error.message);
  process.exit(1);
}
