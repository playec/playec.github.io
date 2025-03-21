import custom from './page.module.css'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Image from 'next/image'

const chunkArray = (array, size) => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
    array.slice(index * size, index * size + size)
  )
}

export default function Home() {
  
  try{
    const filePath = path.join(process.cwd(), 'src', 'index', 'recents.json')
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const list = JSON.parse(fileContent)
    const recents = chunkArray(list, 3)

    return <div className='container'>
      <div className='content'>
        <h2 className={custom.title}>Productos destacados</h2>
        {recents.map((products, groupIndex) => (
          <div className='row' key={groupIndex}>
            {products.map((product, index) => (
            <div className='col-4'>
              <div className='card' key={index}>
                <div className='thumbnail'>
                  <Link href={product.slug}><Image src={product.thumbnail} width={200} height={300} alt='Thumbnail' /></Link>
                </div>
                <div className='button'>
                  <a className='btn btn-buy' href={product.slug}>Mirar precios</a>
                </div>
              </div>
            </div>
            ))} 
          </div>
        ))}
      </div>
    </div>

  }catch(e){
    return <div className='container'>
      <div className='content'>
        <p>No se ha encontrado productos disponibles.</p>
      </div>
    </div>
  }
  
  
}