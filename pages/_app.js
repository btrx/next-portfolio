import '@/styles/globals.css'
import { Anek_Bangla } from '@next/font/google'

const AB = Anek_Bangla({ 
  weight: ['400','600'],
  subsets: ['latin'],
  variable: '--font-AB' 
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${AB.variable}`}>
      <Component {...pageProps} />
    </main>
  ) 
}
