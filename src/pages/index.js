import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/navbar'
import Main from './components/main/main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />
    <Main />
    </>
  )
}
