import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEventActivities1624142253337 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "event_activities",
                columns: [{
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                }, {
                    name: "event_id",
                    type: "uuid",
                },
                {
                    name: "activity_id",
                    type: "uuid",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                ],
                foreignKeys: [{
                    name: "FKEvent",
                    referencedTableName: "events",
                    referencedColumnNames: ["id"],
                    columnNames: ["event_id"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }, {
                    name: "FKActivity",
                    referencedTableName: "activities",
                    referencedColumnNames: ["id"],
                    columnNames: ["activity_id"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("eventActivities");
    }

}
