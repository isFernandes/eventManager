import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRespository } from "../repositories/UserRepository";
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

        if (!await userService.delete(id)) {
            return response.status(500).json({ message: "Não foi possivel deletar usuário!" })
        }

        return response.status(200).json({ message: "Usuário deletado!" })
    }

    async updateUser(request: Request, response: Response) {
        const userService = new UserService();

        const { id } = request.params;
        const { username, email, password, bio, institution, isStudent } = request.body;


        // if (!await userService.delete(id)) {
        //     return response.status(500).json({ message: "Não foi possivel deletar usuário!" })
        // }

        // return response.status(200).json({ message: "Usuário deletado!" })
    }

}

export { UserController }