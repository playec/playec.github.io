export const metadata = {
  title: 'Playec',
  description: 'Sitio web en prueba',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
