import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import SampleImages from "../../components/SampleImages";

const LensSku = ({ lelel }) => {
  const [sampleImages, setSampleImages] = useState();
  const [loading, setLoading] = useState();
  const lens = lelel;

  useEffect(() => {
    console.log(lensName(), "lens name");
    const query = new URLSearchParams();
    query.append("lens", lensName());
    const searchQuery = query.toString();
    const fetchSampleImages = async () => {
      const data = await fetch(`/api/sampleimages?${searchQuery}`);
      const imagePosts = await data.json();
      setSampleImages(imagePosts);
    };
    fetchSampleImages();
  }, [lens]);

  useEffect(() => {
    sampleImages ? setLoading(false) : setLoading(true);
  }, [sampleImages]);

  const lensName = () => {
    return lens?.name
      ?.split(" ")
      .filter(
        (x) =>
          x.includes("mm") ||
          x.includes(".") ||
          x.includes("/") ||
          x.includes("GM") ||
          x.includes("II") ||
          x.includes("PZ") ||
          (/[0-9]/.test(x) && (x.includes("F") || x.length <= 5))
      )
      .join(" ");
  };

  const filterSize = () => {
    const filterDetails = lens?.details.filter(
      (x) => x.name === "Filter Diameter"
    );
    return filterDetails?.[0]?.value;
  };

  const weight = () => {
    const filterDetails = lens?.details.filter(
      (x) => x.name === "Product Weight"
    );
    return filterDetails?.[0]?.value;
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

  const images = sampleImages?.posts
    ?.map?.(
      ({
        id,
        url_overridden_by_dest,
        link_flair_text,
        is_gallery,
        title,
        author,
        permalink,
      }) => ({
        id: id,
        url: url_overridden_by_dest,
        flair: link_flair_text,
        gallery: is_gallery,
        title,
        author,
        permalink,
      })
    )
    ?.filter((obj) => obj.flair === "Photo share" && !obj.gallery);

  console.log(images, "images");

  return (
    <div>
      <div className="p-10 bg-gradient-to-r from-transparent to-orange-500">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="w-1/3 md:w-1/4 lg:w-1/6 relative">
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
      <SampleImages images={images} loading={loading} />
    </div>
  );
};

export default LensSku;

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
  const lelel = lensFetch?.products?.[0];

  return {
    props: { lelel },
    revalidate: 600,
  };
}
