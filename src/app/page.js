import fs from 'fs'
import path from 'path'

export default function Home() {

  const filePath = path.join(process.cwd(), 'src', 'posts')
  const files = fs.readdirSync(filePath)

  return <div>
    <h1>Bienvenidos a Playec</h1>
    <div>
      <ul>
      {files.map(function(post){
        return <li>{post}</li>
      })}
      </ul>
    </div>
  </div>
}