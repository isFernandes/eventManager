import { getCustomRepository } from "typeorm";
import bcrypt from "bcryptjs";
import { UsersRespository } from "../repositories/UserRepository";

class UserService {
  private usersRepository = getCustomRepository(UsersRespository);

  //servico traz todos os usuarios
  async foundedAllUsers() {
    return await this.usersRepository.find({ relations: ["events"] });
  }

  //servico retorna o usuario localizado pelo id
  async foundedUserById(id: string) {
    //retorna usuario localizado
    return await this.usersRepository.findOne(
      { id },
      { relations: ["events"] }
    );
  }

  //servico retorna o usuario localizado pelo email
  async foundedUserByEmail(email: string) {
    return await this.usersRepository.findOne({ email });
  }

  async createUser(userObj: object) {
    //cria o usuario
    const createdUser = this.usersRepository.create(userObj);

    //salva os dados do usuario retornado com o create e retorna sucesso ou erro
    return await this.saveDataUser(createdUser);
  }

  async saveDataUser(userObj: object) {
    //salva os dados na base e retorna sucesso ou erro
    return await this.usersRepository
      .save(userObj)
      .then(() => {
        return true;
      })
      .catch((e) => {
        console.log(e);
        return false;
      });
  }

  hashPasswordUser(password: string) {
    //encripta a senha
    return bcrypt.hashSync(password, 10);
  }

  async delete(userId: string) {
    //deleta e retorna diretamente o sucesso ou erro do usuario deletado
    return await this.usersRepository
      .delete({ id: userId })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }

  //campos podem ser string ou boolean, deve ser enviado um capo para comparacao
  async validateBodyContent(
    value: string | boolean,
    compare: string | boolean
  ) {
    //valida os campos enviados, caso nao for valido retorna falso
    if (
      value !== compare &&
      value !== null &&
      value !== " " &&
      value !== "" &&
      value !== undefined
    ) {
      return true;
    }

    return false;
  }
}

export { UserService };
