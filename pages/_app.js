import '@/styles/globals.css'
import { Anek_Bangla, Epilogue } from '@next/font/google'

const AB = Anek_Bangla({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-AB'
})

const Epi = Epilogue({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-Epi'
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${AB.variable} ${Epi.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
