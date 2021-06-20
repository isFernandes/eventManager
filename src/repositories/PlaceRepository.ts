import { EntityRepository, Repository } from "typeorm";
import { PlaceModel } from "../models/PlaceModel";

@EntityRepository(PlaceModel)
class PlacesRespository extends Repository<PlaceModel>{ }

export { PlacesRespository }