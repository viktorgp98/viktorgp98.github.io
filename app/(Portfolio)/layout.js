import './globals.css'
import { Navigation } from '../components/navigation/Navigation'
import {Footer} from '../components/footer/Footer'

export const metadata = {
  title: 'Viktor González P. | Freelance Web Developer',
  description: 'Portafolio 2023, Viktor González P.',
}   

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
