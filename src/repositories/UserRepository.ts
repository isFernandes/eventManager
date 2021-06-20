import { EntityRepository, Repository } from "typeorm";
import { UserModel } from "../models/UserModel";

@EntityRepository(UserModel)
class UsersRespository extends Repository<UserModel>{ }

export { UsersRespository }