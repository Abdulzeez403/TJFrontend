import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["three"],
  images: {
    domains: ["www.apple.com", "upload.wikimedia.org"],
  },
};

export default nextConfig;
