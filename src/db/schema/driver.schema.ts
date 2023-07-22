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

export const driverModel = getModelForClass(Driver);
