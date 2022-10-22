/** @type {import('next').NextConfig} */
module.exports = {
  experimental: { images: { allowFutureImage: true } },
  images: {
    domains: [
      "preview.redd.it",
      "external-preview.redd.it",
      "i.redd.it",
      "i.imgur.com",
      "www.reddit.com",
      "www.flickr.com",
      "imgur.com",
      "staticflickr.com",
      "live.staticflickr.com",
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
