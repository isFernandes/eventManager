import { getCustomRepository } from "typeorm";
import bcrypt from "bcryptjs";
import { UsersRespository } from "../repositories/UserRepository";

class UserService {
    private usersRepository = getCustomRepository(UsersRespository);

    async foundedAllUsers() {
        return await this.usersRepository.find();
    }

    async foundedUserById(id: string) {
        return await this.usersRepository.findOne({ id });
    }

    async foundedUserByEmail(email: string) {
        return await this.usersRepository.findOne({ email });
    }

    async verifyExisitingUser(email: string) {
        const alredyUserExists = await this.foundedUserByEmail(email);

        if (alredyUserExists) return true;

        return false;
    }

    async createUser(userObj: object) {
        const createdUser = this.usersRepository.create(userObj);

        await this.saveDataUser(createdUser);

        if (createdUser) return true;

        return false;
    }

    async saveDataUser(userObj: object) {
        return await this.usersRepository.save(userObj).then(() => {
            return true;
        }).catch(() => {
            return false;
        });
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

    async validateBodyContent(value: string | boolean, compare: string | boolean) {
        if (
            value !== compare &&
            value !== null &&
            value !== ' ' &&
            value !== '' &&
            value !== undefined
        ) {
            return true;
        }

        return false;
    }
}

export { UserService }