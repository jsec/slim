import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';

import { type Database } from './schema';

export const db = new Kysely<Database>({
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
