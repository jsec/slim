import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema
        .createTable('organization')
        .addColumn('id', 'uuid', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
        .addColumn('name', 'varchar')
        .addColumn('website', 'varchar')
        .addColumn('contact_email', 'varchar')
        .addColumn('created_on', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
        .addColumn('modified_on', 'timestamp')
        .execute()

    await db.schema
        .createTable('league')
        .addColumn('id', 'uuid', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
        .addColumn('organization_id', 'uuid', (col) =>
            col.references('organization.id').onDelete('cascade').notNull()
        )
        .addColumn('name', 'varchar')
        .addColumn('description', 'varchar')
        .addColumn('class', 'varchar')
        .addColumn('created_on', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
        .addColumn('modified_on', 'timestamp')
        .execute()

    await db.schema
        .createTable('season')
        .addColumn('id', 'uuid', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
        .addColumn('league_id', 'uuid', (col) =>
            col.references('league.id').onDelete('cascade').notNull()
        )
        .addColumn('name', 'varchar')
        .addColumn('description', 'varchar')
        .addColumn('created_on', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
        .addColumn('modified_on', 'timestamp')
        .execute()

    await db.schema
        .createTable('driver')
        .addColumn('id', 'uuid', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
        .addColumn('organization_id', 'uuid', (col) =>
            col.references('organization.id').onDelete('cascade').notNull()
        )
        .addColumn('first_name', 'varchar')
        .addColumn('last_name', 'varchar')
        .addColumn('reference_id', 'varchar')
        .addColumn('created_on', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
        .addColumn('modified_on', 'timestamp')
        .execute()

    await db.schema
        .createTable('registration')
        .addColumn('id', 'uuid', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
        .addColumn('driver_id', 'uuid', (col) =>
            col.references('driver.id').onDelete('cascade').notNull()
        )
        .addColumn('season_id', 'uuid', (col) =>
            col.references('season.id').onDelete('cascade').notNull()
        )
        .addColumn('driver_number', 'int2', (col) => col.notNull())
        .addColumn('created_on', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
        .addColumn('modified_on', 'timestamp')
        .execute()

    await db.schema
        .createTable('race')
        .addColumn('id', 'uuid', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
        // HACK: this should be linked to an event table at some point
        // to support double-headers with individual race ids
        .addColumn('event_id', 'varchar')
        .addColumn('name', 'varchar')
        .addColumn('results', 'varchar')
        .addColumn('replay_link', 'varchar')
        .addColumn('created_on', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
        .addColumn('modified_on', 'timestamp')
        .execute()

    await db.schema
        .createTable('penalty')
        .addColumn('id', 'uuid', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
        .addColumn('name', 'varchar')
        .addColumn('description', 'varchar')
        .addColumn('time_in_seconds', 'int4')
        .addColumn('penalty_points', 'int2')
        .addColumn('created_on', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
        .addColumn('modified_on', 'timestamp')
        .execute()

    await db.schema
        .createTable('incident')
        .addColumn('id', 'uuid', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
        .addColumn('race_id', 'uuid', (col) =>
            col.references('race.id').onDelete('cascade').notNull()
        )
        .addColumn('offending_driver_id', 'uuid', (col) =>
            col.references('driver.id').onDelete('cascade').notNull()
        )
        .addColumn('description', 'text')
        .addColumn('created_on', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
        .addColumn('modified_on', 'timestamp')
        .execute()

    await db.schema
        .createTable('ruling')
        .addColumn('id', 'uuid', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
        .addColumn('incident_id', 'uuid', (col) =>
            col.references('incident.id').onDelete('cascade').notNull()
        )

        // HACK: link to table of users/stewards once created
        .addColumn('steward_id', 'varchar')
        .addColumn('explanation', 'text')
        .addColumn('created_on', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
        .addColumn('modified_on', 'timestamp')
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    const tableNames = [
        'driver',
        'incident',
        'league',
        'organization',
        'penalty',
        'race',
        'registration',
        'ruling',
        'season'
    ];

    await Promise.all(tableNames.map(t => db.schema.dropTable(t).execute()));
}
