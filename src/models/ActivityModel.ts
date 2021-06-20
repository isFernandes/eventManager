import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity("activities")
class ActivityModel {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    speaker_id: string;

    @Column()
    place_id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    activitie_hour: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}

export { ActivityModel }