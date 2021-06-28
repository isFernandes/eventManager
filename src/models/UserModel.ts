import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

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

export { UserModel }