import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { uploadImage } from './app/utils/uploadImage';

app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://umshop.vercel.app'],
    credentials: true,
  }),
);

app.use('/api/v1', router);
app.post('/api/v1/cloudinary', async (req, res) => {
  const { image } = req.body;
  const result = await uploadImage(image);
  res.status(200).json(result);
});

app.get('/', (req: Request, res: Response) => {
  res.send('UMSHOP SERVER IS RUNNING');
});

app.use(globalErrorHandler);

export default app;
