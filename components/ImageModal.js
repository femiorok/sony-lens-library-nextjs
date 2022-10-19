import Image from "next/image";
// width={width} height={height}
const ImageModal = ({ src, toggleModal }) => {
  const width = (window.innerWidth / 100) * 80;
  const height = (window.innerWidth / 100) * 80;
  return (
    <div className="modal w-[99vw] h-[99vh] bg-slate-900/50 flex justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col">
      <div className="relative w-[80vw] h-[80vh] flex flex-col-reverse">
        <Image src={src} layout="fill" objectFit="contain" />
        <button
          className="text-white font-semibold bg-orange-500 px-5 py-3"
          onClick={toggleModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
