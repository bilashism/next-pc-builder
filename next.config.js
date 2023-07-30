/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "gravatar.com",
      "images.unsplash.com",
      "lh3.googleusercontent.com"
    ]
  }
};

module.exports = nextConfig
