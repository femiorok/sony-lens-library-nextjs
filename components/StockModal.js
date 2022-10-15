import { useEffect, useState } from "react";
import Image from "next/image";
import sony_alpha_logo from "../public/sony_alpha_logo.svg";
const StockModal = ({
  setShowStockModal,
  sku,
  setInStock,
  inStock,
  setTimeSinceLastFetch,
  timeSinceLastFetch,
  zipCode,
}) => {
  const [loading, setLoading] = useState();
  const [fetchError, setFetchError] = useState();

  const _apiUrl = `/api/stock?sku=${sku}&zip=${zipCode}`;
  const toggleStockModal = () => setShowStockModal((prevState) => !prevState);

  const currentTime = Date.now();
  const timeElapsed = currentTime - timeSinceLastFetch;
  const zipCodeCheck = () => {
    if (typeof zipCode === "string" && zipCode.toString().length === 5) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    console.log(zipCodeCheck(), "zip code");
    let ignore = false;
    const checkStock = async () => {
      console.log(timeElapsed, currentTime, timeSinceLastFetch, "time");
      if (
        !ignore &&
        (timeElapsed == false ||
          timeElapsed > 300000 ||
          timeSinceLastFetch === undefined)
      ) {
        setTimeSinceLastFetch(currentTime);
        setLoading(true);
        const res = await fetch(_apiUrl);
        if (res.status > 199 && res.status < 400) {
          const storeStock = await res.json();
          setInStock(storeStock);
          setLoading(false);
        } else {
          inStock === null && setFetchError(true);
        }
      }
    };
    zipCodeCheck ? checkStock() : "";

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="w-[75vw] h-[30rem] top-1/2 -translate-y-1/2 inset-x-auto fixed left-1/2 -translate-x-1/2 text-xl bg-orange-600/50 shadow-2xl shadow-orange-900 flex flex-col p-5 justify-center items-center backdrop-blur-md text-center">
      {zipCodeCheck() ? (
        <div>
          <h1 className="underline text-2xl tracking-wide">
            {" "}
            Currently this lens is in stock at:{" "}
          </h1>
          {inStock &&
            !fetchError &&
            inStock.stores?.map((store) => (
              <h1
                key={store.storeID}
              >{`Store ${store.storeID} in ${store.name}`}</h1>
            ))}
          {inStock && !fetchError && inStock.stores?.length == 0 && (
            <p>This lens is out of stock near you.</p>
          )}
          <h1 className="w-4/5 text-center">
            {fetchError &&
              `There was an error checking stock on this lens. Refresh the page and try again.`}
          </h1>
          {loading ? (
            <div className="flex flex-col items-center justify-center w-full animate-pulse relative my-3">
              <Image
                src={sony_alpha_logo}
                width={200}
                height={200}
                alt={"logo"}
              />
              <h1 className="text-lg tracking-widest">LOADING....</h1>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        "Double check your Zip-Code before checking stock"
      )}
      <button
        onClick={toggleStockModal}
        className="py-2 px-4 m-4 border-2 border-orange-600/100"
      >
        Close
      </button>
      <h1 className="text-center italic">
        NOTE: Stores will only show as in stock if their inventory is greater
        than one.
      </h1>
    </div>
  );
};

export default StockModal;
