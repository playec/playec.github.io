const fs = require('fs')
const path = require('path')
const postsFolder = path.join(process.cwd(), 'src', 'items')
const outputFile = path.join(process.cwd(), 'src', 'index', 'recents.json')

try{
    
    const postFiles = fs.readdirSync(postsFolder).filter(file => file.endsWith('.json'))

    let lasted = []
    
    postFiles.map((file, index) => {

        if (index <= 9) {
            const filePath = path.join(postsFolder, file)
            const fileContent = fs.readFileSync(filePath, 'utf8')
            lasted.push(JSON.parse(fileContent))
        }
    })

    fs.writeFileSync(outputFile, JSON.stringify(lasted, null, 2))

}catch(e){

    fs.writeFileSync(outputFile, JSON.stringify([], null, 2))
    console.error(e);
    
}