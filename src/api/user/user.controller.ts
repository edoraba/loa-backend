import { Request, Response, NextFunction } from "express";
import * as userService from "./user.service";

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
      const loginResponse = await userService.login(req.body);
      res.status(201).json(loginResponse);
  } catch (err) {
      console.error(`Error while logging in`, err.message);
      res.status(500).send('Errore del server');
  }
};

export { register, login };