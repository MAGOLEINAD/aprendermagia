import mongoose from "mongoose";


const usuarioSchema = mongoose.Schema({
 
    nombre: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        required: true,
        trim:true,
        unique:true
    },
    telefono: {
        type: Number,
        required: true,
        trim:true
    },
    mensaje: {
        type: String,
        required: true,
    },
    token: {
        type: String,
    },
    confirmado: {
        type: Boolean,
        default:false,
    },
},
{
    timeStamps: true
}
)

const Usuario = mongoose.model ('Usuario',usuarioSchema)

export default Usuario