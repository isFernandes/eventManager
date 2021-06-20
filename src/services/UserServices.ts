import { getCustomRepository } from "typeorm";
import bcrypt from "bcryptjs";
import { UsersRespository } from "../repositories/UserRepository";

class UserService {
    async verifyExisitingUser(email: string) {
        const usersRepository = getCustomRepository(UsersRespository);

        const alredyUserExists = await usersRepository.findOne({ email });

        if (alredyUserExists) return true;

        return false;
    }

    hashPasswordUser(password: string) {
        const hashPass = bcrypt.hashSync(password, 10);
        return hashPass;
    }
}

export { UserService }