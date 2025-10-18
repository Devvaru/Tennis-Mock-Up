import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized:true },
  basePath: "/Tennis-Mock-Up",
  assetPrefix: "/Tennis-Mock-Up/"
};

export default nextConfig;
