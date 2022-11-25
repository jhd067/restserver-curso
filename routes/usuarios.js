import { Router } from "express";
import { usuariosGet } from "../controllers/usuarios.js";
import { usuariosPost } from "../controllers/usuarios.js";
import { usuariosDelete } from "../controllers/usuarios.js";
import { usuariosPut } from "../controllers/usuarios.js";

const router = Router();
router.get('/', usuariosGet);
router.post('/', usuariosPost);
router.delete('/', usuariosDelete )
router.put('/:id', usuariosPut )

export  {router};