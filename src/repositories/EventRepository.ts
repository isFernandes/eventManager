import { EntityRepository, Repository } from "typeorm";
import { EventModel } from "../models/EventModel";

@EntityRepository(EventModel)
class EventsRepository extends Repository<EventModel> {}

export { EventsRepository };
