import type { NextConfig } from "next";
import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";

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
  transpilePackages: [
    "@prisma/client",
    "@auth/prisma-adapter",
    "@babel/runtime",
  ],
  webpack(config) {
    config.plugins.push(new PrismaPlugin());
    return config;
  },
  /* config options here */
};

export default nextConfig;
