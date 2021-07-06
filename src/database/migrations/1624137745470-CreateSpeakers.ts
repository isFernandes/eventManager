import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSpeakers1624137745470 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "speakers",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "bio",
            type: "varchar",
          },
          {
            name: "institution",
            type: "varchar",
          },
          {
            name: "payment",
            type: "boolean",
            isNullable: false,
          },
          {
            name: "payment_value",
            type: "number",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("speakers");
  }
}
