import { useEffect, useState } from 'react'
import Input from './Input'
import Modal from './Modal'
import Select from './Select'
import TextArea from './TextArea'

const Form = ({ open, setOpen, initialValues, setValues }) => {
  const [allGenres, setAllGenres] = useState([])
  const [allCategories, setAllCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { title, genre, year, category, director, synopsis } = initialValues

  const fetchGenres = async () => {
    setIsLoading(true)
    const response = await fetch('https://api-movies-aipr.onrender.com/genres')
    const data = await response.json()
    setAllGenres(data)
    setIsLoading(false)
  }

  const fetchCategories = async () => {
    setIsLoading(true)
    const response = await fetch(
      'https://api-movies-aipr.onrender.com/categories'
    )
    const data = await response.json()
    setAllCategories(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchGenres()
    fetchCategories()
  }, [])

  return (
    <Modal title="Agregar pelicula" open={open} setOpen={setOpen}>
      <form className="flex flex-col gap-3">
        {isLoading && <p>Cargando...</p>}
        {allGenres && (
          <>
            <Input
              id="title"
              name="title"
              label="Titulo"
              type="text"
              placeholder="Ingresa el titulo de la pelicula"
              value={title}
              onChange={(e) =>
                setValues({ ...initialValues, title: e.target.value })
              }
            />
            <Input
              id="year"
              name="year"
              label="Año"
              type="number"
              placeholder="Ingresa el año de la pelicula"
              value={year}
              onChange={(e) =>
                setValues({ ...initialValues, year: e.target.value })
              }
            />
            <Input
              id="director"
              name="director"
              label="Director"
              type="text"
              placeholder="Ingresa el director de la pelicula"
              value={director}
              onChange={(e) =>
                setValues({ ...initialValues, director: e.target.value })
              }
            />
            <Select
              id="genre"
              name="genre"
              label="Genero"
              value={genre}
              onChange={(e) =>
                setValues({ ...initialValues, genre: e.target.value })
              }
              options={allGenres.map((genre) => ({
                id: genre.genreId,
                value: genre.genreId,
                label: genre.genre_name
              }))}
            />
            <Select
              id="category"
              name="category"
              label="Categoria"
              value={category}
              onChange={(e) =>
                setValues({ ...initialValues, category: e.target.value })
              }
              options={allCategories.map((genre) => ({
                id: genre.categoryId,
                value: genre.categoryId,
                label: genre.category_name
              }))}
            />
            <TextArea
              id="synopsis"
              name="synopsis"
              label="Director"
              type="text"
              placeholder="Ingresa la synopsis de la pelicula"
              value={synopsis}
              onChange={(e) =>
                setValues({ ...initialValues, synopsis: e.target.value })
              }
            />
          </>
        )}
      </form>
    </Modal>
  )
}

export default Form
