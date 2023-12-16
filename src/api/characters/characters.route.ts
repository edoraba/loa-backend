import express from 'express';
import * as charactersController from './characters.controller';
import { checkJwt } from '../../utils/functions';

const router = express.Router();

router.get('/', checkJwt, charactersController.getAll);

router.get('/user/:userId', checkJwt, charactersController.getByUser);

router.get('/search', checkJwt, charactersController.getByName);

router.get('/:id', checkJwt, charactersController.get);

router.post('/create', checkJwt, charactersController.create);

router.put('/:id', checkJwt, charactersController.update);

router.delete('/:id', checkJwt, charactersController.remove);

export default router;