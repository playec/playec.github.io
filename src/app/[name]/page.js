import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactMarkdown from 'react-markdown'

export const metadata = {
  title: 'Tienda'
}

export default async function Post({ params, searchParams}) {

    try {
      
      const slug = (await params).name
      const filePath = path.join(process.cwd(), 'src', 'posts', slug + '.json')
      
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const post = JSON.parse(fileContent)

      metadata.title += ' - '+post.title
      metadata.description = `Compra ${post.title} en playec desde Ecuador.`
      
      return <div className='container'>
        <div className='content'>
          <h2>{post.title}</h2>
          <div className='row superCard'>
            <div className='col-4'>
              <img src={post.thumbnail}></img>
            </div>
            <div className='col-8'>
              <div className='content'>
              {post.cards.map(function(card, index){
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
              {post.content}
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