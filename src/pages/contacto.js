import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import Layout from '../components/layout';
import { Formik,Form,Field, ErrorMessage} from 'formik';
import * as Yup from 'yup'
import axios from 'axios'
import Alerta from '../components/Alerta';


// import emailjs from '@emailjs/browser'

export default function Contacto () {

    const [alerta, setAlerta] = useState(false)


//   const handleSubmit = async (valores) => {
//     try {
//     const url = 'http://localhost:4000/api/usuarios'
//      const respuesta = await fetch (url, {
//         method: 'POST',
//         body: JSON.stringify (valores),
//         headers: {
//           'Content-Type': 'aplication.json'
//         }
//       })
// console.log(respuesta)
// const resultado = await respuesta.json()
// console.log(resultado)

//     } catch (error) {
//       console.log(error)
//     }
//   }

const handleSubmit = async (valores) => { try {
  const {data} = await axios.post ('http://localhost:4000/api/usuarios',
   valores)
   console.log(data.mensaje);
  setAlerta ({
    msg: 'El Formulario se ha Enviado exitosamente',
    visible: true
  })

} catch (error) {
  console.log(error)
}
  
}

  const formularioSchema = Yup.object().shape({  
  nombre: Yup.string()
  .min(3,'El nombre es muy corto')
  .max(20,'El nombre es muy largo')
  .required ('Completa tu Nombre'),
  email:Yup.string()
  .email('E-Mail no válido')
  .required ('Completa tu E-Mail'),
  telefono:Yup.number()
  .typeError('Número no válido'),
  mensaje:'',
})

const {msg} = alerta
// const sendEmail = (e) => {
//   e.preventDefault();

//   emailjs.sendForm('gmail', 'template_9uqzuhd', e.target, 'EimdWmrHL3cbkDI0D')
//     .then((result) => {
//         console.log(result.text);
//     }, (error) => {
//         console.log(error.text);
//     });
//     e.target.reset()
// };
    return (
    <div>
    <Layout>
      <main className='mt-10 '>
        <div className='grid grid-cols-2 gap-6 content-center container '>
        <StaticImage 
             src='../images/contacto.jpg' 
             className=''
             width={1650}
             height={1050}
             alt='contactate'
             placeholder='dominantColor'
             formats={[`auto`, `avif`, `webp`]}
          />
          <div>
          <h1 className='text-5xl mb-3 font-extralight '>Contacto</h1>
          <p className='font-normal mb-10'>Averiguá cuando inicia el próximo curso para Principiantes.</p>
          <Formik 
          
          initialValues={{
            nombre:'',
            email:'',
            telefono:'',
            mensaje:'',
          }}
          onSubmit={handleSubmit}
          validationSchema={formularioSchema}

          >
            {()=> (
          <Form>
            <label 
            htmlFor='nombre'
            className='block my-2 '>Nombre</label>
            <Field 
              id='nombre'
              type='text'
              placeholder='Tu nombre'
              className='rounded-md msm:w-11/12 w-3/4 py-1.5 p-2  placeholder-gray-700 text-black pr-2' 
              name='nombre'
            />
        <ErrorMessage name="nombre" component="div" className="text-red-500" />
           
                    <label 
            htmlFor='email'
            className='block my-2'>E-Mail</label>
            <Field 
              id='email'
              type='text'
              placeholder='Tu E-Mail'
              className='rounded-md msm:w-11/12 w-3/4 py-1.5 p-2 placeholder-gray-700 text-black' 
              name='email'
            />
             <ErrorMessage name="email" component="div" className="text-red-500" />
                    <label 
            htmlFor='telefono'
            className='block my-2'>Whats App</label>
            <Field 
              id='telefono'
              type='text'
              placeholder='Tu Teléfono'
              className='rounded-md msm:w-11/12 w-3/4 py-1.5 p-2 placeholder-gray-700 text-black ' 
              name='telefono'
            />
             <ErrorMessage name="telefono" component="div" className="text-red-500" />
                    <label 
            htmlFor='mensaje'
            className='block my-2'>Mensaje</label>
            <Field 
              as='textarea'
              id='mensaje'
              placeholder='Escribe Aquí'
              className='rounded-md msm:w-11/12 w-3/4 py-1.5 p-2 placeholder-gray-700 text-black' 
              name='mensaje'
            />
             <ErrorMessage name="mensaje" component="div" className="text-red-500" />

            <input 
            type='submit'
            className='bg-red-800 msm:w-11/12 w-3/4 p-2 rounded-md uppercase font-semibold cursor-pointer hover:bg-red-900 transition-all'
            value='Enviar'
            />
            {msg && <Alerta alerta={alerta}/>}
            {/* <div  className='text-white hidden msm:w-11/12 uppercase font-normal text-center bg-slate-700 mt-4 w-3/4 p-2 rounded-md'> El Formulario se ha enviado Correctamente</div> */}
            
          </Form>
          
          )}
          
        
          </Formik>

          
          </div>
        
        </div>

      </main>
    </Layout>
    
   
    </div>
)  
  
    }
    
    

