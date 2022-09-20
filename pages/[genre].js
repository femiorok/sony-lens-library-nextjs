import React from 'react'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import process from 'process'
import md from 'markdown-it'
import LensCardGenre from '../components/LensCardGenre'

const genre = ({data, content, feLensData, eLensData}) => {
console.log(feLensData, eLensData, "lenses")
  return (
    <div className='mx-auto w-4/5'>
      <div className='prose text-center mt-10 mx-auto'>
        <img src={data.cover_image} />
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        <h1 className='text-center'>Recommended lenses:</h1>
      </div>
      <div className='flex gap-4 justify-start md:justify-center overflow-x-scroll mt-8 md:flex-wrap md:w-3/4 md:mx-auto'>
      {feLensData.products ? feLensData.products.map(lens => <LensCardGenre fullFrame={true} name={lens.name} image={lens.image} 
      salePrice={lens.salePrice} sku={lens.sku} key={lens.sku}/>) : ''}
      {eLensData.products ? eLensData.products.map(lens => <LensCardGenre fullFrame={false} name={lens.name} image={lens.image} 
      salePrice={lens.salePrice} sku={lens.sku} key={lens.sku}/>) : ''}
      </div>
    </div>
  )
}

export default genre

export async function getStaticProps({params}) {
  const directory = process.cwd()
  const files = fs.readFileSync(path.join(directory, 'posts', params.genre + '.md'), 'utf-8')
  console.log(files, 'titties')
  const {data, content } = matter(files)
  console.log(data.fe_lenses, "lil lenses")
  const fe_lensList = data.fe_lenses.map(lens => lens.toString()).join()
  const eLensList = data.e_lenses.map(lens => lens.toString()).join()
  console.log(fe_lensList, "lens strings")
  const getFeLensData = await fetch(`https://api.bestbuy.com/v1/products(sku in (${fe_lensList}))?apiKey=n6AZysP6mrFp3ljQjiVlvYCQ&sort=name.asc&show=name,salePrice,shortDescription,sku,image&format=json`)
  const feLensData = await getFeLensData.json()
  const getELensData = await fetch(`https://api.bestbuy.com/v1/products(sku in (${eLensList}))?apiKey=n6AZysP6mrFp3ljQjiVlvYCQ&sort=name.asc&show=name,salePrice,shortDescription,sku,image&format=json`)
  const eLensData = await getELensData.json()

  return {
    props: {
      data,
      content,
      feLensData,
      eLensData
    },
    revalidate: 6000
  }

} 

export async function getStaticPaths() {
  const directory = process.cwd()
  console.log(directory, '1')
  const files = fs.readdirSync(path.join('posts'), 'utf-8')

  const paths = files.map(filename => ({
    params: {
      genre: filename.replace('.md', '').toString()
    }
  }))

  console.log(paths, "dick")
  return {
    paths,
    fallback: false,
  }

}

