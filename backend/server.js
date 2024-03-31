import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import dataRoutes from './routes/dataRoutes.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());

const PORT = 5000;

const uri = process.env.MONGODB_URI;
mongoose.connect(uri)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/api', dataRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
