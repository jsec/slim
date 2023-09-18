import {
    type ColumnType,
    type Generated,
    type Insertable,
    type Selectable,
    type Updateable
} from 'kysely';

export interface DriverIdentifierTable {
    id: Generated<number>;
    driverId: number;
    identifier: string;
    source: string;
    createdOn: Generated<Date>;
    updatedOn: ColumnType<Date, string | undefined, never>;
}

export type DriverIdentifier = Selectable<DriverIdentifierTable>;
export type NewDriverIdentifier = Insertable<DriverIdentifierTable>;
export type DriverIdentifierUpdate = Updateable<DriverIdentifierTable>;
