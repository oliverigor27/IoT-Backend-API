import express from 'express';
import devicesRouter from './routes/devices';

const app = express();

app.use('/devices', devicesRouter);