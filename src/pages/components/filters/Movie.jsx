import axios from 'axios';
import React, { useState, useEffect } from 'react';
//pos si se separa la logica
import { getMovies, searchMovies } from '../../api/api';

export default function Movie() {
  const [movies, setMovies] = useState([]);
  const [tableMovie, setTableMovie] = useState([]);
  const [search, setSearch] = useState('');

  const peticionGet = async () => {
    await axios
      .get('https://api-movies-aipr.onrender.com/movies')
      .then((response) => {
        setMovies(response.data);
        setTableMovie(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //evento de entrada en el input
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    filterMovie(e.target.value);
    console.log(e.target.value);
  };

  //filtro del input
  const filterMovie = (movieSearch) => {
    var responseSearch = tableMovie.filter((elemento) => {
      if (elemento.title.toString().toLowerCase().includes(movieSearch.toLowerCase())) {
        return elemento;
      }
    });
    setMovies(responseSearch);
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <>
      <form>
        <div class='relative'>
          <div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg
              aria-hidden='true'
              class='w-5 h-5 text-gray-500 dark:text-gray-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              ></path>
            </svg>
          </div>
          <input
            type='search'
            id='search'
            class='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Search'
            value={search}
            onChange={handleChange}
            required
          />
          <button
            type='submit'
            class='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Search
          </button>
        </div>
      </form>
      <div class='flex flex-col sm:overflow-x-auto mb-10'>
        <div class='sm:-mx-6 lg:-mx-8'>
          <div class='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
            <div class='sm:overflow-x-auto'>
              <table class='min-w-full text-center text-sm font-light'>
                <thead class='border-b font-medium dark:border-neutral-500'>
                  <tr>
                    <th scope='col' class='px-6 py-4'>
                      Titulo Pelicula
                    </th>
                    <th scope='col' class='px-6 py-4'>
                      Genero
                    </th>
                    <th scope='col' class='px-6 py-4'>
                      Año
                    </th>
                    <th scope='col' class='px-6 py-4'>
                      Categoria
                    </th>
                    <th scope='col' class='px-6 py-4'>
                      Director
                    </th>
                    <th scope='col' class='px-6 py-4'>
                      Sinapsis
                    </th>
                    <th scope='col' class='px-6 py-4'>
                      Calificación
                    </th>
                    <th scope='col' class='px-6 py-4'>
                      Portada
                    </th>
                    <th scope='col' class='px-6 py-4'>
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {movies &&
                    movies.map((movie) => (
                      <tr class='border-b dark:border-neutral-500' key={movie.movieId}>
                        <td class='whitespace-nowrap px-6 py-4 font-medium'>{movie.title}</td>
                        <td class='whitespace-nowrap px-6 py-4'>{movie.genres.genre_name}</td>
                        <td class='whitespace-nowrap px-6 py-4'>{movie.year}</td>
                        <td class='whitespace-nowrap px-6 py-4'>
                          {movie.categories.category_name}
                        </td>
                        <td class='whitespace-nowrap px-6 py-4'>{movie.director}</td>
                        <td class='whitespace-wrap px-6 py-4'>{movie.synopsis}</td>
                        <td class='whitespace-nowrap px-6 py-4'>No tiene</td>
                        <td class='whitespace-nowrap px-6 py-4'>No tiene</td>
                        <td class='whitespace-nowrap px-6 py-4 rounded-lg flex'>
                          <div>
                            <button
                              type='button'
                              class='inline-flex items-center mr-1 px-8 py-2 text-sm text-center rounded-lg text-rose-100 bg-violet-600 hover:bg-violet-500'
                            >
                              Actualizar
                            </button>
                          </div>
                          <div>
                            <button
                              type='button'
                              class='inline-flex items-center ml-1 px-8 py-2 text-sm text-center rounded-lg text-rose-100 bg-red-600 hover:bg-red-500'
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
      </div>
    </>
  );
}
