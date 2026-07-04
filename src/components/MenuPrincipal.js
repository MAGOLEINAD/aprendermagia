import React from "react"
/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { StaticImage } from "gatsby-plugin-image"


const navigation = [
  { name: 'Home', href: '#', current: true }, 
  { name: 'Escuela', href: 'https://api.whatsapp.com/send?phone=541152638510&text=Hola!&source=&data=', current: false },
  { name: 'Tienda de magia', href: 'https://www.TrucosyMagia.com', current: false },
  { name: 'Contacto', href: 'https://api.whatsapp.com/send?phone=541152638510&text=Hola!&source=&data=', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MenuPrincipal() {
  return (
   
    <Disclosure as="nav" className="bg-black opacity-90 sticky top-0 z-10">
      {({ open }) => (
        <>
          <div className="max-w-3xl uppercase mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Menu Principal</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                <StaticImage 
          src='../images/logofooter.png' 
          width={128}
          height={84}
          alt='circulomagico'
          placeholder='tracedSVG'
          className="block  h-10 w-16"
          />
        
        
            
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        

               
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}