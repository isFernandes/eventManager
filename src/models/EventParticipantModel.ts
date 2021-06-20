import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity("event_participants")
class EventParticipantModel {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    userparticipant_idname: string;

    @Column()
    event_id: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}

export { EventParticipantModel }