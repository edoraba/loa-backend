import express from 'express';
import * as charactersController from './characters.controller';
import { checkJwt } from '../../utils/functions';

const router = express.Router();

router.get('/', checkJwt, charactersController.getAll);

router.get('/:id', charactersController.get);

router.post('/', charactersController.create);

router.put('/:id', charactersController.update);

router.delete('/:id', charactersController.remove);

export default router;