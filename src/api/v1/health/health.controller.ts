// extends ... interface BaseController {}

import { Request, Response } from 'express';
import HealthService from './health.service';

interface HealthLogic {
  handleHealthz: (req: Request, res: Response) => void;
  handleReadyz: (req: Request, res: Response) => void;
  handleLivez: (req: Request, res: Response) => void;
}

class HealthController implements HealthLogic {
  constructor(private healthService: HealthService) {}

  handleHealthz(req: Request, res: Response) {
    return this.healthService.HandleHealthz(req, res);
  }

  handleReadyz(req: Request, res: Response) {
    return this.healthService.HandleReadyz(req, res);
  }

  handleLivez(req: Request, res: Response) {
    return this.healthService.HandleLivez(req, res);
  }
}

export default HealthController;
