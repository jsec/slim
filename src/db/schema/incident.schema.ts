import {
  type ColumnType,
  type Generated,
  type Insertable,
  type Selectable,
  type Updateable
} from 'kysely';

export type IncidentTable = {
  id: Generated<number>;
  raceId: number;
  reportingDriverId: number;
  offendingDriverId: number;
  lapNumber: number;
  location: string;

  description: string;
  createdOn: Generated<Date>;
  updatedOn: ColumnType<Date, string | undefined, never>;
};

export type Incident = Selectable<IncidentTable>;
export type NewIncident = Insertable<IncidentTable>;
export type IncidentUpdate = Updateable<IncidentTable>;
