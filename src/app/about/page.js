'use client'
 
import { useSearchParams } from 'next/navigation'
import { Suspense, useState, useEffect } from 'react'

function Search() {

    const searchParams = useSearchParams()
    const key = searchParams.get('key')

    const [rootData, setJsonData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        if(key){

            fetch(`https://raw.githubusercontent.com/playec/playec.github.io/refs/heads/main/_posts/${key}.json`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Archivo no encontrado')
                    }
                    return response.json()
                })
                .then(data => {
                    setJsonData(data)
                    setLoading(false)
                })
                .catch(error => {
                    setError(error.message)
                    setLoading(false)
                })

        }

    }, [key])

    if(rootData){
        return <p>Title {rootData.title}</p>
    }else{
        return <p>Not found</p>
    }
   
  }

export default function About() {
    return (
        <Suspense>
            <Search />
        </Suspense>
    )
    
}