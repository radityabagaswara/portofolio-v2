import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["is3.cloudhost.id"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
