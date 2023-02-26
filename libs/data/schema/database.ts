import { DriverTable, IncidentTable, LeagueTable, OrganizationTable, PenaltyTable, RaceTable, RegistrationTable, RulingTable, SeasonTable } from "./tables";

interface Database {
    league: LeagueTable
    organization: OrganizationTable
    season: SeasonTable
    race: RaceTable
    driver: DriverTable
    registration: RegistrationTable
    incident: IncidentTable
    ruling: RulingTable
    penalty: PenaltyTable
}

export default Database;
