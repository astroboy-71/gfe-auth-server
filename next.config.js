/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require("next-intl/plugin")

const withNextIntl = createNextIntlPlugin("./i18n.ts")

const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
}

module.exports = withNextIntl(nextConfig)
