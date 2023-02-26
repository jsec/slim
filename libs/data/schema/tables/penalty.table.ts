import { Generated } from "kysely";

export interface PenaltyTable {
    id: Generated<string>
    name: string
    description: string
    time_in_seconds: number
    penalty_points: string
}
