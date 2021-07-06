import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePlaces1624137778502 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "places",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "address",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "number",
            type: "number",
          },
          {
            name: "city",
            type: "varchar",
          },
          {
            name: "district",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("places");
  }
}
