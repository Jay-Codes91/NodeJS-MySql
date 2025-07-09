import express from 'express';
import { getAll, getOne, postPersonas, putPersonas, deleteOne } from '../controllers/personas.controllers.js';
import { isAdmin, verificarToken } from '../security/authorization.js';

const router = express.Router();

router.get('/', getAll);

router.get('/:id', getOne);

/*router.post('/', isAdmin, postPersonas);

router.put('/:id', isAdmin, putPersonas);

router.delete('/:id', isAdmin, deleteOne);*/

router.post('/', postPersonas);

router.put('/:id', putPersonas);

router.delete('/:id', deleteOne);

export default router;