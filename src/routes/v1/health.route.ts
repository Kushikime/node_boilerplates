import { Router } from 'express';
import healthService from '../../services/health/health.service';

const router = Router();

router.get('/healthz', healthService.HandleHealthz);

router.get('/readyz', healthService.HandleReadyz);

router.get('/livez', healthService.HandleLivez);

export default router;
