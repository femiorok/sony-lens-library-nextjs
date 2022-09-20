import Image from "next/image";
import sony_alpha_logo from "../public/sony_alpha_logo.svg"
import Link from "next/link";
import GenreDropdown from "./GenreDropdown";


function Hero() {
  return (
    <div>
        <div className="hero py-10 bg-gradient-to-r from-transparent to-orange-500">
        <div className="hero-content flex flex-col md:flex-row md:justify-around items-center mx-auto">
        <div className="hidden auto md:inline" >
        <Image src={sony_alpha_logo} width={300} height={300}/>
        </div>
        <div className="flex flex-col w-1/2">
        <h1 className="text-4xl font-bold text-center">Sony Lens Library</h1>
        <p className="py-6 text-md text-center text-sm font-medium">A tool for Best Buy and Sony employees to access relevant Sony product information. View all lenses we have available, and see if we have them in stock. More features on the way!</p>
        <button className="h-20 rounded-lg border-2 shadow-md shadow-orange-800 border-orange-500 font-semibold tracking-wider">
        <Link href={"#content"}>View All Lenses</Link>
        </button>
        <div className="mt-2 flex flex-col items-center text-center">
        <GenreDropdown />
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Hero