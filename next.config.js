/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    domains: ["ui-avatars.com"],
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
