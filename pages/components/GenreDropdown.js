import Link from "next/link";
import { Menu } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'

const GenreDropdown = () => {
  return (
    <Menu>
      <Menu.Button className="h-20 rounded-lg border-2 shadow-md shadow-orange-800 border-orange-500 font-semibold tracking-wider w-full">Pick a Genre</Menu.Button>
      <Menu.Items className="flex flex-col mt-2 gap-2">
        <Menu.Item>
            <div className="hover:text-orange-100 bg-orange-900/25">
            <Link href="/landscape">Landscape</Link>
            </div>
        </Menu.Item>
        <Menu.Item>
            <div className="hover:text-white bg-orange-900/25">
            <Link href="/portraits">Portraits</Link>
            </div>
        </Menu.Item>
        <Menu.Item>
            <div className="hover:text-white bg-orange-900/25">
            <Link href="/sports">Sports</Link>
            </div>
        </Menu.Item>
        <Menu.Item>
            <div className="hover:text-orange-100 bg-orange-900/25">
            <Link href="/content-creation">Content Creation</Link>
            </div>
        </Menu.Item>
        <Menu.Item>
            <div className="hover:text-orange-100 bg-orange-900/25">
            <Link href="/macro-product">Macro/Product</Link>
            </div>
        </Menu.Item>
        <Menu.Item>
            <div className="hover:text-orange-100 bg-orange-900/25">
            <Link href="/travel">Travel</Link>
            </div>
        </Menu.Item>
        <Menu.Item>
            <div className="hover:text-orange-100 bg-orange-900/25">
            <Link href="/real-estate-architecture">Real Estate</Link>
            </div>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default GenreDropdown