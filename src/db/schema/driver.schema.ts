import { getModelForClass, prop } from "@typegoose/typegoose";

export class Driver {
    @prop()
    public firstName!: string;

    @prop()
    public lastName!: string;

    @prop()
    public shortName?: string;

    @prop()
    public driverId!: string;
}

export const DriverModel = getModelForClass(Driver);
