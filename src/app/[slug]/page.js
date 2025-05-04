import React from 'react'
import Data from '@/api/Data'

export async function generateMetadata({ params }) {

  const page = Data('pages', (await params).slug)

  return {
    title: page.title,
    description: page.body,
    openGraph: {
      title: page.title,
      description: page.body,
      images: page.thumbnail,
      url: `https://playec.netlify.app/${page.thumbnail}`
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.body,
      images: page.thumbnail
    }
  }
}

export default async function Home({params, searchParams}) {

  const { slug } = await params

  try{
    
    const page = Data('pages', slug)

    if(!page){
      throw new Error("404")
    }
    
    return <div className='container'>
      <div className='content'>
        <h2 className='page-title'>
          {page.title}
        </h2>
        <div className='page-body'>
          {page.body}
        </div>
      </div>
    </div>

  }catch(e){
    return <div className='container'>
      <div className='content'>
        <p>404 página no encontrada</p>
      </div>
    </div>
  }
    
}