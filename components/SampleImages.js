import Image from "next/future/image";
import RedditImage from "./RedditImage";
import sony_alpha_logo from "../public/sony_alpha_logo.svg";

const SampleImages = ({ images, loading }) => {
  console.log(
    images?.map?.((url) => url),
    "!?"
  );
  return (
    <div>
      <div>
        <h1 className="text-center text-2-xl text-orange-500 font-semibold my-4">Sample Images</h1>
      </div>
      <div className="h-[90vh] md:w-[75vw] lg:w-[60wv] mx-auto relative flex md:flex-col overflow-x-auto flex-nowrap gap-4">
        {loading ? (
          <Image src={sony_alpha_logo} className="w-3/4 h-auto" />
        ) : (
          images?.map?.((x) => (
            <div
              className="snap-center relative h-full md:basis-[40vw] basis-[60vw] flex-none"
              key={x.id}
            >
              <RedditImage images={x} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SampleImages;
