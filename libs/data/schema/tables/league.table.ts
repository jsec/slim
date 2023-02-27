import { Generated } from "kysely";

export interface LeagueTable {
    id: Generated<string>
    organization_id: string
    name: string
    description: string
    class: string
};
