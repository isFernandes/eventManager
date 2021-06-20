import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEventParticipant1624142200955 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "event_participants",
                columns: [{
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                }, {
                    name: "participant_id",
                    type: "uuid",
                },
                {
                    name: "event_id",
                    type: "uuid",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                ],
                foreignKeys: [{
                    name: "FKUser",
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    columnNames: ["participant_id"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }, {
                    name: "FKEvent",
                    referencedTableName: "events",
                    referencedColumnNames: ["id"],
                    columnNames: ["event_id"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("eventParticipants")
    }

}
