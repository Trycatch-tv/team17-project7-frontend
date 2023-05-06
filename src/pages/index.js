import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/navbar'
import Add from './components/addMovie/Add'
import Movie from './components/filters/Movie'
import Main from './components/main/main'
import Category from './components/filters/Category'
import Gender from './components/filters/Gender'
import Pagination from './components/pagination/Pagination'
import Form from '../components/Form'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [formValues, setFormValues] = useState({
    title: '',
    genres: [],
    year: '',
    categories: [],
    director: '',
    synopsis: ''
  })

  return (
    <>
      <Navbar />
      <main class="px-2 sm:px-6 lg:px-8">
        <Add onClick={() => setModalOpen(true)} setFormValues={setFormValues} />
        <div class="flex flex-nowrap mb-10">
          <Movie />
          <Category />
          <Gender />
        </div>
        <Main setModalOpen={setModalOpen} setFormValues={setFormValues} />
        <Pagination />
        <Form
          open={modalOpen}
          setOpen={setModalOpen}
          initialValues={formValues}
          setValues={setFormValues}
        />
      </main>
    </>
  )
}
