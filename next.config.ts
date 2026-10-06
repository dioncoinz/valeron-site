import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/shutdown-suite",
        destination: "/solutions/mining-shutdown-management",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
