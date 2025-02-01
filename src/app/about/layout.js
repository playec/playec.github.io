export const metadata = {
  title: 'About page',
  description: 'Testing meta about',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
