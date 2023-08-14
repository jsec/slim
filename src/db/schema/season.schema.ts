import {
    type ColumnType,
    type Generated,
    type Insertable,
    type Selectable,
    type Updateable
} from 'kysely';

export type SeasonTable = {
    id: Generated<number>;
    organizationId: number;
    name: string;
    description: string;
    createdOn: Generated<Date>;
    updatedOn: ColumnType<Date, string | undefined, never>;
};

export type Season = Selectable<SeasonTable>;
export type NewSeason = Insertable<SeasonTable>;
export type SeasonUpdate = Updateable<SeasonTable>;
