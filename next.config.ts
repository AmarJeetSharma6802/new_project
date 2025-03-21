import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['static.nike.com', 'google.com', 'localhost', 'ebroker.wrteam.me'], // ✅ Domain Add Kiya
  },
};

export default nextConfig;
