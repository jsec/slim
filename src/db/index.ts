import mongoose from 'mongoose';

export * from './repository';

export const connect = async () => {
    try {
        await mongoose.connect('abcd123');
    } catch (err) {
        console.error('Error connecting to database - ', err);
    }
};
