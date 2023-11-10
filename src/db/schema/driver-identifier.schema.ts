import {
  type ColumnType,
  type Generated,
  type Insertable,
  type Selectable,
  type Updateable
} from 'kysely';

export type DriverIdentifierTable = {
  createdOn: Generated<Date>;
  driverId: number;
  id: Generated<number>;
  identifier: string;
  source: string;
  updatedOn: ColumnType<Date, string | undefined, never>;
};

export type DriverIdentifier = Selectable<DriverIdentifierTable>;
export type NewDriverIdentifier = Insertable<DriverIdentifierTable>;
export type DriverIdentifierUpdate = Updateable<DriverIdentifierTable>;
