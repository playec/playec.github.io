import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'

export default function Home() {
  
  try{

    const filePath = path.join(process.cwd(), 'public', 'recents.json')
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const posts = JSON.parse(fileContent)

    return <div>
      <Head>
        <link rel="stylesheet" href="/css/base.css" />
        <link rel="stylesheet" href="/css/suctom.css" />
      </Head>
      <h1>Productos destacados</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <div>
              <h2>{post.title}</h2>
              <div><img src={post.thumbnail}></img></div>
              <div>
                <a href={post.slug}>Comprar producto</a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>

  }catch(e){
    return <div>
      <p>No se ha encontrado productos disponibles.</p>
    </div>
  }
  
  
}