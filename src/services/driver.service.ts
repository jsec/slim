import { type DeleteResult } from 'kysely';
import { ResultAsync } from 'neverthrow';

import { db } from '../db';
import { type Driver } from '../db/schema';

function getDriverById(id: number): ResultAsync<Driver, unknown> {
  const promise = db
    .selectFrom('driver')
    .selectAll()
    .where('id', '=', id)
    .executeTakeFirstOrThrow();

  return ResultAsync.fromPromise(promise, err => err);
}

function deleteDriverById(id: number): ResultAsync<DeleteResult, unknown> {
  const promise = db.deleteFrom('driver').where('id', '=', id).executeTakeFirstOrThrow();

  return ResultAsync.fromPromise(promise, err => err);
}

export { deleteDriverById, getDriverById };
