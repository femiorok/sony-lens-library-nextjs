import React from "react";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Categories = ({ data }) => {
  console.log(data, "data!!!");
  const skuList = data?.map((x) => [
    x?.attributes.Sku1,
    x?.attributes.Sku2,
    x?.attributes.Sku3,
    x?.attributes.Sku4,
    x?.attributes.Sku5,
  ]);

  useEffect(() => {
    first;

    return () => {
      second;
    };
  }, []);

  return <div>categories</div>;
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:1337/api/categories`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Categories;
