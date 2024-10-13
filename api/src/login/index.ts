import express from "express";
import { loginUser, register } from "./handlers/loginUser";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    console.log(userName, password);
    const data = await register(userName, password);
    console.log(data);
    res.send("ok");
  } catch (error) {
    res.send("Something went wrong");
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    console.log(userName, password);
    const data = await loginUser(userName, password);
    console.log(data);
    const token = jwt.sign({ userName: data }, process.env.SECRET as string, {
      expiresIn: 60 * 60,
    });
    res.json(token);
  } catch (error) {
    res.send("Something went wrong");
  }
});

export { router };
