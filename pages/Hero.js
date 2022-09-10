import Image from "next/image";
import sony_alpha_logo from "../public/sony_alpha_logo.svg"
import Link from "next/link";

function Hero() {
  return (
    <div>
        <div className="hero py-10 bg-gradient-to-r from-transparent to-orange-500">
        <div className="hero-content flex justify-around w-4/5 mx-auto">
        <div className="" >
        <Image src={sony_alpha_logo} width={300} height={300}/>
        </div>
        <div className="flex flex-col w-2/5">
        <h1 className="text-5xl font-bold text-center">Sony Lens Library</h1>
        <p className="py-6 text-center">A tool for Best Buy and Sony employees to access relevant Sony product information. View all lenses we have available, and see if we have them in stock. More features on the way!</p>
        <button className="h-20 rounded-lg border-2 shadow-md shadow-orange-800 border-orange-500 font-semibold tracking-wider">
        <Link href={"#content"}>Get Started</Link>
        </button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Hero