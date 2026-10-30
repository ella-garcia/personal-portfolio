import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/happyrobot", destination: "/happyrobot/index.html" },
    ];
  },
};

export default nextConfig;
