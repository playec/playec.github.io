import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactMarkdown from 'react-markdown'

export default async function Post({ params, searchParams}) {

    try {
      
      const slug = (await params).name
      const filePath = path.join(process.cwd(), 'src', 'posts', slug + '.json')

      console.log(filePath)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const post = JSON.parse(fileContent)
      
      return <div className='container'>
        <div className='content'>
          <h2>{post.title}</h2>
          <div className='row'>
        <div className='col-4'>
          <img src={post.thumbnail}></img>
        </div>
        <div className='row'>
        <ReactMarkdown>
          {post.content}
        </ReactMarkdown>
        </div>
        </div>
        </div>
      </div>
    }catch(e){
      return
        <div>
          <p>Producto no encontrado 404.</p>
        </div>
    }
    
}