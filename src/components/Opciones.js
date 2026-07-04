import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import React from "react"

export default function MisOpciones() {
  return (
    <div className="w-full px-4 pt-1 ">
      <div className="w-full max-w-4xl p-2 mx-auto bg-white rounded-2xl ">
        <Disclosure>
          {({ open }) => (
            <>
              <DisclosureButton className="flex justify-between w-full px-4 py-2 text-base font-medium text-left text-white bg-gray-800 rounded-lg hover:bg-red-900 focus:outline-none focus-visible:ring focus-visible:ring-zinc-100 focus-visible:ring-opacity-75">
                <span>Que aprenderé?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-white`}
                />
              </DisclosureButton>
              <DisclosurePanel className="px-4 pt-4 pb-2 text-base text-gray-500">
              Aprenderás trucos de magia para causar el mayor impacto en cualquier momento y lugar. Conocerás la <b>teoría</b> detras de la magia y <b>como manejar tu mirada, tu voz, tus manos, tu cuerpo y tus ángulos. </b>
              Te enseñaremos a sorprender con todo tipo de elementos: cartas, monedas, billetes, cigarrillos, anillos, fuego y mucho más.
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <DisclosureButton className="flex justify-between w-full px-4 py-2 text-base font-medium text-left text-white bg-gray-800 rounded-lg hover:bg-red-900 focus:outline-none focus-visible:ring focus-visible:ring-zinc-100 focus-visible:ring-opacity-75">
                <span>Conocimiento Previo?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-white`}
                />
              </DisclosureButton>
              <DisclosurePanel className="px-4 pt-4 pb-2 text-base text-gray-500">
              No se necesita ningún tipo de conocimiento previo. El Curso está orientado <b>para quienes quieran dar sus primeros pasos en el mundo de la magia</b> ya sea como hobby o de manera profesional.
              Hombres y Mujeres están invitados a adentrarse en el mundo del ilusionismo.
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <DisclosureButton className="flex justify-between w-full px-4 py-2 text-base font-medium text-left text-white bg-gray-800 rounded-lg hover:bg-red-900 focus:outline-none focus-visible:ring focus-visible:ring-zinc-100 focus-visible:ring-opacity-75">
                <span>Cuanto dura el Curso?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-white`}
                />
              </DisclosureButton>
              <DisclosurePanel className="px-4 pt-4 pb-2 text-base text-gray-500">
              El curso de Magia se divide en <b>5 Niveles</b>, cada nivel dura 1 cuatrimestre. 
              Las clases Grupales se dictan una <b>vez por semana</b> y tienen 1:30 Hs de duración. Las Particulares 1 Hs de duración.
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <DisclosureButton className="flex justify-between w-full px-4 py-2 text-base font-medium text-left text-white bg-gray-800 rounded-lg hover:bg-red-900 focus:outline-none focus-visible:ring focus-visible:ring-zinc-100 focus-visible:ring-opacity-75">
                <span>Como Reservo Vacante?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-white`}
                />
              </DisclosureButton>
              <DisclosurePanel className="px-4 pt-4 pb-2 text-base text-gray-500">
              En nuestra web podés reservar online presionando el boton rojo <b>"Reserva tu Vacante"</b> o acercándote a la escuela de Lun. a Vier. de 10.30 a 16.30 en <b>Felipe Vallese 1387.</b>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <DisclosureButton className="flex justify-between w-full px-4 py-2 text-base font-medium text-left text-white bg-gray-800 rounded-lg hover:bg-red-900 focus:outline-none focus-visible:ring focus-visible:ring-zinc-100 focus-visible:ring-opacity-75">
                <span>Entregan apuntes?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-white`}
                />
              </DisclosureButton>
              <DisclosurePanel className="px-4 pt-4 pb-2 text-base text-gray-500">
              Sí, el alumno <b>recibirá un apunte detallado</b> de los juegos enseñados en clase.
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <DisclosureButton className="flex justify-between w-full px-4 py-2 text-base font-medium text-left text-white bg-gray-800 rounded-lg hover:bg-red-900 focus:outline-none focus-visible:ring focus-visible:ring-zinc-100 focus-visible:ring-opacity-75">
                <span>Entregan Diplomas?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-white`}
                />
              </DisclosureButton>
              <DisclosurePanel className="px-4 pt-4 pb-2 text-base text-gray-500">
              Sí, al finalizar cada nivel el Alumno recibirá un Certificado estilo <b>Diploma</b>.
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <DisclosureButton className="flex justify-between w-full px-4 py-2 text-base font-medium text-left text-white bg-gray-800 rounded-lg hover:bg-red-900 focus:outline-none focus-visible:ring focus-visible:ring-zinc-100 focus-visible:ring-opacity-75">
                <span>Hay opción a distancia?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-white`}
                />
              </DisclosureButton>
              <DisclosurePanel className="px-4 pt-4 pb-2 text-base text-gray-500">
              Sí, el <b>curso en Videos</b> es super recomendable y está pensado para principiantes. Para más info contactanos al WhatsApp.
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <DisclosureButton className="flex justify-between w-full px-4 py-2 text-base font-medium text-left text-white bg-gray-800 rounded-lg hover:bg-red-900 focus:outline-none focus-visible:ring focus-visible:ring-zinc-100 focus-visible:ring-opacity-75">
                <span>Necesito Materiales?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-white`}
                />
              </DisclosureButton>
              <DisclosurePanel className="px-4 pt-4 pb-2 text-base text-gray-500">
              Unicamente una <b>baraja de naipes</b>, puedes adquirirla en nuestro local. A medida que avances en el curso iremos recomendando los articulos infaltables que todo mago posee. 
              Todos nuestros productos están en www.TrucosyMagia.com. Realizamos envíos a toda Argentina.
              </DisclosurePanel>
            </>
          )}
        </Disclosure>

      </div>
    </div>
  )
}
