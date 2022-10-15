import StockModal from "./StockModal";
import { useState } from "react";
import Link from "next/link";

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
        x.includes("/")
    );
  };

  return (
    <>
      <div className="border-2 border-orange-200 bg-orange-100 rounded-xl px-1 py-5 flex flex-col">
        <div className="p-1">
          <img src={image} alt="sony Lens" className="md:h-28 h-20 mx-auto" />
        </div>
        <div className="text-center h-full flex flex-col justify-around">
          <h1 className="my-1 text-lg font-semibold">
            {shortenedName().join(" ")}
          </h1>
          <h1>{`SKU: ${sku}`}</h1>
          <h1>{`Current Price: $${salePrice}`}</h1>
          <div className="border border-orange-200 py-2">
            <Link
              href={{ pathname: "/lens/[lensSku]", query: { lensSku: sku } }}
            >
              <a>Detailed Lens Info</a>
            </Link>
          </div>
          <div className="border border-orange-200 py-2">
            <button onClick={openStockModal}>Check Local Stock!</button>
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
