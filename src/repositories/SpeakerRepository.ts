import { EntityRepository, Repository } from "typeorm";
import { SpeakerModel } from "../models/SpeakerModel";

@EntityRepository(SpeakerModel)
class SpeakersRespository extends Repository<SpeakerModel>{ }

export { SpeakersRespository }