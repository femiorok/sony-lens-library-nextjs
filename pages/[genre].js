import { useRouter } from 'next/router'

const genre = ({getGenre}) => {
  console.log(getGenre)
  return (
    <div></div>
  )
}

export default genre

export async function getStaticProps(context) {
  const getGenre = await fetch('http://localhost:1337/api/genres')
  const genreList = await getGenre.data
  return {
    props: {genreList}, 
  }
}

export async function getStaticPaths() {
  const getGenre = await fetch('http://localhost:1337/api/genres')
  const femi1 = await getGenre.json()
  console.log(femi1.data[1].attributes.Title, "FEMIlol")
  const paths = femi1.data.map(genreItem => console.log(genreItem.attributes.Title, "mapz") 
      )
    
    console.log(femi1.data.map(genreItem =>  
      ({ params: { genre: genreItem.attributes.Title }})
    ))
  return {
    paths: femi1.data.map(genreItem =>  
      ({ params: { genre: genreItem.attributes.Title }})
    )
    ,
    fallback: false,
  };
}

// { params: { genre: genreItem.attributes.Title } }