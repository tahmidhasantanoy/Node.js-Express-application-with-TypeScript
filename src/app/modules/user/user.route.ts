import express from "express";
import userController from "./user.controller";

const router = express.Router();
router.use(express.json());

router.post("/create-user", userController.createUser);

export const userRouter = router;
