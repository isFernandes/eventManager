import { EntityRepository, Repository } from "typeorm";
import { EventModel } from "../models/EventModel";

@EntityRepository(EventModel)
class EventsRespository extends Repository<EventModel>{ }

export { EventsRespository }