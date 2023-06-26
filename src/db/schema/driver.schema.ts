import { getModelForClass, prop } from '@typegoose/typegoose';

import { ModelBase } from './base.schema';

export class Driver extends ModelBase {
    @prop()
    public firstName!: string;

    @prop()
    public lastName!: string;

    @prop()
    public shortName?: string;

    @prop()
    public driverId!: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const DriverModel = getModelForClass(Driver);
