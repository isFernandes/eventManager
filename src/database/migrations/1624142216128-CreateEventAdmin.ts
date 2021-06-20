import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEventAdmin1624142216128 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "event_admin",
                columns: [{
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                }, {
                    name: "event_creator_id",
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
                    name: "FKEventCreator",
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    columnNames: ["event_creator_id"],
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
        await queryRunner.dropTable("eventAdmin")
    }

}
