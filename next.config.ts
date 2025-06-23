
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // reactStrictMode: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: "/rss.xml",
  //       destination: "/feed/rss.xml",
  //     },
  //     {
  //       source: "/atom.xml",
  //       destination: "/feed/atom.xml",
  //     },
  //     {
  //       source: "/feed.json",
  //       destination: "/feed/feed.json",
  //     },
  //     {
  //       source: "/rss",
  //       destination: "/feed/rss.xml",
  //     },
  //     {
  //       source: "/feed",
  //       destination: "/feed/rss.xml",
  //     },
  //     {
  //       source: "/atom",
  //       destination: "/feed/atom.xml",
  //     },
  //     {
  //       source: "/json",
  //       destination: "/feed/feed.json",
  //     },
  //   ];
  // },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // basePath: '',
  // assetPrefix: '',
};

export default nextConfig;
