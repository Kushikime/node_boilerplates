import { Router } from 'express';
import HealthController from './health.controller';
import HealthService from './health.service';

const router = Router();

const healthService = new HealthService();
const healthController = new HealthController(healthService);

router.get('/healthz', healthController.handleHealthz);

router.get('/readyz', healthController.handleReadyz);

router.get('/livez', healthController.handleLivez);

export default router;
