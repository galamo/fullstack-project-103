import express from "express";
import dotenv from "dotenv";
import { router as customersRouter } from "./customers";
import { router as loginRouter } from "./login";
import jwt from "jsonwebtoken";

import bodyParser from "body-parser";
import cors from "cors";
dotenv.config();
const app = express();
console.log("Application Start");
app.use(cors());
app.use(bodyParser.json());

app.get("/health-check", (req, res, next) => {
  return res.json({ message: "Server is up - Docker/Not" });
});

app.use("/customers", customersRouter);
app.use("/auth", loginRouter);

app.use(authenticate);

export default function authenticate(req: any, res: any, next: any) {
  const token = getTokenFromHeaders(req);
  if (!token) return res.status(401).json({ message: "Unauthorized!" });
  const decoded = jwt.verify(token, process.env.SECRET as string);
  if (decoded) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized!" });
  }
}

export function getTokenFromHeaders(req: any) {
  return req.headers.authorization as string;
}

app.get("/protected", (req, res, next) => {
  res.send("I AM PROTECTED ROUTE");
});

app.listen(process.env.PORT, () => {
  console.log(`Application Listen to Port: ${process.env.PORT}`);
});
