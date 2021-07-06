import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { EventModel } from "./EventModel";

@Entity("users")
class UserModel {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @Column()
  institution: string;

  @Column()
  bio: string;

  @OneToMany(() => EventModel, (event_creator) => UserModel)
  events: EventModel[];

  @Column()
  isStudent: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { UserModel };
