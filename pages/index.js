import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LensCard from './components/LensCard'
import Searchbar from './components/Searchbar'
import Hero from './Hero'
import StockModal from './components/StockModal'
import ModalBackdrop from './components/ModalBackdrop'
import { useState } from 'react'
import LensList from './components/LensList'

export default function Home({ lensData }) {


  const [showStockModal, setShowStockModal] = useState(null);
  const [lensSku, setLensSku] = useState(null);
  const [lensStock, setLensStock] = useState()
  const [query, setQuery] = useState()

  const toggleStockModal = () => setShowStockModal((prevState) => !prevState);
  const searchThisLens = (sku) => setLensSku(sku);

  return (
    
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className='flex justify-center'>
      <Searchbar query={query} setQuery={setQuery}/>
      </div>
      
      <div className='flex flex-wrap mx-auto justify-between gap-8 w-10/12 my-40' id="content">
        <LensList lensData={lensData} toggleStockModal={toggleStockModal} showStockModal={showStockModal} lensStock={lensStock} searchThisLens={searchThisLens} query={query}/> 
        {showStockModal ? <StockModal toggleStockModal={toggleStockModal} lensSku={lensSku} showStockModal={showStockModal} lensStock={lensStock} setLensStock={setLensStock} /> : ''}
      </div>
      <footer >
      </footer>
      
      {/* {showStockModal ? <ModalBackdrop toggleStockModal={toggleStockModal} style={{zIndex: '1'}} /> : ''} */}
    </div>
  )
}

export async function getStaticProps() {
  const _apiUrl = "https://api.bestbuy.com/v1/products((search=lens)&manufacturer=Sony&categoryPath.id=abcat0410018)?apiKey=n6AZysP6mrFp3ljQjiVlvYCQ&sort=modelNumber.asc&show=image,longDescription,modelNumber,name,regularPrice,salePrice,sku&pageSize=100&format=json"
  const res = await fetch(_apiUrl)
  const lensData = await res.json()

  return {
    props: {
      lensData,
    },
  }
}