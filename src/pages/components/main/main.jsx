export default function Main() {
  return (
    <>
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
                  <tr class='border-b dark:border-neutral-500'>
                    <td class='whitespace-nowrap px-6 py-4 font-medium'>Mr. Bones</td>
                    <td class='whitespace-nowrap px-6 py-4'>Vida Real</td>
                    <td class='whitespace-nowrap px-6 py-4'>2011</td>
                    <td class='whitespace-nowrap px-6 py-4'>Drama</td>
                    <td class='whitespace-nowrap px-6 py-4'>Juan Gonzales</td>
                    <td class='whitespace-nowrap px-6 py-4'>Drama de 1950</td>
                    <td class='whitespace-nowrap px-6 py-4'>4,2</td>
                    <td class='whitespace-nowrap px-6 py-4'>😒😒😒</td>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col mb-20">
                <div className="overflow-x-auto">
                        <div className="w-full mx-auto inline-block align-middle">
                            <div className="overflow-hidden border rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-800 uppercase "
                                            >
                                                Titulo Pelicula
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-800 uppercase "
                                            >
                                                Genero
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-800 uppercase "
                                            >
                                                Año
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-800 uppercase "
                                            >
                                                Categoria
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-800 uppercase "
                                            >
                                                Director
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-800 uppercase "
                                            >
                                                Sinapsis
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-800 uppercase "
                                            >
                                                Calificación
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-800 uppercase "
                                            >
                                                Portada
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-800 uppercase "
                                            >
                                                Acciones
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 mx-auto">
                                        <tr>
                                            <td className="px-6 py-4 text-base font-medium text-gray-50 whitespace-nowrap">
                                                Mr. Bones
                                            </td>
                                            <td className="px-6 py-4 text-base text-gray-50 whitespace-nowrap">
                                                Vida real
                                            </td>
                                            <td className="px-6 py-4 text-base text-gray-50 whitespace-nowrap">
                                                2011
                                            </td>
                                            <td className="px-6 py-4 text-base text-gray-50 whitespace-nowrap">
                                                Drama
                                            </td>
                                            <td className="px-6 py-4 text-base text-gray-50 whitespace-nowrap">
                                                Juan Gonzales
                                            </td>
                                            <td className="px-6 py-4 text-base text-gray-50 whitespace-nowrap">
                                                drama del 2015
                                            </td>
                                            <td className="px-6 py-4 text-base text-gray-50 whitespace-nowrap">
                                                4,2
                                            </td>
                                            <td className="px-6 py-4 text-base text-gray-50 whitespace-nowrap">
                                                😒😒😒
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-50 whitespace-nowrap flex">
                                                <div>
                                                    <button
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
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> */}
    </>
  );
}
