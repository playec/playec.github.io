export const metadata = {
    title: 'Post Page',
    description: 'Pagina web de prueba',
  }
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }
  