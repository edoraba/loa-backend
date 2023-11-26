import { Request, Response, NextFunction } from "express";
import * as userService from "./user.service";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from "./user.model";

async function register(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await userService.register(req.body));
    res.status(201).json(res);
  } catch (err) {
    console.error(`Error while creating the user`, err.message);
    next(err);
  }
}

async function login(req: Request, res: Response, next: NextFunction) {
    try {
        res.json(await userService.login(req.body));
        res.status(201).json(res);
    } catch (err) {
        res.status(500).send('Errore del server');
        console.error(`Error while loggin in`, err.message);
        next(err);
    }
};

export { register, login };