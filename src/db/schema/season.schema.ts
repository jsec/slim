import { Ref, getModelForClass, prop } from "@typegoose/typegoose";
import { Registration } from "./registration.schema";

export class Season {
    @prop()
    public name!: string;

    @prop()
    public description?: string;

    @prop({ ref: () => Registration })
    public registrations!: Ref<Registration>[];
}

export const SeasonModel = getModelForClass(Season);
