import {
    type ColumnType,
    type Generated,
    type Insertable,
    type Selectable,
    type Updateable
} from 'kysely';

export type DriverTable = {
    id: Generated<number>;
    firstName: string;
    lastName: string;
    // TODO: Extract this into an array
    // Potentially a pivot table, driver_identifiers?
    // driver_id, external_id, source
    externalIds: string;
    createdOn: Generated<Date>;
    updatedOn: ColumnType<Date, string | undefined, never>;
};

export type Driver = Selectable<DriverTable>;
export type NewDriver = Insertable<DriverTable>;
export type DriverUpdate = Updateable<DriverTable>;
