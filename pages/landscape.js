import React from 'react'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import process from 'process'

const landscape = () => {
  return (
    <div></div>
  )
}

export default landscape

export async function getStaticProps() {
  const directory = process.cwd()
  console.log(directory, '1')
  const files = fs.readFileSync(path.join(directory, 'posts', 'text.md'), 'utf-8')
  console.log(files)
  const {data, content } = matter(files)
  console.log(data, content)

  return {
    props: {
      data,
      content
    }
  }

} 