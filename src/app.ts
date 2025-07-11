import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cookieParser from 'cookie-parser'
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

app.use(express.json());
app.use(cookieParser())
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  }),
);

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('UMSHOP SERVER IS RUNNING');
});

app.use(globalErrorHandler);

export default app;
