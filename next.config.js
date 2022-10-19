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
    ],
  },
};
