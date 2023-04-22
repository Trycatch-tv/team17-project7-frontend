import { Disclosure } from '@headlessui/react'

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-900 mb-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block mx-8"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div>
                  <h2 className='inline-block align-middle text-2xl font-sans font-medium'>Catálogo de películas</h2>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}