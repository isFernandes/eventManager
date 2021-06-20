import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity("event_activities")
class EventActivityModel {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    event_id: string;

    @Column()
    activity_id: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}

export { EventActivityModel }