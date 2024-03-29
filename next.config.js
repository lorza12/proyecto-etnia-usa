const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "http",
    //     hostname: "127.0.0.1",
    //     port: "1337",
    //     pathname: "/uploads/**",
    //   },
    // ],
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
