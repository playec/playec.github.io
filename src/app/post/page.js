'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react";

export default function Post( { props } ) {

    const pathname = usePathname()
    const searchParams = useSearchParams()

    const key = searchParams.get('key')

    const [repoData, setRepoData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (key) {
            // Hacer la solicitud a la API de GitHub
            fetch(`https://raw.githubusercontent.com/playec/playec.github.io/refs/heads/main/posts/${key}.json`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Repositorio no encontrado')
                    }
                    return response.json()
                })
                .then(data => {
                    setRepoData(data)
                    setLoading(false)
                })
                .catch(error => {
                    setError(error.message)
                    setLoading(false)
                })
        }
    }, [key])

    if (loading) return <p>Cargando...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div>
            <h1>Post {repoData.title}</h1>
            <div>
                <p>{repoData.description}</p>
            </div>
        </div>
    )
}