import { getModelForClass, prop, Ref } from '@typegoose/typegoose';

import { ModelBase } from './base.schema';
import { Driver } from './driver.schema';
import { Season } from './season.schema';

export class Registration extends ModelBase {
    @prop({ ref: () => Season })
    public seasonId!: Ref<Season>;

    @prop({ ref: () => Driver })
    public driverId!: Ref<Driver>;

    @prop()
    public carNumber!: number;

    @prop()
    public category?: number;
}

export const registrationModel = getModelForClass(Registration);
