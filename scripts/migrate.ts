import { promises as fs } from 'fs';
import { FileMigrationProvider, Kysely, Migrator, PostgresDialect } from 'kysely';
import { run } from 'kysely-migration-cli';
import path from 'path';
import { Pool } from 'pg';

import { type Database } from '../src/db/schema';

const db = new Kysely<Database>({
    dialect: new PostgresDialect({
        pool: new Pool({
            host: 'localhost',
            database: 'slim',
            port: 5432,
            user: 'postgres',
            password: 'postgres'
        })
    })
});

const migrator = new Migrator({
    db,
    provider: new FileMigrationProvider({
        fs,
        path,
        migrationFolder: path.join(__dirname, '../migrations')
    })
});

run(db, migrator);
