import { authRouter } from "./auth.routes";
import { userRouter } from "./user.routes";

const router = {
    user: userRouter,
    auth: authRouter
}

export default router;