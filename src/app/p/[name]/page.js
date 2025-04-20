import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import Script from 'next/script'
import Link from 'next/link'

export function data(slug){
  const filePath = path.join(process.cwd(), 'src', 'items', slug + '.json')
  if(fs.existsSync(filePath)){
    const fileContent = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContent)
  }
  return ''
}

export async function generateMetadata({ params, searchParams }, parent) {
  const {name} = await params
  // fetch data
  const product = data(name)
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
  return {
    title: product.title,
    openGraph: {
      images: [product.thumbnail, ...previousImages],
    },
  }
}

export default async function Post({ params, searchParams}) {

    try {
      
      const {name} = await params
      const product = data(name)
      
      return <div className='container'>
        <div className='content'>
          <div className='row superCard'>
            <div className='col-4'>
              <img src={product.thumbnail}></img>
            </div>
            <div className='col-8'>
              <div className='content'>
                <h2>{product.title}</h2>
                <br></br>
                <span>Código canjeable disponible en diferentes denominaciones</span>
                <ul className='list options'>
                  {product.cards.map(function (card, index) {
                    return <li key={index}>
                      <Link className='btn btn-buy' target='_blank' href='https://api.whatsapp.com/send?phone=593958940184'>
                        <div className='row'>
                          {card.detail && <div><sub>{card.detail}</sub></div>}
                          {!card.detail && <div className='col-10'><span className='left'>USD {card.value} </span></div>}<div className='col-2'><b>${card.price.toFixed(2)}</b></div>
                        </div>
                      </Link>
                    </li>
                  })}
                </ul>
              </div>
            </div>
          </div>
          <br></br>
          <div className='row'>
            <ReactMarkdown>
              {product.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    }catch(e){
      return <div className='container'>
        <div className='content'>
          <h4>Producto no encontrado 404.</h4>
        </div>
      </div>
    }
    
}