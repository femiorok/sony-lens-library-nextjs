import StockModal from "./StockModal";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const LensCard = ({ lensData, zipCode }) => {
  const [showStockModal, setShowStockModal] = useState(null);
  const [inStock, setInStock] = useState();
  const [timeSinceLastFetch, setTimeSinceLastFetch] = useState();

  const { image, name, sku, salePrice } = lensData;

  const openStockModal = () => {
    setShowStockModal(true);
  };

  const shortenedName = () => {
    const filteredName = name.split(" ");
    return filteredName.filter(
      (x) =>
        x.includes("mm") ||
        x.includes(".") ||
        x.includes("FE") ||
        x.includes("/") ||
        x.includes("GM") ||
        x.includes("II") ||
        x.includes("PZ") ||
        (/[0-9]/.test(x) && (x.includes("F") || x.length <= 5))
    );
  };

  return (
    <>
      <div className="px-1 py-2 flex flex-col md:text-base text-sm h- shadow-md">
        <div className="p-1">
          <img src={image} alt="sony Lens" className="md:h-24 h-20 mx-auto" />
        </div>
        <div className="text-center h-full flex flex-col justify-between">
          <div>
            <h1 className="font-extrabold text-base md:text-2xl text-white bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text text-transparent ">
              {shortenedName().join(" ")}
            </h1>
            <h1>{`SKU: ${sku}`}</h1>
            <h1>{`Current Price: $${salePrice}`}</h1>
          </div>
          <div>
            <div className="mb-1 bg-orange-500/25 border border-orange-200 py-1 font-medium hover:bg-orange-300/25">
              <Link
                href={{ pathname: "/lens/[lensSku]", query: { lensSku: sku } }}
              >
                <a>Detailed Lens Info</a>
              </Link>
            </div>
            <div className="bg-orange-500/25 border border-orange-200 hover:bg-orange-300/25 py-1 font-medium">
              <button onClick={openStockModal}>Check Local Stock</button>
            </div>
          </div>
        </div>
      </div>
      {showStockModal && (
        <StockModal
          setShowStockModal={setShowStockModal}
          sku={sku}
          setInStock={setInStock}
          inStock={inStock}
          setTimeSinceLastFetch={setTimeSinceLastFetch}
          timeSinceLastFetch={timeSinceLastFetch}
          zipCode={zipCode}
        />
      )}
    </>
  );
};

export default LensCard;
