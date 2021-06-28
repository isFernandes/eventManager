import { Request, Response } from "express";
import { UserService } from "../services/UserServices";

class UserController {
    async createEventCreator(request: Request, response: Response) {
        const userService = new UserService();

        const { username, email, password, bio, institution, isStudent } = request.body;

        if (await userService.verifyExisitingUser(email)) {
            return response.status(400).json({ message: "Usuário já existente!" })
        }

        const user = {
            username,
            email,
            password: userService.hashPasswordUser(password),
            bio,
            institution,
            isStudent
        }

        if (!await userService.createUser(user)) {
            return response.status(500).json({
                message: "Não foi possivel criar o usuário"
            });
        };

        return response.status(201).json({
            username, email, bio, institution, isStudent
        });
    }

    async getAllUsers(request: Request, response: Response) {
        const userService = new UserService();

        const allUser = await userService.foundedAllUsers()

        return response.status(200).json(allUser)
    }

    async getUser(request: Request, response: Response) {
        const userService = new UserService();
        const { id } = request.params;
        const user = await userService.foundedUserById(id);

        return response.status(200).json(user)
    }

    async createEventParticipant(request: Request, response: Response) {
        const userService = new UserService();

        const { username, email, password, bio, isStudent } = request.body;

        if (await userService.verifyExisitingUser(email)) {
            return response.status(400).json({ message: "Usuário já existente!" })
        }

        const user = {
            username,
            email,
            password: userService.hashPasswordUser(password),
            bio,
            isStudent
        }

        if (!await userService.createUser(user)) {
            return response.status(500).json({
                message: "Não foi possivel criar o usuário"
            });
        };

        return response.status(201).json({
            username, email, bio
        });
    }

    async deleteUser(request: Request, response: Response) {
        const userService = new UserService();

        const { id } = request.params;

        if (!await userService.foundedUserById(id)) {
            return response.status(400).json({ message: "Usuário não encontrado!" })
        }

        if (!await userService.delete(id)) {
            return response.status(500).json({ message: "Não foi possivel deletar usuário!" })
        }

        return response.status(200).json({ message: "Usuário deletado!" })
    }

    async updateUser(request: Request, response: Response) {
        const userService = new UserService();

        const { id } = request.params;
        const { username, email, bio, institution, isStudent } = request.body;

        const foundedUser = await userService.foundedUserById(id);

        if (!foundedUser) {
            return response.status(400).json({ message: "Usuário não encontrado!" })
        }

        if (userService.validateBodyContent(username, foundedUser.username)) {
            foundedUser.username = username;
        }
        if (userService.validateBodyContent(email, foundedUser.email)) {
            foundedUser.email = email;
        }
        if (userService.validateBodyContent(bio, foundedUser.bio)) {
            foundedUser.bio = bio;
        }
        if (userService.validateBodyContent(institution, foundedUser.institution)) {
            foundedUser.institution = institution;
        }
        if (userService.validateBodyContent(isStudent, foundedUser.isStudent)) {
            foundedUser.isStudent = isStudent;
        }

        if (!await userService.saveDataUser(foundedUser)) {
            return response.status(500).json({ message: "Não Foi possivel atualizar usuário!" })
        }

        return response.status(200).json({ message: "Usuário atualizado com sucesso!" })
    }

}

export { UserController }