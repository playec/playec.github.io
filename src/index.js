const fs = require('fs')
const path = require('path')

// Ruta a la carpeta de posts
const postsFolder = path.join(process.cwd(), 'src', 'posts')

// Ruta al archivo posts.json
const outputFile = path.join(process.cwd(), 'src', 'index', 'recents.json')

// Leer todos los archivos JSON en la carpeta de posts
const postFiles = fs.readdirSync(postsFolder).filter((file) => file.endsWith('.json'))

// Leer y combinar los posts
let postsList = []

postFiles.map((file) => {

  if(index <= 12){
    const filePath = path.join(postsFolder, file)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    postsList.push(JSON.parse(fileContent))
  }
  
})

// Escribir el archivo posts.json
fs.writeFileSync(outputFile, JSON.stringify(postsList, null, 2))