import express from "express";

const router = express.Router()

import { usuarioEmail } from '../controllers/usuarioControllers.js'


router.post('/', usuarioEmail);


export default router