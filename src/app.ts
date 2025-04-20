import express from 'express';
import healthRoutes from './api/v1/health/health.route';

const app = express();

app.use('/', healthRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
