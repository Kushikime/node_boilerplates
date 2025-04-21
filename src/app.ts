import express from 'express';
import healthRoutes from '@api/v1/health/health.route';
import zodTestRoutes from '@api/v1/zod-test/zod-test.route';
const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/', healthRoutes);
app.use('/zod-test', zodTestRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
