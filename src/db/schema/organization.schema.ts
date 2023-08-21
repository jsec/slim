import {
    type ColumnType,
    type Generated,
    type Insertable,
    type Selectable,
    type Updateable
} from 'kysely';

export type OrganizationTable = {
    id: Generated<number>;
    name: string;
    description: string;
    email: string;
    createdOn: Generated<Date>;
    updatedOn: ColumnType<Date, string | undefined, never>;
};

export type Organization = Selectable<OrganizationTable>;
export type NewOrganization = Insertable<OrganizationTable>;
export type OrganizationUpdate = Updateable<OrganizationTable>;
