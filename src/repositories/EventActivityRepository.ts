import { EntityRepository, Repository } from "typeorm";
import { EventActivityModel } from "../models/EventActivitiesModel";

@EntityRepository(EventActivityModel)
class EventActivitiesRespository extends Repository<EventActivityModel>{ }

export { EventActivitiesRespository }