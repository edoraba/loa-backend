import express, { Express, Request, Response } from "express";
import connectDB from "./config/db";
import bodyParser from "body-parser";
import cors from "cors";

const app: Express = express();

app.use(cors({
  origin: ['https://loa-hazel.vercel.app', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
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