import { Navigation } from './components/Navigation'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FOCASSI',
  description: 'Comprometidos con la seguridad y responsabilidad civil en FOCASSI te formamos y capacitamos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
