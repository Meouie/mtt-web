import mongoose from 'mongoose';

let isConnected = false;

export const connectToDatabase = async () => {
    if (isConnected) return;

    const mongoUri = process.env.MONGODB_URI;
    // const dbName = process.env.MONGODB_DB_NAME || 'mtt';

    if (!mongoUri) {
        throw new Error('MONGODB_URI environment variable is not set.');
    }

    try {
        await mongoose.connect(mongoUri);

        isConnected = true;
        console.info('✅ MongoDB connected');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        throw error;
    }
};
