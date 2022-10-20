import LensCard from "./LensCard";
import { useEffect, useState } from "react";

const LensList = ({ lensData, query, zipCode }) => {
  const [filteredLenses, setFilteredLenses] = useState();

  const cardArray = lensData.products?.map((lens) => (
    <LensCard key={lens.sku} lensData={lens} zipCode={zipCode} />
  ));

  useEffect(() => {
    setFilteredLenses(
      lensData.products
        ?.filter((lens) => lens.name.toLowerCase().includes(query))
        .map((lens) => (
          <LensCard key={lens.sku} lensData={lens} zipCode={zipCode} />
        ))
    );
  }, [query]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 md:gap-4 mx-auto gap-1 auto-rows-[50vh]">
      {query ? filteredLenses : cardArray}
    </div>
  );
};

export default LensList;
