import type { NextConfig } from "next";

const repository =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "sori.tts";
const githubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  assetPrefix: githubPages ? `/${repository}` : "",
};

export default nextConfig;
