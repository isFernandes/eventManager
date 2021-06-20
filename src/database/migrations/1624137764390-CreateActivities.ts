import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateActivities1624137764390 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "activities",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "speaker_id",
                        type: "uuid",
                    },
                    {
                        name: "place_id",
                        type: "uuid",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "activitie_hour",
                        type: "string",
                        isNullable: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys: [{
                    name: "FKSpeaker",
                    referencedTableName: "speakers",
                    referencedColumnNames: ["id"],
                    columnNames: ["speaker_id"],
                    onUpdate: "CASCADE"
                }, {
                    name: "FKPlace",
                    referencedTableName: "places",
                    referencedColumnNames: ["id"],
                    columnNames: ["place_id"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("activities")
    }

}
