import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
  transpilePackages: ["@prisma/client", "@auth/prisma-adapter", "@babel/runtime"],
  /* config options here */
};

export default nextConfig;
