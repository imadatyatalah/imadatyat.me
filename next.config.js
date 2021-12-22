const { withContentlayer } = require("next-contentlayer");

// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withContentlayer()({
  reactStrictMode: true,
  swcMinify: true,
  redirects: require("./next-redirects"),
});
