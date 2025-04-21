import express from 'express';
import healthRoute from '@/api/v1/health/health.route';
import zodTestRoutes from '@/api/v1/zod-test/zod-test.route';
import { bootstrap } from '@/infra/bootstrap';

const main = async () => {
  await bootstrap();

  const app = express();

  // Middlewares
  app.use(express.json());

  // Routes
  app.use('/', healthRoute);
  app.use('/zod-test', zodTestRoutes);

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
};

main().catch((err) => {
  console.error('Error starting the api service', err);
  process.exit(1);
});
