'use client'
 
import { useParams } from 'next/navigation'
import { Suspense, useState, useEffect } from 'react'

function Search() {

    const params = useParams()
    const itemName = params.name

    const [jsonData, setJsonData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        if(itemName){

            fetch(`https://raw.githubusercontent.com/playec/playec.github.io/refs/heads/main/_posts/${itemName}.json`)
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

    }, [itemName])

    if (loading) return <p>Cargando...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div>
            <h1>{jsonData.title}</h1>
            <p>{jsonData.body}</p>
        </div>
    )
   
  }

export default function Item() {
    return (
        <Suspense>
            <Search />
        </Suspense>
    )
    
}