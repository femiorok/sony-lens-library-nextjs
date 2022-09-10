import React from 'react'

const tests = ({data}) => {
  console.log(data)
  return (
    <div>tests</div>
  )
}

export default tests


export async function getStaticProps(context) {
  const getGenre = await fetch('localhost:3000/api/genres')
  const data = await getGenre.json()

  return {
    props: {data}, 
  }
}