import { Generated } from "kysely";

export interface RulingTable {
    id: Generated<string>
    incident_id: string
    steward_id: string
    penalty_id: string
};
