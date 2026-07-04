import React from "react"
import { StaticImage } from "gatsby-plugin-image"


export const Header = () => {


    return (
        
      <>
        <div className="msm:flex headercartasMOBILE container relative">
            <StaticImage 
            src='../images/cartas_mobile.jpg' 
            alt='curso de magia'
            placeholder='dominantColor'
            className='imagenLEINADMOBILE'
            formats={[`auto`, `avif`, `webp`]}
            />
            <h1 className="text-gray-100 text-3xl sm:text-5xl antialiased text-shadow-xl  center  mlg:text-2x1 uppercase font-semibold  mt-32  text-center msm:text-4xl ">Circulo Magico
            <div className="text-2xl sm:text-4xl antialiased uppercase italic msm:mt-0 mt-3 text-red-700 mlg:text-2xl msm:text-lg msm:font-medium msm:tracking-normal">Escuela de Magia e Ilusionismo</div></h1>
        </div>

        <div className="sm:flex headercartas container relative">
            <StaticImage 
            src='../images/cartascolor.jpg' 
            alt='curso de magia'
            placeholder='dominantColor'
            className='imagenLEINAD'
            formats={[`auto`, `avif`, `webp`]}
            />
            <h1 className="text-gray-100 text-3xl sm:text-5xl antialiased text-shadow-xl center mlg:text-2x1 uppercase font-semibold msm:mt-44 mt-32  text-center msm:text-4xl ">Circulo Magico
            <div className="text-2xl sm:text-4xl antialiased uppercase italic msm:mt-0 mt-3 text-red-800   mlg:text-2xl msm:text-lg msm:font-medium msm:tracking-normal">Escuela de Magia e Ilusionismo</div></h1>
        </div>
     </>
    )
}


export default Header

