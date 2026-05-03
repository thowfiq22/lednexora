import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for shared hosting / cPanel deployment
  output: "export",

  // Generate trailing slash URLs for clean static file hosting
  trailingSlash: true,

  // Disable image optimization for static export (no Node server)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
