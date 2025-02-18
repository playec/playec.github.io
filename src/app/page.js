import custom from './page.module.css'
import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'

export default function Home() {
  
  try{

    const filePath = path.join(process.cwd(), 'public', 'recents.json')
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const posts = JSON.parse(fileContent)

    return <div className='container'>
      <div className='content'>
        <h2 className={custom.title}>Productos destacados</h2>
        <div className='row'>
        {posts.map(function(post, index){
            return <div className='col-4'>
              <div className='card' key={post.slug}>
                <div className='thumbnail'>
                  <a href={post.slug}><img src={post.thumbnail}></img></a>
                </div>
                <div className='button'>
                  <a className='btn btn-buy' href={post.slug}>Mirar precios</a>
                </div>
              </div>
            </div>
        })}
        </div>
      </div>
    </div>

  }catch(e){
    return <div>
      <p>No se ha encontrado productos disponibles.</p>
    </div>
  }
  
  
}