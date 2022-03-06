import mongoose from 'mongoose';

export const connectDB = async () => {
     mongoose.connect(process.env.MONGODB_URL,
        { useNewUrlParser: true, useUnifiedTopology: true },
        async (err) => {
            if (err) throw err;
            console.log('Connected with mongoDB');
        })
};
