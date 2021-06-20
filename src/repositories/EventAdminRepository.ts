import { EntityRepository, Repository } from "typeorm";
import { EventAdminModel } from "../models/EventAdminModel";

@EntityRepository(EventAdminModel)
class EventsAdminRespository extends Repository<EventAdminModel>{ }

export { EventsAdminRespository }