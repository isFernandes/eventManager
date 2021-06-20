import { EntityRepository, Repository } from "typeorm";
import { ActivityModel } from "../models/ActivityModel";

@EntityRepository(ActivityModel)
class ActivitiesRespository extends Repository<ActivityModel>{ }

export { ActivitiesRespository }