import { Generated } from "kysely";

export interface OrganizationTable {
    id: Generated<string>
    name: string
    website: string
    contact_email: string
};
