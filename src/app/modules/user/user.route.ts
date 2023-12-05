import express from "express";
import userController from "./user.controller";

const router = express.Router();
router.use(express.json());

router.post("/", userController.createUser);

router.get("/", userController.getAllUsers);

router.get("/:userId", userController.getSingleUser);

router.delete("/:userId",userController.deleteAUser)

export const userRouters = router;
