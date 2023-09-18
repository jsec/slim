import {
    type ColumnType,
    type Generated,
    type Insertable,
    type Selectable,
    type Updateable
} from 'kysely';

export interface RaceTable {
    id: Generated<number>;
    seasonId: number;
    week: number;
    trackName: string;
    description: string;
    createdOn: Generated<Date>;
    updatedOn: ColumnType<Date, string | undefined, never>;
}

export type Race = Selectable<RaceTable>;
export type NewRace = Insertable<RaceTable>;
export type RaceUpdate = Updateable<RaceTable>;
