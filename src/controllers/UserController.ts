import { Request, Response } from "express";
import { UserService } from "../services/UserServices";

class UserController {
    //cria um usuario capaz de criar eventos.
    async createEventCreator(request: Request, response: Response) {
        //instanciando servico para uso
        const userService = new UserService();

        //trazendo os dados do front
        const { username, email, password, bio, institution, isStudent } = request.body;

        //verificando existencia do usuario
        if (await userService.foundedUserByEmail(email)) {
            return response.status(400).json({ message: "Usuário já existente!" })
        }

        const user = {
            username,
            email,
            password: userService.hashPasswordUser(password)/**criptografando senha */,
            bio,
            institution,
            isStudent
        }

        //criando usuario e respondendo de acordo com retorno, acesse a funcao createUser
        if (!await userService.createUser(user)) {
            return response.status(500).json({
                message: "Não foi possivel criar o usuário"
            });
        };

        //Caso sucesso retorna esse objeto
        return response.status(201).json({
            username, email, bio, institution, isStudent
        });
    }

    //traz todos os usuarios do sistema
    async getAllUsers(request: Request, response: Response) {
        const userService = new UserService();

        //servico traz todos os usuarios em array
        const allUser = await userService.foundedAllUsers()

        return response.status(200).json(allUser)
    }

    async getUser(request: Request, response: Response) {
        const userService = new UserService();

        const { id } = request.params;

        //retorna usuario encontrado de acordo com id
        const user = await userService.foundedUserById(id);

        return response.status(200).json(user)
    }

    //funcao cria participante de evento
    async createEventParticipant(request: Request, response: Response) {
        const userService = new UserService();

        const { username, email, password, bio, isStudent } = request.body;

        if (await userService.foundedUserByEmail(email)) {
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

        //verificando se é um usuario existente
        if (!await userService.foundedUserById(id)) {
            return response.status(400).json({ message: "Usuário não encontrado!" })
        }

        //funcao que deleta usuario, acessar funcao
        if (!await userService.delete(id)) {
            return response.status(500).json({ message: "Não foi possivel deletar usuário!" })
        }

        return response.status(200).json({ message: "Usuário deletado!" })
    }

    //atualizacao de usuario
    async updateUser(request: Request, response: Response) {
        const userService = new UserService();

        //parametros enviados juntos com a requisicao
        const { id } = request.params;
        const { username, email, bio, institution, isStudent } = request.body;

        //localiza usuario
        const foundedUser = await userService.foundedUserById(id);

        if (!foundedUser) {
            return response.status(400).json({ message: "Usuário não encontrado!" })
        }

        //funcao que valida se valor enviado é valido
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

        //essa funcao salva o usuario enviando o objeto do usuario localizado anteriormente
        if (!await userService.saveDataUser(foundedUser)) {
            return response.status(500).json({ message: "Não Foi possivel atualizar usuário!" })
        }

        return response.status(200).json({ message: "Usuário atualizado com sucesso!" })
    }

}

export { UserController }