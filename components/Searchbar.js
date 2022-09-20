import React from 'react'
import search from '../public/search.svg'
import Image from 'next/image'


const Searchbar = ({ query, setQuery }) => {


const filterSearch = (e) => {
    const searchTerms = e.target.value
    setQuery(searchTerms)
}
  return (
    <div className='flex justify-center mt-10 border-2 focus-within:border-4 px-1 border-orange-500/50 animate-pulse md:focus-within:scale-110 focus-within:rounded-xl focus-within:shadow-2xl focus-within:shadow-orange-300  focus-within:animate-none transition-all duration-300 focus-within:border-orange-500'>
    <Image src={search} width={20} height={20}/>
    <input onChange={filterSearch} type="text" placeholder='Search for a lens by name or SKU' className='w-80 m-1 p-1 focus:outline-none'/>
    </div>
  )
}

export default Searchbar