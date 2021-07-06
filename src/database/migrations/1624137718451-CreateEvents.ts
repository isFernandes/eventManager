import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEvents1624137718451 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "events",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "event_creator_id",
            type: "uuid",
          },
          {
            name: "speaker_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "place_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "description",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "event_date",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "institution_event",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKEventCreator",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["event_creator_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKSpeaker",
            referencedTableName: "speakers",
            referencedColumnNames: ["id"],
            columnNames: ["speaker_id"],
            onUpdate: "CASCADE",
          },
          {
            name: "FKPlace",
            referencedTableName: "places",
            referencedColumnNames: ["id"],
            columnNames: ["place_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("events");
  }
}
