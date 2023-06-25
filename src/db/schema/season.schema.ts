import { getModelForClass, prop, type Ref } from '@typegoose/typegoose';

import { Registration } from './registration.schema';

export class Season {
    @prop()
    public name!: string;

    @prop()
    public description?: string;

    @prop({ ref: () => Registration })
    public registrations!: Array<Ref<Registration>>;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const SeasonModel = getModelForClass(Season);
