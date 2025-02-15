const fs = require('fs')
const path = require('path')

// Ruta a la carpeta de posts
const postsFolder = path.join(process.cwd(), 'src', 'posts')

// Ruta al archivo posts_lists.json
const outputFile = path.join(process.cwd(), 'src', 'posts_lists.json')

// Leer todos los archivos JSON en la carpeta de posts
const postFiles = fs.readdirSync(postsFolder).filter((file) => file.endsWith('.json'))

// Leer y combinar los posts
const postsList = postFiles.map((file) => {
  const filePath = path.join(postsFolder, file)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileContent)
})

// Escribir el archivo posts_lists.json
fs.writeFileSync(outputFile, JSON.stringify(postsList, null, 2))

console.log('posts_lists.json generado correctamente')