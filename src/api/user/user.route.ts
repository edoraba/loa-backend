import express from 'express';
import * as userController from './user.controller';
import { checkJwt } from '../../utils/functions';

const router = express.Router();

router.post('/register', userController.register)

router.post('/login', userController.login)

export default router;