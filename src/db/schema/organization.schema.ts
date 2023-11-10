import {
  type ColumnType,
  type Generated,
  type Insertable,
  type Selectable,
  type Updateable
} from 'kysely';

export type OrganizationTable = {
  createdOn: Generated<Date>;
  description: string;
  email: string;
  id: Generated<number>;
  name: string;
  updatedOn: ColumnType<Date, string | undefined, never>;
};

export type Organization = Selectable<OrganizationTable>;
export type NewOrganization = Insertable<OrganizationTable>;
export type OrganizationUpdate = Updateable<OrganizationTable>;
