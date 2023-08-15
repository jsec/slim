import {
    type DriverTable,
    type IncidentTable,
    type OrganizationTable,
    type PenaltyTable,
    type RaceTable,
    type RegistrationTable,
    type RulingTable,
    type SeasonTable
} from './schema';

export type Database = {
    driver: DriverTable;
    incident: IncidentTable;
    organization: OrganizationTable;
    penalty: PenaltyTable;
    race: RaceTable;
    registration: RegistrationTable;
    ruling: RulingTable;
    season: SeasonTable;
};
