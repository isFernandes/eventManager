import { Router } from "express";
import { SubscribeController } from "../controllers/SubscribeController";
import { UserController } from "../controllers/UserController";

const userRouter = Router();

const userController = new UserController();
const subscribeController = new SubscribeController();

//rotas exclusivas de usuario
userRouter.post("/eventCreator", userController.createEventCreator);

userRouter.post("/eventParticipant", userController.createEventParticipant);

userRouter.delete("/delete/user/:id", userController.deleteUser);

userRouter.put("/update/user/:id", userController.updateUser);

userRouter.get("/user/:id", userController.getUser);

userRouter.get("/all/users", userController.getAllUsers);

//rotas relacionadas a usuarios
userRouter.post("/user/subscribe", subscribeController.subscribe);

userRouter.get("/user/subscribe/all/:userId", subscribeController.listAll);

userRouter.delete("/user/subscribe/:userId", subscribeController.removeSub);

export { userRouter };
