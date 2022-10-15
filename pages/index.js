import Head from "next/head";
import Searchbar from "../components/Searchbar";
import Hero from "../components/Hero";
import { useState } from "react";
import LensList from "../components/LensList";

export default function Home({ lensData }) {
  const [query, setQuery] = useState();
  const [zipCode, setZipCode] = useState();

  const stockZipCode = (e) => {
    setZipCode(e.target.value);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Searchbar query={query} setQuery={setQuery} />
      <Hero />
      <div className="flex justify-center"></div>
      <div className="my-2 mx-auto w-min border">
        <input
          onChange={stockZipCode}
          type="text"
          placeholder="Enter your zip code to check stock"
          className="w-80 p-1 focus:outline-none text-center"
        />
      </div>
      <div
        className="flex flex-wrap mx-auto justify-between gap-8 w-[90vw] my-10 md:my-40"
        id="content"
      >
        <LensList lensData={lensData} query={query} zipCode={zipCode} />
      </div>
      <footer></footer>
    </div>
  );
}

export async function getStaticProps() {
  const _apiUrl =
    "https://api.bestbuy.com/v1/products((search=lens)&manufacturer=Sony&categoryPath.id=abcat0410018)?apiKey=n6AZysP6mrFp3ljQjiVlvYCQ&sort=modelNumber.asc&show=image,longDescription,modelNumber,name,regularPrice,salePrice,sku&pageSize=100&format=json";
  const res = await fetch(_apiUrl);
  const lensData = await res.json();

  return {
    props: {
      lensData,
    },
  };
}
