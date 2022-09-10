// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { sku } = req.query;
  const data = await fetch(`https://api.bestbuy.com/v1/products/${sku}/stores.json?postalCode=91730&apiKey=n6AZysP6mrFp3ljQjiVlvYCQ`);
  const jsonData = await data.json();
  if (data.status == 403) {
    res.redirect('/error')
  } else {
  res.json(jsonData)
  console.log(data.status)
  console.log(jsonData)
  }
  
}
