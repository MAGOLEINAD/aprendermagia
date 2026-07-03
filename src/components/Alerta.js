import React from 'react'

const Alerta = ({alerta}) => {
  return (
      <div className={`${alerta.visible? 'text-white msm:w-11/12 uppercase font-normal text-center bg-slate-700 mt-4 w-3/4 p-2 rounded-md': ''} bg-gradient-to-br text-center p-3 font-bold text-sm`} >
    {alerta.msg}
    </div>
  )
}

export default Alerta