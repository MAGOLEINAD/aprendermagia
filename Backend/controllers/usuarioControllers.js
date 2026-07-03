import Usuario from "../models/Usuario.js"

// const usuarioEmail =  (req, res) => {
//     res.json ({msg:'Creando Usuario'})
// }

const usuarioEmail = async (req, res) => {
    try {
        const usuario = new Usuario(req.body)
        // const usuarioAlmacenado = await usuario.save()
        // res.json(usuarioAlmacenado)
        await usuario.save()
        res.json({mensaje:'Email Enviado'})
        
    } catch (error) {
        console.log(error)
    }
}

export {
    usuarioEmail
}