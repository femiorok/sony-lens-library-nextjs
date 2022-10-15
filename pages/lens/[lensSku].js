import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";

const lensSku = ({ lelel }) => {
  const [lens, setLens] = useState();

  useEffect(() => {
    setLens(lelel);
    console.log(lens, "details");
  }, [lelel]);

  const filterSize = () => {
    const filterDetails = lens?.details.filter(
      (x) => x.name === "Filter Diameter"
    );
    return filterDetails?.[0].value;
  };

  const weight = () => {
    const filterDetails = lens?.details.filter(
      (x) => x.name === "Product Weight"
    );
    return filterDetails?.[0].value;
  };

  const fullFrameCheck = () => {
    if (
      lens?.name?.includes("FE") ||
      lens?.longDescription?.includes("frame") ||
      lens?.name?.includes("Frame")
    ) {
      return true;
    } else {
      return false;
    }
  };

  console.log(filterSize(), "filter");
  return (
    <div>
      <div className="p-10 bg-gradient-to-r from-transparent to-orange-500">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="w-1/3 relative">
            <img src={lens && lens.image} className="object-contain" />
          </div>
          <div>
            <h1 className="text-xl font-bold">{lens && lens.name}</h1>
          </div>
          <div className="grid grid-cols-3 text-center font-semibold">
            <p>{`$${lens?.salePrice}`}</p>
            <p>{lens?.modelNumber}</p>
            <p>{fullFrameCheck() ? "Full Frame" : "Crop Sensor"}</p>
          </div>
          <div className="">
            <p>Filter Size: {filterSize()} </p>
            <p>Weight: {weight()}</p>
            <p></p>
          </div>
        </div>
      </div>
      <div>
        <h1>Sample Images</h1>
      </div>
    </div>
  );
};

export default lensSku;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { lensSku: sku } = params;
  const fetchUrl = `https://api.bestbuy.com/v1/products(sku=${sku})?apiKey=n6AZysP6mrFp3ljQjiVlvYCQ&sort=description.asc&show=description,details.name,image,longDescription,modelNumber,shortDescription,salePrice,name,features.feature,details.value,mobileUrl,thumbnailImage&format=json`;
  const data = await fetch(fetchUrl);
  const lensFetch = await data.json();
  const lelel = lensFetch?.products[0];

  return {
    props: { lelel },
    revalidate: 600,
  };
}
