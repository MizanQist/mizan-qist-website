import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // PLACEHOLDER IMAGES: Unsplash is allowed so the template renders out of the box.
    // When you swap to your own images in /public, you can remove this block.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
