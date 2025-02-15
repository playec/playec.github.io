import fs from 'fs'
import path from 'path'

export default function Home() {

  const filePath = path.join(process.cwd(), 'public', 'posts.json')
  let posts = []
  try{

    const fileContent = fs.readFileSync(filePath, 'utf8')
    posts = JSON.parse(fileContent)

  }catch(e){
    posts = []
  }
  
  return <div>
    <h1>Bienvenidos a Playec</h1>
    <div>
      <ul>
      {posts.map(function(post){
        return <li>
          <h3>{post.title}</h3>
          <br></br>
          <p>{post.body}</p>
        </li>
      })}
      </ul>
    </div>
  </div>
}