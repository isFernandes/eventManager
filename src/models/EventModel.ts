import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { PlaceModel } from "./PlaceModel";
import { SpeakerModel } from "./SpeakerModel";
import { UserModel } from "./UserModel";

@Entity("events")
class EventModel {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  institution_event: string;

  @ManyToOne(() => UserModel, (events) => EventModel)
  @JoinColumn({ name: "event_creator_id" })
  event_creator: UserModel;

  @Column()
  speaker_id: string;

  @Column()
  place_id: string;

  @Column()
  event_creator_id: string;

  @Column({ type: "date" })
  event_date: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { EventModel };
