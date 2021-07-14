import { Request, Response } from "express";
import { UserService } from "../services/UserServices";
import { SubscribeService } from "../services/SubscribeServices";

class SubscribeController {
  async subscribe(request: Request, response: Response) {
    const userService = new UserService();
    const subscribeService = new SubscribeService();
    const { eventId, userId } = request.body;

    if (!(await userService.foundedUserById(userId))) {
      return response.status(400).json({ message: "Usuário não existente!" });
    }

    if (await subscribeService.foundedSpecificSubscribe(userId, eventId)) {
      return response.status(400).json({ message: "Já inscrito neste evento" });
    }

    if (!(await subscribeService.execute(userId, eventId))) {
      return response.status(500).json({ message: "Erro para se inscrever!" });
    }

    return response
      .status(201)
      .json({ message: "Inscricao realizada com sucesso!" });
  }

  async listAll(request: Request, response: Response) {
    const userService = new UserService();
    const subscribeService = new SubscribeService();
    const { userId } = request.params;

    if (!(await userService.foundedUserById(userId))) {
      return response.status(400).json({ message: "Usuário não existente!" });
    }

    const allSubs = await subscribeService.foundedAllSubscribe(userId);

    if (!allSubs) {
      return response.status(500).json({ message: "Erro para se inscrever!" });
    }
    return response.status(201).json({
      allSubscribers: allSubs,
    });
  }

  async removeSub(request: Request, response: Response) {
    const userService = new UserService();
    const subscribeService = new SubscribeService();
    const { userId } = request.params;
    const { eventId } = request.body;

    if (!(await userService.foundedUserById(userId))) {
      return response.status(400).json({ message: "Usuário não existente!" });
    }

    const foundedSub = await subscribeService.foundedSpecificSubscribe(
      userId,
      eventId
    );

    if (await subscribeService.removeSubscribe(foundedSub.id)) {
      return response
        .status(200)
        .json({ message: "Remocao da inscricao realizada com sucesso!" });
    }

    return response
      .status(500)
      .json({ message: "Ocorreu algum problema, tente novamente mais tarde" });
  }
}

export { SubscribeController };
