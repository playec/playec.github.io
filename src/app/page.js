import fs from 'fs'
import path from 'path'

export default function Home() {
  
  try{

    const filePath = path.join(process.cwd(), 'public', 'recents.json')
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const posts = JSON.parse(fileContent)

    return <div>
      <h1>Productos destacados</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/post/${post.slug}`}>
              <h2>{post.title}</h2>
              <p>Fecha: {post.date}</p>
            </a>
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