/* eslint-disable no-unused-vars */
import express, { Request, Response } from "express";
const app = express();
// require("dotenv").config();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dotenv from "dotenv";
import cors from "cors";
import { userRouters } from "./app/modules/user/user.route";

// parser
app.use(express.json());
app.use(cors());

app.use("/api/users", userRouters);

app.get("/", (req: Request, res: Response) => {
  res.send("Sending response to Node.js Express application");
});

// console.log(process.cwd()); //not show cwd

export default app;
