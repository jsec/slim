import { type DriverTable } from './driver.schema';
import { type DriverIdentifierTable } from './driver-identifier.schema';
import { type IncidentTable } from './incident.schema';
import { type OrganizationTable } from './organization.schema';
import { type PenaltyTable } from './penalty.schema';
import { type RaceTable } from './race.schema';
import { type RegistrationTable } from './registration.schema';
import { type RulingTable } from './ruling.schema';
import { type SeasonTable } from './season.schema';

export type { Driver, DriverTable, DriverUpdate, NewDriver } from './driver.schema';
export type {
    DriverIdentifier,
    DriverIdentifierTable,
    DriverIdentifierUpdate,
    NewDriverIdentifier
} from './driver-identifier.schema';
export type { Incident, IncidentTable, IncidentUpdate, NewIncident } from './incident.schema';
export type {
    NewOrganization,
    Organization,
    OrganizationTable,
    OrganizationUpdate
} from './organization.schema';
export type { NewPenalty, Penalty, PenaltyTable, PenaltyUpdate } from './penalty.schema';
export type { NewRace, Race, RaceTable, RaceUpdate } from './race.schema';
export type {
    NewRegistration,
    Registration,
    RegistrationTable,
    RegistrationUpdate
} from './registration.schema';
export type { NewRuling, Ruling, RulingTable, RulingUpdate } from './ruling.schema';
export type { NewSeason, Season, SeasonTable, SeasonUpdate } from './season.schema';

export interface Database {
    driver: DriverTable;
    driverIdentifier: DriverIdentifierTable;
    incident: IncidentTable;
    organization: OrganizationTable;
    penalty: PenaltyTable;
    race: RaceTable;
    registration: RegistrationTable;
    ruling: RulingTable;
    season: SeasonTable;
}
