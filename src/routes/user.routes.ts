import { Router } from "express";
import { UserController } from "../controllers/UserController";

const userRouter = Router();

const userController = new UserController();

userRouter.post("/eventCreator", userController.createEventCreator);

userRouter.post("/eventParticipant", userController.createEventParticipant);

userRouter.delete("/:id", userController.deleteUser);

userRouter.put("/:id", userController.updateUser);

userRouter.get("/:id", userController.getUser);

userRouter.get("/", userController.getAllUsers);

export { userRouter };