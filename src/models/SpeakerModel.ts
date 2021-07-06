import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { EventModel } from "./EventModel";

@Entity("speakers")
class SpeakerModel {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  payment: boolean;

  @Column()
  payment_value: number;

  @Column()
  institution: string;

  @Column()
  bio: string;

  @OneToMany(() => EventModel, (speaker) => SpeakerModel)
  events: EventModel[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { SpeakerModel };
