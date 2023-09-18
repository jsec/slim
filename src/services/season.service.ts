import { type DeleteResult } from 'kysely';
import { ResultAsync } from 'neverthrow';

import { db } from '../db';
import { type Season } from '../db/schema';

function getSeasonById(id: number): ResultAsync<Season, unknown> {
  const query = db.selectFrom('season').selectAll().where('id', '=', id).executeTakeFirstOrThrow();

  return ResultAsync.fromPromise(query, err => err);
}

function deleteSeasonById(id: number): ResultAsync<DeleteResult, unknown> {
  const query = db.deleteFrom('season').where('id', '=', id).executeTakeFirstOrThrow();
  return ResultAsync.fromPromise(query, err => err);
}

export { deleteSeasonById, getSeasonById };
