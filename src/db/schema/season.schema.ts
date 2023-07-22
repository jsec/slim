import { getModelForClass, prop, type Ref } from '@typegoose/typegoose';

import { ModelBase } from './base.schema';
import { Registration } from './registration.schema';

export class Season extends ModelBase {
    @prop()
    public name!: string;

    @prop()
    public description?: string;

    @prop({ ref: () => Registration })
    public registrations!: Array<Ref<Registration>>;
}

export const seasonModel = getModelForClass(Season);
