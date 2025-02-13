import express from 'express';
import { getAll, getOne, postPersonas } from '../controllers/personas.controllers.js';
import { verificarToken } from '../security/authorization.js';

const router = express.Router();

router.get('/', verificarToken, getAll);

router.get('/:id', getOne);

router.post('/', postPersonas);

router.put('/:id');

router.delete('/:id');

export default router;