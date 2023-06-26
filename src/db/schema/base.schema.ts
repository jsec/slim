import { ModelOptions, prop } from '@typegoose/typegoose';
import { type Base } from '@typegoose/typegoose/lib/defaultClasses';
import { type Types } from 'mongoose';

// eslint-disable-next-line new-cap
@ModelOptions({
    schemaOptions: {
        timestamps: {
            updatedAt: 'updatedOn',
            createdAt: 'createdOn'
        },
        toObject: { virtuals: true }
    }
})
export class ModelBase implements Base {
    @prop()
    public createdOn!: Date;

    @prop()
    public updatedOn!: Date;

    _id!: Types.ObjectId;
    id!: string;
}
