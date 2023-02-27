import { Generated } from "kysely";

export interface RaceTable {
    id: Generated<string>
    event_id: string
    name: string
    results: string
    replay_link: string
};
