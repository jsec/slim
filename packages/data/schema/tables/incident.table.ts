import { Generated } from "kysely";

export interface IncidentTable {
    id: Generated<string>
    race_id: string
    offending_driver_id: string
    description: string
}
