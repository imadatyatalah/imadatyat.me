const { withContentlayer } = require("next-contentlayer");
const withPWA = require("next-pwa");
const withPlugins = require("next-compose-plugins");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: require("./next-redirects"),
};

const PWAConfig = {
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
};

module.exports = withPlugins(
  [withContentlayer(), withPWA(PWAConfig)],
  nextConfig
);
