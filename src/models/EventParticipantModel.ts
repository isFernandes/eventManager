import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { EventModel } from "./EventModel";
import { UserModel } from "./UserModel";

@Entity("event_participants")
class EventParticipantModel {
  @PrimaryColumn()
  readonly id: string;

  @ManyToOne(() => EventModel)
  @JoinColumn({ name: "participant_id" })
  participant: UserModel;

  @Column()
  participant_id: string;

  @Column()
  event_id: string;

  @ManyToOne(() => EventModel)
  @JoinColumn({ name: "event_id" })
  event: EventModel;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { EventParticipantModel };
