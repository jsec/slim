import {
  type ColumnType,
  type Generated,
  type Insertable,
  type Selectable,
  type Updateable
} from 'kysely';

export type PenaltyTable = {
  createdOn: Generated<Date>;
  description: string;
  id: Generated<number>;
  organizationId: number;
  points: number;
  type: string;
  updatedOn: ColumnType<Date, string | undefined, never>;
};

export type Penalty = Selectable<PenaltyTable>;
export type NewPenalty = Insertable<PenaltyTable>;
export type PenaltyUpdate = Updateable<PenaltyTable>;
