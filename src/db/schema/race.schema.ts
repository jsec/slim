import {
  type ColumnType,
  type Generated,
  type Insertable,
  type Selectable,
  type Updateable
} from 'kysely';

export type RaceTable = {
  createdOn: Generated<Date>;
  description: string;
  id: Generated<number>;
  seasonId: number;
  trackName: string;
  updatedOn: ColumnType<Date, string | undefined, never>;
  week: number;
};

export type Race = Selectable<RaceTable>;
export type NewRace = Insertable<RaceTable>;
export type RaceUpdate = Updateable<RaceTable>;
