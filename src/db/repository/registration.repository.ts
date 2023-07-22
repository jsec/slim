import { type ObjectId } from 'mongoose';

import { type Registration, registrationModel } from '../schema';

export class RegistrationRepository {
    public async add(registration: Registration): Promise<Registration> {
        return registrationModel.create(registration);
    }

    public async findById(id: ObjectId): Promise<Registration | null> {
        return registrationModel.findById(id);
    }

    public async update(registration: Registration): Promise<Registration | null> {
        return registrationModel.findByIdAndUpdate(registration.id, registration);
    }

    public async delete(registrationId: ObjectId): Promise<void | null> {
        return registrationModel.findByIdAndDelete(registrationId);
    }
}
