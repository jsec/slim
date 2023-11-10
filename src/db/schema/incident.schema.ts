import {
  type ColumnType,
  type Generated,
  type Insertable,
  type Selectable,
  type Updateable
} from 'kysely';

export type IncidentTable = {
  createdOn: Generated<Date>;
  description: string;
  id: Generated<number>;
  lapNumber: number;
  location: string;
  offendingDriverId: number;
  raceId: number;
  reportingDriverId: number;
  updatedOn: ColumnType<Date, string | undefined, never>;
};

export type Incident = Selectable<IncidentTable>;
export type NewIncident = Insertable<IncidentTable>;
export type IncidentUpdate = Updateable<IncidentTable>;
