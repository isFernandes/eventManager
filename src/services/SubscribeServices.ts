import { getCustomRepository } from "typeorm";
import { EventParticipantsRepository } from "../repositories/EventParticipantRepository";

class SubscribeService {
  private subscriberRepository = getCustomRepository(
    EventParticipantsRepository
  );

  async foundedAllSubscribe(participant_id: string) {
    return await this.subscriberRepository.find({
      where: { participant_id },
    });
  }

  async foundedSpecificSubscribe(participant_id: string, event_id: string) {
    return await this.subscriberRepository.findOne({
      where: { event_id, participant_id },
    });
  }

  async execute(participant_id: string, event_id: string) {
    const subscribeObj = this.subscriberRepository.create({
      participant_id,
      event_id,
    });

    return await this.saveSubscriber(subscribeObj);
  }

  async saveSubscriber(subscribeObject: object) {
    return await this.subscriberRepository
      .save(subscribeObject)
      .then(() => {
        return true;
      })
      .catch((e) => {
        console.log(e);
        return false;
      });
  }

  async removeSubscribe(subscribeId: string) {
    return await this.subscriberRepository
      .delete({ id: subscribeId })
      .then(() => {
        return true;
      })
      .catch((e) => {
        console.log(e);
        return false;
      });
  }
}

export { SubscribeService };
