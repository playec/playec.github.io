import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import Script from 'next/script'

export function data(slug){
  const filePath = path.join(process.cwd(), 'src', 'posts', slug + '.json')
  const fileContent = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileContent)
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
          <h2>{product.title}</h2>
          <div className='row superCard'>
            <div className='col-4'>
              <img src={product.thumbnail}></img>
            </div>
            <div className='col-8'>
              <div className='content'>
              {product.cards.map(function(card, index){
                return <ul className='list options'>
                  <li>
                    <a className='btn btn-buy' target='_blank' href='https://api.whatsapp.com/send?phone=593958940184'>
                      <ul className='list'>
                        {card.detail && <li><sub>{card.detail}</sub></li>}
                        <li>{!card.detail && <b>USD {card.value} - </b>}<span>${card.price}</span></li>
                      </ul>
                    </a>
                  </li>
                </ul>
              })}
              </div>
            </div>
          </div>
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