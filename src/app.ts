import express, { type Application, type Request, type Response } from 'express';
import { logger } from './middleware/logger';
import { globalErrorHandler } from './middleware/globalErrorHandler';
import router from './api/routes/auth.route';

const app: Application = express();
app.use(express.json());
app.use(logger);
app.use('/auth', router);
app.use(globalErrorHandler);

app.get('/', (req: Request, res: Response) => {
  throw new Error('Server is dying');
  res.send("Hello world , I'm Abdul Mazid From express");
});

export default app;
