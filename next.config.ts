import type { NextConfig } from "next";

const nextConfig = {
  output: "export", // Enable static export
  distDir: "out", // Default output directory
  trailingSlash: true, // Ensure proper file serving
  images: { unoptimized: true }, // Disable Next.js image optimization for static hosting
  basePath: "/cpu-scheduling-algorithms",
  assetPrefix: "/cpu-scheduling-algorithms/",
};

module.exports = nextConfig;
