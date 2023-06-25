import { Ref, getModelForClass, prop } from "@typegoose/typegoose";
import { Season } from "./season.schema";
import { Driver } from "./driver.schema";

export class Registration {
    @prop({ ref: () => Season })
    public seasonId!: Ref<Season>;

    @prop({ ref: () => Driver })
    public driverId!: Ref<Driver>;

    @prop()
    public carNumber!: number;

    @prop()
    public category?: number;
}

export const RegistrationModel = getModelForClass(Registration);
