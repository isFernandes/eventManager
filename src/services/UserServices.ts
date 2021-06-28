import { getCustomRepository } from "typeorm";
import bcrypt from "bcryptjs";
import { UsersRespository } from "../repositories/UserRepository";

class UserService {
    private usersRepository = getCustomRepository(UsersRespository);

    async verifyExisitingUser(email: string) {
        const alredyUserExists = await this.usersRepository.findOne({ email });

        if (alredyUserExists) return true;

        return false;
    }

    async createUser(userObj: object) {
        const createdUser = this.usersRepository.create(userObj);

        await this.usersRepository.save(createdUser);

        if (createdUser) return true;

        return false;
    }

    hashPasswordUser(password: string) {
        return bcrypt.hashSync(password, 10);
    }

    async delete(userId: string) {
        const deletedUser = await this.usersRepository.delete({ id: userId }).then(() => {
            return true;
        }).catch(() => {
            return false;
        });
        return deletedUser;
    }

    async validateBodyContent() {

    }
}

export { UserService }