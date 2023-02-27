import * as dotenv from 'dotenv';
import { ConnectionConfig } from 'pg';

dotenv.config({
    path: '../../.env'
});

export interface Config {
    readonly port: number;
    readonly database: ConnectionConfig;
}

export const config: Config = {
    port: parseInt(getEnvVariable('DATABASE_PORT'), 10),
    database: Object.freeze({
        database: getEnvVariable('DATABASE'),
        host: getEnvVariable('DATABASE_HOST'),
        user: getEnvVariable('DATABASE_USER'),
        password: getEnvVariable('DATABASE_PASSWORD')
    })
}

function getEnvVariable(value: string): string {
    if (!process.env[value]) {
        throw new Error(`Environment variable ${value} not set!`);
    }

    return process.env[value]!;
}
