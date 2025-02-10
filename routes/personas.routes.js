import express from 'express';
import { getAll, getOne } from '../controllers/personas.controllers.js';

const router = express.Router();

router.get('/', getAll);

router.get('/:id', getOne);

router.post('/');

router.put('/:id');

router.delete('/:id');

export default router;