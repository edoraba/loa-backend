import express, { Express, Request, Response } from "express";
import connectDB from "./config/db";
import bodyParser from "body-parser";
import cors from "cors";

const app: Express = express();

app.use(cors({
  origin: ['http://localhost:3000', 'https://loa-frontend-edorabas-projects.vercel.app', 'https://loa-hazel.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

import { characters } from "./api/characters";
import { user } from "./api/user";

app.use("/characters", characters);
app.use('/user', user);

app.get("/", (_: Request, res: Response) => {
  res.send("Express + TypeScript Server!");
});

export default app;