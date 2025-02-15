const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'src/posts'); // Carpeta de los posts
const outputFile = path.join(__dirname, 'public/posts_list.json'); // Archivo JSON de salida

async function generatePostsList() {
    try {
        // Leer archivos JSON en la carpeta de posts
        const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.json'));

        const posts = files.map(file => {
            const filePath = path.join(postsDir, file);
            const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));

            return {
                title: content.title || 'Sin título',
                date: content.date || 'Sin fecha',
                slug: file.replace('.json', ''), // Usar el nombre del archivo como slug
            };
        });

        fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
        console.log('✅ Archivo posts_list.json generado correctamente.');
    } catch (error) {
        console.error('❌ Error al generar posts_list.json:', error);
    }
}

generatePostsList();
