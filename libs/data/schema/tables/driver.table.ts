import { Generated } from "kysely";

export interface DriverTable {
    id: Generated<string>
    organization_id: string
    first_name: string
    last_name: string
    reference_id: string
}
