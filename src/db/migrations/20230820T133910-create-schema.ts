/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('organization')
    .addColumn('id', 'uuid', col => col.primaryKey().notNull())
    .addColumn('name', 'varchar', col => col.notNull())
    .addColumn('description', 'varchar')
    .addColumn('email', 'varchar', col => col.notNull())
    .addColumn('created_on', 'timestamptz', col => col.defaultTo(sql`now()`).notNull())
    .addColumn('updated_on', 'timestamptz', col => col.defaultTo(sql`now()`))
    .execute();

  await db.schema
    .createTable('driver')
    .addColumn('id', 'uuid', col => col.primaryKey().notNull())
    .addColumn('first_name', 'varchar', col => col.notNull())
    .addColumn('last_name', 'varchar', col => col.notNull())
    .addColumn('created_on', 'timestamptz', col => col.defaultTo(sql`now()`).notNull())
    .addColumn('updated_on', 'timestamptz', col => col.defaultTo(sql`now()`))
    .execute();

  await db.schema
    .createTable('driver_identifier')
    .addColumn('id', 'uuid', col => col.primaryKey().notNull())
    .addColumn('driver_id', 'uuid', col => col.notNull().references('driver.id'))
    .addColumn('identifier', 'varchar', col => col.notNull())
    .addColumn('source', 'varchar', col => col.notNull())
    .addColumn('created_on', 'timestamptz', col => col.defaultTo(sql`now()`).notNull())
    .addColumn('updated_on', 'timestamptz', col => col.defaultTo(sql`now()`))
    .execute();

  await db.schema
    .createTable('season')
    .addColumn('id', 'uuid', col => col.primaryKey().notNull())
    .addColumn('name', 'varchar', col => col.notNull())
    .addColumn('description', 'varchar')
    .addColumn('organization_id', 'uuid', col =>
      col.notNull().references('organization.id').onDelete('cascade')
    )
    .addColumn('created_on', 'timestamptz', col => col.defaultTo(sql`now()`).notNull())
    .addColumn('updated_on', 'timestamptz', col => col.defaultTo(sql`now()`))
    .execute();

  await db.schema
    .createTable('registration')
    .addColumn('id', 'uuid', col => col.primaryKey().notNull())
    .addColumn('season_id', 'uuid', col => col.notNull().references('season.id'))
    .addColumn('driver_id', 'uuid', col => col.notNull().references('driver.id'))
    .addColumn('driver_number', 'int4', col => col.notNull())
    .addColumn('created_on', 'timestamptz', col => col.defaultTo(sql`now()`).notNull())
    .addColumn('updated_on', 'timestamptz', col => col.defaultTo(sql`now()`))
    .execute();

  await db.schema
    .createTable('race')
    .addColumn('id', 'uuid', col => col.primaryKey().notNull())
    .addColumn('season_id', 'uuid', col => col.notNull().references('season.id'))
    .addColumn('week', 'int8', col => col.notNull())
    .addColumn('track_name', 'varchar', col => col.notNull())
    .addColumn('description', 'varchar')
    .addColumn('created_on', 'timestamptz', col => col.defaultTo(sql`now()`).notNull())
    .addColumn('updated_on', 'timestamptz', col => col.defaultTo(sql`now()`))
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('organization').execute();
  await db.schema.dropTable('driver').execute();
  await db.schema.dropTable('driver_identifier').execute();
  await db.schema.dropTable('season').execute();
  await db.schema.dropTable('registration').execute();
  await db.schema.dropTable('race').execute();
}
