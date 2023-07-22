import { type ObjectId } from 'mongoose';

import { type Optional } from '../../types/optional';
import { type Driver, driverModel } from '../schema';

export class DriverRepository {
    public async add(driver: Driver): Promise<Driver> {
        return driverModel.create(driver);
    }

    public async findById(id: ObjectId): Promise<Optional<Driver>> {
        return driverModel.findById(id);
    }

    public async update(driver: Driver): Promise<Optional<Driver>> {
        return driverModel.findByIdAndUpdate(driver.id, driver);
    }

    public async delete(driver: Driver): Promise<Optional<void>> {
        return driverModel.findByIdAndDelete(driver.id);
    }
}
