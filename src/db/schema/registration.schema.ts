import {
  type ColumnType,
  type Generated,
  type Insertable,
  type Selectable,
  type Updateable
} from 'kysely';

export type RegistrationTable = {
  createdOn: Generated<Date>;
  driverId: number;
  driverNumber: number;
  id: Generated<number>;
  seasonId: number;
  updatedOn: ColumnType<Date, string | undefined, never>;
};

export type Registration = Selectable<RegistrationTable>;
export type NewRegistration = Insertable<RegistrationTable>;
export type RegistrationUpdate = Updateable<RegistrationTable>;
