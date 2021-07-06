import { Router } from "express";
import { EventController } from "../controllers/EventController";

const eventRouter = Router();

const eventController = new EventController();

eventRouter.post("/event/:id", eventController.createEvent);

eventRouter.delete("/event/:id", eventController.deleteEvent);

eventRouter.put("/event/:id", eventController.updateEvent);

eventRouter.get("/event/:id", eventController.getEvent);

eventRouter.get("/events/all", eventController.getAllEvents);

export { eventRouter };
