import { Request, Response } from 'express';
import ZodTestService from './zod-test.service';
import { ZodTestDto } from './zod-test.schemas';
import { RequestWithBody } from '../../../shared/utils/types';

class ZodTestController {
  constructor(private zodTestService: ZodTestService) {}

  handleZodTest = async (
    req: RequestWithBody<ZodTestDto>,
    res: Response,
  ): Promise<void> => {
    const result = await this.zodTestService.zodTestHandler(req.body);
    res.status(200).json(result);
  };
}

export default ZodTestController;
