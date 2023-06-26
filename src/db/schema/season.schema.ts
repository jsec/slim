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

// eslint-disable-next-line @typescript-eslint/naming-convention
export const SeasonModel = getModelForClass(Season);
