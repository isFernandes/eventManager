import { Router } from "express";
import { UserController } from "../controllers/UserController";

const userRouter = Router();

const userController = new UserController();

userRouter.post("/eventCreator", userController.createEventCreator);
userRouter.post("/eventParticipant", userController.createEventParticipant);
userRouter.delete("/:id", userController.deleteUser);

export { userRouter };