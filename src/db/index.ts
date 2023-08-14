import { type DriverTable, type RegistrationTable, type SeasonTable } from './schema';

export type Database = {
    driver: DriverTable;
    registration: RegistrationTable;
    season: SeasonTable;
};
