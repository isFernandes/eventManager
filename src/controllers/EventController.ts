import { Request, Response } from "express";
import { EventService } from "../services/EventServices";
import { UserService } from "../services/UserServices";

class EventController {
  //cria um evento capaz de criar eventos.
  async createEvent(request: Request, response: Response) {
    //instanciando servico para uso
    const eventService = new EventService();
    const userService = new UserService();

    //trazendo os dados do front
    const { name, description, event_date, institution_event } = request.body;
    const { id } = request.params;

    const eventCreator = await userService.foundedUserById(id);

    if (!eventCreator) {
      return response.status(400).json({ message: "Usuário não encontrado" });
    }

    const event = {
      event_creator_id: id,
      name,
      description,
      event_date,
      institution_event,
    };

    const createdEvent = await eventService.createEvent(event);
    //criando evento e respondendo de acordo com retorno, acesse a funcao createEvent
    if (!createdEvent) {
      return response.status(500).json({
        message: "Não foi possivel criar o Evento",
      });
    }

    //Caso sucesso retorna esse objeto
    return response.status(201).json({
      name,
      description,
      event_date,
      institution_event,
    });
  }

  //traz todos os eventos do sistema
  async getAllEvents(request: Request, response: Response) {
    const eventService = new EventService();

    //servico traz todos os eventos em array
    const allEvent = await eventService.foundedAllEvents();

    return response.status(200).json(allEvent);
  }

  async getEvent(request: Request, response: Response) {
    const eventService = new EventService();

    const { id } = request.params;

    //retorna evento encontrado de acordo com id
    const Event = await eventService.foundedEventById(id);

    return response.status(200).json(Event);
  }

  async deleteEvent(request: Request, response: Response) {
    const eventService = new EventService();

    const { id } = request.params;

    //verificando se é um evento existente
    if (!(await eventService.foundedEventById(id))) {
      return response.status(400).json({ message: "Usuário não encontrado!" });
    }

    //funcao que deleta evento, acessar funcao
    if (!(await eventService.delete(id))) {
      return response
        .status(500)
        .json({ message: "Não foi possivel deletar usuário!" });
    }

    return response.status(200).json({ message: "Usuário deletado!" });
  }

  //atualizacao de evento
  async updateEvent(request: Request, response: Response) {
    const eventService = new EventService();

    //parametros enviados juntos com a requisicao
    const { id } = request.params;
    const { name, description, event_date, institution_event } = request.body;

    //localiza evento
    const foundedEvent = await eventService.foundedEventById(id);

    if (!foundedEvent) {
      return response.status(400).json({ message: "Evento não encontrado!" });
    }

    //funcao que valida se valor enviado é valido
    if (eventService.validateBodyContent(name, foundedEvent.name)) {
      foundedEvent.name = name;
    }
    if (
      eventService.validateBodyContent(description, foundedEvent.description)
    ) {
      foundedEvent.description = description;
    }
    if (eventService.validateBodyContent(event_date, foundedEvent.event_date)) {
      foundedEvent.event_date = event_date;
    }
    if (
      eventService.validateBodyContent(
        institution_event,
        foundedEvent.institution_event
      )
    ) {
      foundedEvent.institution_event = institution_event;
    }

    //essa funcao salva o evento enviando o objeto do evento localizado anteriormente
    if (!(await eventService.saveDataEvent(foundedEvent))) {
      return response
        .status(500)
        .json({ message: "Não Foi possivel atualizar evento!" });
    }

    return response
      .status(200)
      .json({ message: "Evento atualizado com sucesso!" });
  }
}

export { EventController };
