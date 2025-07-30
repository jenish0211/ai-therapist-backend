import mongoose from 'mongoose';
import {logger} from './logger';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://jenish:Jenish@2113@ai-therapist.jxhdo87.mongodb.net/?retryWrites=true&w=majority&appName=ai-therapist';

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    logger.info('Connected to MongoDB');
  } catch (error) {
    logger.error('Error connecting to MongoDB:', error);
    process.exit(1); 
  }
};