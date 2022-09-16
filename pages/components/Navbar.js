import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <ul className='flex justify-center sticky text-orange-500 font-extrabold tracking-wider'>
        <li><Link href="/">Home</Link></li>
    </ul>
  )
}

export default Navbar