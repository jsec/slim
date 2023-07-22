import { type ObjectId } from 'mongoose';

import { type Optional } from '../../types/optional';
import { type Season, seasonModel } from '../schema';

export class SeasonRepository {
    public async add(season: Season): Promise<Season> {
        return seasonModel.create(season);
    }

    public async findById(id: ObjectId): Promise<Optional<Season>> {
        return seasonModel.findById(id);
    }

    public async update(season: Season): Promise<Optional<Season>> {
        return seasonModel.findByIdAndUpdate(season.id, season);
    }

    public async delete(seasonId: ObjectId): Promise<Optional<Season>> {
        return seasonModel.findByIdAndDelete(seasonId);
    }
}
