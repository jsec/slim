import { type DeleteResult, type NoResultError } from 'kysely';
import { ResultAsync } from 'neverthrow';

import { db } from '../db';
import { type Driver } from '../db/schema';

function getDriverById(id: number): ResultAsync<Driver, NoResultError> {
    const promise = db
        .selectFrom('driver')
        .selectAll()
        .where('id', '=', id)
        .executeTakeFirstOrThrow();

    return ResultAsync.fromPromise(promise, err => err as NoResultError);
}

function deleteDriverById(id: number): ResultAsync<DeleteResult, NoResultError> {
    const promise = db.deleteFrom('driver').where('id', '=', id).executeTakeFirstOrThrow();

    return ResultAsync.fromPromise(promise, err => err as NoResultError);
}

export { deleteDriverById, getDriverById };
