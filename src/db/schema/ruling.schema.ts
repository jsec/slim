import {
    type ColumnType,
    type Generated,
    type Insertable,
    type Selectable,
    type Updateable
} from 'kysely';

export type RulingTable = {
    id: Generated<number>;
    stewardId: number;
    incidentId: number;
    penaltyId: number;
    summary: string;
    createdOn: Generated<Date>;
    updatedOn: ColumnType<Date, string | undefined, never>;
};

export type Ruling = Selectable<RulingTable>;
export type NewRuling = Insertable<RulingTable>;
export type RulingUpdate = Updateable<RulingTable>;
