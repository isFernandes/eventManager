import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity("event_admin")
class EventAdminModel {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    event_creator_id: string;

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

export { EventAdminModel }