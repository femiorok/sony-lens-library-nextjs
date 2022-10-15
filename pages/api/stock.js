// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { sku, zip } = req.query;
  const data = await fetch(
    `https://api.bestbuy.com/v1/products/${sku}/stores.json?postalCode=${zip}&apiKey=n6AZysP6mrFp3ljQjiVlvYCQ`
  );
  console.log(data.status, "fetch data");
  const jsonData = await data.json();
  if (data.status > 199 && data.status < 400) {
    res.json(jsonData);
  } else {
    res.status(500).json({
      error: "There was an issue checking stock. Please refresh and try again.",
    });
  }
}
