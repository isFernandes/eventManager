import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

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

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}

export { SpeakerModel }