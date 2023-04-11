import './globals.css'

export const metadata = {
  title: 'Homepage',
  description: 'Real estate Homepage',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
