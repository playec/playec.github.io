import fs from 'fs'
import path from 'path'

export default function Home() {

  const filePath = path.join(process.cwd(), 'src', 'posts', 'entrances.json')
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const posts = JSON.parse(fileContent)

  return <div>
    <h1>Bienvenidos a Playec</h1>
    <div>
      <ul>
      {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/post/${post.slug}`}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <p>Fecha: {post.date}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
}