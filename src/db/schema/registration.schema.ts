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

// eslint-disable-next-line @typescript-eslint/naming-convention
export const RegistrationModel = getModelForClass(Registration);
