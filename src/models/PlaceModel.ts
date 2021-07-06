import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { EventModel } from "./EventModel";

@Entity("places")
class PlaceModel {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  address: string;

  @Column()
  number: number;

  @Column()
  city: string;

  @OneToMany(() => EventModel, (place) => PlaceModel)
  events: EventModel[];

  @Column()
  district: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { PlaceModel };
