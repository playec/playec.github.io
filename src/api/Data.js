import fs from 'fs'
import path from 'path'

export default function get(dirname, slug){
    const filePath = path.join(process.cwd(), 'src', dirname, slug + '.json')
    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8')
        return JSON.parse(fileContent)
    }
    return ''
}