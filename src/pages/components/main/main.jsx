import { useEffect, useState } from 'react'

export default function Main({ setModalOpen, setFormValues }) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchMovies = async () => {
    const response = await fetch('https://api-movies-aipr.onrender.com/movies')
    const data = await response.json()
    setMovies(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  if (isLoading) {
    return (
      <div className="absolute w-full h-full top-0 left-0 backdrop-blur-lg z-50 flex items-center justify-center">
        <p>Espera un momento, estamos obteniendo las peliculas para ti...</p>
      </div>
    )
  }

  return (
    <>
      <div class="flex flex-col overflow-x-auto mb-10">
        {movies?.length === 0 && (
          <div className="p-3 text-center">
            <p>No se encontraron peliculas</p>
          </div>
        )}
        {movies?.length > 0 && (
          <div class="sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="sm:overflow-x-auto">
                <table class="min-w-full text-center text-sm font-light">
                  <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" class="px-6 py-4">
                        Titulo Pelicula
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Genero
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Año
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Categoria
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Director
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Sinapsis
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Calificación
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Portada
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {movies.map((movie) => (
                      <tr
                        key={movie.id}
                        class="border-b dark:border-neutral-500"
                      >
                        <td class="whitespace-nowrap px-6 py-4 font-medium">
                          {movie.title}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                          {movie.genres?.length === 0 && 'Sin género'}
                          {movie.genres.map((g) => g.genre_name).join(', ')}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                          {movie.year}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                          {movie.categories?.length === 0 && 'Sin categoría'}
                          {movie.categories
                            .map((g) => g.category_name)
                            .join(', ')}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                          {movie.director}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                          {movie.synopsis}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                          {(
                            movie.reviews?.reduce((a, b) => a + b.rating, 0) /
                            movie.reviews?.length
                          ).toFixed(1)}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">😒😒😒</td>
                        <td class="whitespace-nowrap px-6 py-4 rounded-lg flex">
                          <div>
                            <button
                              onClick={() => {
                                setModalOpen(true)
                                setFormValues({
                                  title: movie.title || '',
                                  genre: movie.genres[0].id || '',
                                  year: movie.year || '',
                                  category: movie.categories[0].id || '',
                                  director: movie.director || '',
                                  synopsis: movie.synopsis || ''
                                })
                              }}
                              type="button"
                              class="inline-flex items-center mr-1 px-8 py-2 text-sm text-center rounded-lg text-rose-100 bg-violet-600 hover:bg-violet-500"
                            >
                              Actualizar
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              class="inline-flex items-center ml-1 px-8 py-2 text-sm text-center rounded-lg text-rose-100 bg-red-600 hover:bg-red-500"
                            >
                              Borrar
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
