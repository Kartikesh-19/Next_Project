import mongoose, { Mongoose, ConnectOptions } from 'mongoose';

const MONGODB_URI: string | undefined = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    );
}

// Define the interface for the cached object
interface CachedMongoose {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

// Use the defined interface for the cached variable
let cached: CachedMongoose = (global as any).mongoose as CachedMongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

const dbConnect = async (): Promise<Mongoose> => {
    if (cached.conn) {
        return cached.conn;
    }

    // If a connection does not exist, we check if a promise is already in progress. If a promise is already in progress, we wait for it to resolve to get the connection
    if (!cached.promise) {
        const opts: ConnectOptions = {
            bufferCommands: false
        };

        cached.promise = mongoose.connect(MONGODB_URI as string, opts).then((mongooseInstance) => {
            return mongooseInstance;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
};

export default dbConnect;
