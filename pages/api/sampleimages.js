const snoowrap = require("snoowrap");

export default async function handler(req, res) {
  const { lens } = req.query;

  const r = new snoowrap({
    userAgent: "Sony Lens Sample Image Search",
    clientId: "zKfe42KM2karUtqvajMzKg",
    clientSecret: "ULwTAHKc0aZFIRK1pvTQenVKHpiQCQ",
    refreshToken: "21034283-sHB7UglWFns2ToNi80JjZx_R0t4YKg",
  });

  const posts = await r
    .getSubreddit("sonyalpha")
    .search({ query: lens, sort: "top" });

  res.status(200).json({ posts });
}
