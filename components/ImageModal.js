import Image from "next/image";
// width={width} height={height}
const ImageModal = ({ src, toggleModal }) => {
  const width = (window.innerWidth / 100) * 80;
  const height = (window.innerWidth / 100) * 80;
  return (
    <div className="modal w-[99vw] h-[99vh] bg-slate-900/50 flex flex-col justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col">
      <div className="relative w-[80vw] h-[80vh]">
        <Image src={src} layout="fill" objectFit="contain" />
      </div>
      <button
          className="text-white font-semibold bg-orange-500 px-5 py-2 max-w-md"
          onClick={toggleModal}
        >
          Close
        </button>
    </div>
  );
};

export default ImageModal;
