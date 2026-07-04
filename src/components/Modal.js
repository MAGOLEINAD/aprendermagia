import React from "react"

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import MisOpciones from './Opciones'

export default function MiModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className=" bg-transparent border px-[7.6rem] border-zinc-600 uppercase rounded text-center py-3 font-medium tracking-wider msm:px-[6.6rem] text-white mlg:px-[7.6rem] mxl:px-[4rem]"
        >
          Que Aprendere
        </button>
      </div>

      <Dialog
        open={isOpen}
        onClose={closeModal}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="min-h-screen px-4 text-center">
          <DialogBackdrop
            transition
            className="fixed inset-0 duration-300 ease-out data-closed:opacity-0"
          />

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <DialogPanel
            transition
            className="inline-block w-full max-w-5xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl duration-300 ease-out data-closed:opacity-0 data-closed:scale-95"
          >
            <DialogTitle
              as="h3"
              className="text-2xl text-center uppercase font-medium leading-6 text-gray-900"
            >
              Preguntas Frecuentes <i class="far fa-question-circle"></i>
            </DialogTitle>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                  <MisOpciones/>

              </p>
            </div>

            <div className="mt-4  text-right">
              <button
                type="button"
                className="inline-flex justify-center  px-4 py-2 text-base font-medium text-white bg-blue-900 border border-transparent rounded-md hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                onClick={closeModal}
              >
                Entendido, gracias! <div className='mx-2'><i class="far fa-thumbs-up"></i></div>
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}
