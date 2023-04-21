import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/navbar'
import Add from './components/addMovie/Add'
import Movie from './components/filters/Movie'
import Main from './components/main/main'
import Category from './components/filters/Category'
import Gender from './components/filters/Gender'
import Pagination from './components/pagination/Pagination'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />
    <Add />
    <div class="flex flex-nowrap">
      <Movie />
      <Category  />
      <Gender />
    </div>
    
    <Main/>
    <Pagination />
    </>
  )
}
