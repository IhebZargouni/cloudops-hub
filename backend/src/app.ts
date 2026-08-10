import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import prisma from './config/prisma';

import { notFound } from './middlewares/notFound.middleware';
import { errorHandler } from './middlewares/error.middleware';

import { ApiError } from './shared/errors/apiError';

const app = express();

app.use(cors());

app.use(helmet());

app.use(compression());

app.use(express.json());

app.use(cookieParser());

app.use(morgan('dev'));

// app.get("/health", (_req, res) => {
//     res.status(200).json({
//         status: "OK",
//         service: "CloudOps Hub API",
//         version: "1.0.0",
//         timestamp: new Date()
//     });
// });

app.get('/health', async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.status(200).json({
      status: 'OK',
      database: 'Connected',
      service: 'CloudOps Hub API',
      timestamp: new Date(),
    });
  } catch {
    res.status(500).json({
      status: 'ERROR',
      database: 'Disconnected',
    });
  }
});

app.get('/error', () => {
  throw new ApiError(
    400,

    'Example Error',
  );
});
app.use(notFound);

app.use(errorHandler);

export default app;
