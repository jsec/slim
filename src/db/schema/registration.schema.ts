import {
    type ColumnType,
    type Generated,
    type Insertable,
    type Selectable,
    type Updateable
} from 'kysely';

export interface RegistrationTable {
    id: Generated<number>;
    seasonId: number;
    driverId: number;
    driverNumber: number;
    createdOn: Generated<Date>;
    updatedOn: ColumnType<Date, string | undefined, never>;
}

export type Registration = Selectable<RegistrationTable>;
export type NewRegistration = Insertable<RegistrationTable>;
export type RegistrationUpdate = Updateable<RegistrationTable>;
