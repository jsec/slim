import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';

import { type Database } from './schema';

export const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool({
      database: 'slim',
      host: 'localhost',
      password: 'postgres',
      port: 5432,
      user: 'postgres'
    })
  })
});
