import { EntityRepository, Repository } from "typeorm";
import { EventParticipantModel } from "../models/EventParticipantModel";

@EntityRepository(EventParticipantModel)
class EventParticipantsRepository extends Repository<EventParticipantModel> {}

export { EventParticipantsRepository };
