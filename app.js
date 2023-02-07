import express from 'express';
import path from 'path';

import __dirname from './dirname.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from 'morgan';
import 'dotenv/config';

import connectDb from './connect-db.js';
import items from './routes/items.js';

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

connectDb(
  `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.mp34x.mongodb.net/backendxfrontend`
);

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/items', items);

// FOR DEPLOYMENT FE BUILD

app.use(express.static(path.join(__dirname, 'frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/dist', 'assets'));
});

export default app;
