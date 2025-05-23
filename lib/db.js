import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoDBUrl = process.env.MONGODB_URL;
    if (!mongoDBUrl) {
      throw new Error('MONGODB_URL is not defined');
    }
    await mongoose.connect(mongoDBUrl);
  } catch (err) {
    if (err) {
      console.error(err.message);
    } else {
      console.error('An unknown error occurred');
    }
    process.exit(1);
  }
};

export default connectDB;
