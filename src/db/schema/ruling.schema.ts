import {
  type ColumnType,
  type Generated,
  type Insertable,
  type Selectable,
  type Updateable
} from 'kysely';

export type RulingTable = {
  createdOn: Generated<Date>;
  id: Generated<number>;
  incidentId: number;
  penaltyId: number;
  stewardId: number;
  summary: string;
  updatedOn: ColumnType<Date, string | undefined, never>;
};

export type Ruling = Selectable<RulingTable>;
export type NewRuling = Insertable<RulingTable>;
export type RulingUpdate = Updateable<RulingTable>;
