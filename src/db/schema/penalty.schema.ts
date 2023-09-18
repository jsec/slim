import {
    type ColumnType,
    type Generated,
    type Insertable,
    type Selectable,
    type Updateable
} from 'kysely';

export interface PenaltyTable {
    id: Generated<number>;
    organizationId: number;
    type: string;
    description: string;
    points: number;
    createdOn: Generated<Date>;
    updatedOn: ColumnType<Date, string | undefined, never>;
}

export type Penalty = Selectable<PenaltyTable>;
export type NewPenalty = Insertable<PenaltyTable>;
export type PenaltyUpdate = Updateable<PenaltyTable>;
