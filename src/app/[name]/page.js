import fs from 'fs'
import path from 'path'

export default async function Post({ params, searchParams}) {

    const slug = (await params).name

    return (
        <div>
            <h1>Página {slug}</h1>
        </div>
    )
    
}