import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
 faFacebookF,
 faInstagram,
 faTiktok,
 faYoutube,
 faTwitter,
 
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return <div>
      <footer className=' container msm:grid msm:gap-4 sm:justify-evenly flex text-zinc-500  mt-16'>
        <div>
          <div className='msm:hidden'>
          <StaticImage 
          
          src='../images/logofooter.png' 
          width={128}
          height={84}
          alt='circulo magico'
          placeholder='tracedSVG'
          formats={[`auto`, `avif`, `webp`]}
          
                  
          />
 </div>
         
        </div>
        <div className='sm:hidden text-center mx-6 text-zinc-400 '>
        <i className="fas fa-map-marker-alt mb-3 text-red-800 text-4xl"></i>
          <p>Estamos en Felipe Vallese 1387, Barrio Caballito, CABA. <br /> Nuestro horario de atención es de 10.30 a 16.30 de Lunes a Viernes.</p>
       
        </div>
      
        <div className='msm:hidden'>
        <p className='ftp'>Escuela de Magia</p>
        <p className='my-2'>Clases Presenciales</p>
        <a href= 'https://www.aprendermagia.com.ar/planes'><p>Clases Online</p></a>
        </div>
        <div className='msm:hidden'>
        <p className='ftp'>Tienda de Magia</p>
        <a href= 'https://www.TrucosyMagia.com'> <p className='my-2'>Productos</p></a>
        <a href= 'https://www.udemy.com/course/aprende-magia-e-ilusionismo-curso-completo/'><p>Curso en Videos</p></a>
        </div>
        <div className='msm:hidden'>
        <p className='ftp'>Contactate</p>
        <p className='my-2'>Whats App</p>
        <p>E-Mail</p>
        </div>
        <div className='msm:text-center'>
        <p className='msm:text-zinc-200 tracking-widest font-medium ftp'>Redes Sociales</p>
        <a href= 'https://www.facebook.com/escuelademagia'aria-label="Facebook"> <FontAwesomeIcon icon={faFacebookF} className=' mx-[0.4rem] my-3 text-white text-xl' /></a>
        <a href= 'https://www.facebook.com/escuelademagia'aria-label="Facebook"> <FontAwesomeIcon icon={faInstagram} className=' mx-[0.4rem] my-3 text-white text-xl' /></a>
        <a href= 'https://www.facebook.com/escuelademagia'aria-label="Facebook"> <FontAwesomeIcon icon={faYoutube} className=' mx-[0.4rem] my-3 text-white text-xl' /></a>
        <a href= 'https://www.facebook.com/escuelademagia'aria-label="Facebook"> <FontAwesomeIcon icon={faTwitter} className=' mx-[0.4rem] my-3 text-white text-xl' /></a>
        <a href= 'https://www.facebook.com/escuelademagia'aria-label="Facebook"> <FontAwesomeIcon icon={faTiktok} className=' mx-[0.4rem] my-3 text-white text-xl' /></a>

       
       
        </div>
    
      </footer>

       <br /> <br />

  </div>;
};

export default Footer;
