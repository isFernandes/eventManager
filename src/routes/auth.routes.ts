import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

const authRouter = Router();

const authController = new AuthController();

// authRouter.post("/eventCreator", authController.singup);
// authRouter.post("/eventParticipant", authController.signin);

export { authRouter };
