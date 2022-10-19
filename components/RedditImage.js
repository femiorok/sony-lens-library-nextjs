import Image from "next/image";
import ImageModal from "./ImageModal";
import { useState } from "react";

const RedditImage = ({ images }) => {
  const [modalView, setModalView] = useState(false);

  const toggleModal = () => {
    return setModalView(!modalView);
  };
  const widthFunction = () => {
    const _60vw = (window.innerWidth / 100) * 60;
    const _40vw = (window.innerWidth / 100) * 40;
    if (window.innerWidth >= _60vw) {
      return _60vw;
    } else {
      return _40vw;
    }
  };

  const heightFunction = () => {
    return window.innerHeight;
  };
  const shimmer = () => `
    <svg width="${widthFunction()}" height="${heightFunction()}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${widthFunction()}" height="${heightFunction()}" fill="#333" />
      <rect id="r" width="${widthFunction()}" height="${heightFunction()}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${widthFunction()}" to="${widthFunction()}" dur="1s" repeatCount="indefinite"  />
    </svg>`;

  const redditSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      className="fill-white w-5 h-5 md:w-8 md:h-8"
    >
      <path d="M14.238 15.348c.085.084.085.221 0 .306-.465.462-1.194.687-2.231.687l-.008-.002-.008.002c-1.036 0-1.766-.225-2.231-.688-.085-.084-.085-.221 0-.305.084-.084.222-.084.307 0 .379.377 1.008.561 1.924.561l.008.002.008-.002c.915 0 1.544-.184 1.924-.561.085-.084.223-.084.307 0zm-3.44-2.418c0-.507-.414-.919-.922-.919-.509 0-.923.412-.923.919 0 .506.414.918.923.918.508.001.922-.411.922-.918zm13.202-.93c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-.129c0-.851-.695-1.543-1.55-1.543-.417 0-.795.167-1.074.435-1.056-.695-2.485-1.137-4.066-1.194l.865-2.724 2.343.549-.003.034c0 .696.569 1.262 1.268 1.262.699 0 1.267-.566 1.267-1.262s-.568-1.262-1.267-1.262c-.537 0-.994.335-1.179.804l-2.525-.592c-.11-.027-.223.037-.257.145l-.965 3.038c-1.656.02-3.155.466-4.258 1.181-.277-.255-.644-.415-1.05-.415-.854.001-1.549.693-1.549 1.544 0 .566.311 1.056.768 1.325-.03.164-.05.331-.05.5 0 2.281 2.805 4.137 6.253 4.137s6.253-1.856 6.253-4.137c0-.16-.017-.317-.044-.472.486-.261.82-.766.82-1.353zm-4.872.141c-.509 0-.922.412-.922.919 0 .506.414.918.922.918s.922-.412.922-.918c0-.507-.413-.919-.922-.919z" />
    </svg>
  );

  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);
  return (
    <>
      <div>
        <div className="md:text-2xl text-sm flex justify-between w-full absolute bottom-0 z-10 bg-slate-900/50 text-white p-1">
          <a
            target="_blank"
            href={`https://www.reddit.com/${images.permalink}`}
            className="flex gap-1 items-center"
          >
            {redditSvg} By {images.author}
          </a>
          <button onClick={toggleModal}>View Full Image</button>
        </div>
      </div>
      <Image
        src={images.url}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer())}`}
      />
      {modalView && <ImageModal src={images.url} toggleModal={toggleModal} />}
    </>
  );
};

export default RedditImage;
