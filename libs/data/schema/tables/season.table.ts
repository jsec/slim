import { Generated } from "kysely"

export interface SeasonTable {
    id: Generated<string>
    league_id: string
    name: string
    description: string
};
