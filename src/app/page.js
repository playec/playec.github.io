import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import styles from './page.module.css'

export default function Home() {
  
  try{

    const filePath = path.join(process.cwd(), 'public', 'recents.json')
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const posts = JSON.parse(fileContent)

    return <div className={styles.container}>
      <div>
        <a href=''><img src='/logo-editor.png'></img></a>
      </div>
      <h2 className={styles.title}>Productos destacados</h2>
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