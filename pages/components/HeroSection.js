import React from 'react'
import Image from 'next/image'
import landscape from '../../public/landscape.jpg'

const HeroSection = ({ route }) => {
  return (
    <div>
        <div className="hero py-10 bg-gradient-to-r from-transparent to-orange-500">
        <div className="hero-content flex justify-around w-4/5 mx-auto">
        <div className="" >
        <Image src={"insert"} width={300} height={300}/>
        </div>
        <div className="flex flex-col w-2/5">
        <h1 className="text-5xl font-bold text-center">{route}</h1>
        <button className="h-20 rounded-lg border-2 shadow-md shadow-orange-800 border-orange-500 font-semibold tracking-wider">
        <Link href={"#content"}>Get Started</Link>
        </button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default HeroSection