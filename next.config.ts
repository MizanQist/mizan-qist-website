import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // PLACEHOLDER IMAGES: Unsplash is allowed so the template renders out of the box.
    // When you swap to your own images in /public, you can remove this block.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async redirects() {
    return [
      // Printed on the 47 Lake Chad site hoarding (three QR codes). Temporary on purpose:
      // the page can move without reprinting the fence. Never remove this path.
      { source: "/lakechad", destination: "https://mizanqist.github.io/47-lake-chad/", permanent: false },
    ];
  },
};

export default nextConfig;
