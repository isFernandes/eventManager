import { authRouter } from "./auth.routes";
import { eventRouter } from "./event.routes";
import { userRouter } from "./user.routes";

const router = {
  user: userRouter,
  event: eventRouter,
  auth: authRouter,
};

export default router;
