import {
  type ColumnType,
  type Generated,
  type Insertable,
  type Selectable,
  type Updateable
} from 'kysely';

export type SeasonTable = {
  createdOn: Generated<Date>;
  description: string;
  id: Generated<number>;
  name: string;
  organizationId: number;
  updatedOn: ColumnType<Date, string | undefined, never>;
};

export type Season = Selectable<SeasonTable>;
export type NewSeason = Insertable<SeasonTable>;
export type SeasonUpdate = Updateable<SeasonTable>;
