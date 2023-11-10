import {
  type ColumnType,
  type Generated,
  type Insertable,
  type Selectable,
  type Updateable
} from 'kysely';

export type DriverTable = {
  createdOn: Generated<Date>;
  externalIds: string;
  firstName: string;
  id: Generated<number>;
  lastName: string;
  updatedOn: ColumnType<Date, string | undefined, never>;
};

export type Driver = Selectable<DriverTable>;
export type NewDriver = Insertable<DriverTable>;
export type DriverUpdate = Updateable<DriverTable>;
