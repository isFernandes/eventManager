import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRespository } from "../repositories/UserRepository";
import { UserService } from "../services/UserServices";

class AuthController {
  async singup(request: Request, response: Response) {
    const { username, email, password, bio, institution, isStudent } =
      request.body;

    const usersRepository = getCustomRepository(UsersRespository);
    const userService = new UserService();

    if (await userService.foundedUserByEmail(email)) {
      return response.status(400).json({ message: "Usuário já existente!" });
    }

    const user = usersRepository.create({
      username,
      email,
      password: userService.hashPasswordUser(password),
      bio,
      institution,
      isStudent,
    });

    await usersRepository.save(user);

    response.status(201).json({
      username,
      email,
      bio,
      institution,
      isStudent,
    });
  }

  async signin(request: Request, response: Response) {
    const { username, email, password, bio, isStudent } = request.body;

    const usersRepository = getCustomRepository(UsersRespository);
    const userService = new UserService();

    if (await userService.foundedUserByEmail(email)) {
      return response.status(400).json({ message: "Usuário já existente!" });
    }

    const user = usersRepository.create({
      username,
      email,
      password: userService.hashPasswordUser(password),
      bio,
      isStudent,
    });

    await usersRepository.save(user);

    response.status(201).json({
      username,
      email,
      bio,
    });
  }
}

export { AuthController };
