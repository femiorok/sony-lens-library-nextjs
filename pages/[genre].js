import React from 'react'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import process from 'process'
import md from 'markdown-it'

const genre = ({data, content}) => {
  return (
    <div className='prose mx-auto'>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div> 
  )
}

export default genre

export async function getStaticProps({params}) {
  const directory = process.cwd()
  const files = fs.readFileSync(path.join(directory, 'posts', params.genre + '.md'), 'utf-8')
  console.log(files, 'titties')
  const {data, content } = matter(files)
  console.log(matter(files))

  return {
    props: {
      data,
      content
    }
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

