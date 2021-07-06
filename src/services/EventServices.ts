import { getCustomRepository } from "typeorm";
import { EventsRepository } from "../repositories/EventRepository";

class EventService {
  private EventRepository = getCustomRepository(EventsRepository);

  //servico traz todos os eventos
  async foundedAllEvents() {
    return await this.EventRepository.find();
  }

  //servico retorna o evento localizado pelo id
  async foundedEventById(id: string) {
    //retorna evento localizado
    return await this.EventRepository.findOne({ id });
  }

  async createEvent(eventObj: object) {
    //cria o evento
    const createdEvent = this.EventRepository.create(eventObj);

    const savedEvent = await this.saveDataEvent(createdEvent);

    if (savedEvent) {
      return createdEvent;
    }

    return false;
    //salva os dados do evento retornado com o create e retorna sucesso ou erro
  }

  async saveDataEvent(EventObj: object) {
    //salva os dados na base e retorna sucesso ou erro
    return await this.EventRepository.save(EventObj)
      .then(() => {
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }

  async delete(EventId: string) {
    //deleta e retorna diretamente o sucesso ou erro do evento deletado
    return await this.EventRepository.delete({ id: EventId })
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

export { EventService };
