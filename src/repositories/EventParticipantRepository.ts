import { EntityRepository, Repository } from "typeorm";
import { EventParticipantModel } from "../models/EventParticipantModel";

@EntityRepository(EventParticipantModel)
class EventParticipantsRespository extends Repository<EventParticipantModel>{ }

export { EventParticipantsRespository }