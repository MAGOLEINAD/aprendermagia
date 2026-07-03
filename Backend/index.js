// const express = require('express')
import express from "express"
import conectarDB from "./config/db.js"
import dotenv from 'dotenv'
import router from "./routes/usuarioRoutes.js"
import cors from 'cors'

const app = express()
app.use(express.json())
dotenv.config()
conectarDB()


//Configurar CORS

const whitelist = ['http://localhost:8000']

const corsOptions = {
    origin: function (origin, callback) {
        console.log(origin);
        if (whitelist.includes(origin)) {
            callback (null, true)
            //PUEDE CONSULTAR API
        } else {
          callback (new Error ('Error de Cors')) //No esta permitido el request
        }
    }
}
app.use(cors(corsOptions));
//Routing 


app.use('/api/usuarios',router)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
})