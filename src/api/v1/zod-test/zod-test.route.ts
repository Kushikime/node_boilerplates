import { NextFunction, Request, Response, Router } from 'express';
import { z } from 'zod';
import { requestBodyValidator } from '@shared/middlewares/zodRequestValidator';
import { zodTestSchema } from './zod-test.schemas';
import ZodTestController from './zod-test.controller';
import ZodTestService from './zod-test.service';

const router = Router();
const zodTestService = new ZodTestService();
const zodTestController = new ZodTestController(zodTestService);

router.get('/', (req: Request, res: Response) => {
  res.send('Hello Zod GET');
});

router.post(
  '/',
  [requestBodyValidator(zodTestSchema)],
  zodTestController.handleZodTest,
);

export default router;
