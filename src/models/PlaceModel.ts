import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

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

    @Column()
    district: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}

export { PlaceModel }