import { Request, Response } from 'express';

const ResponseBase = {
  uptime: process.uptime(),
  timestamp: new Date().toISOString(),
  version: process.env.APP_VERSION || '1.0.0',
};

// This endpoint is used to check if the app is healthy.
const HandleHealthz = (req: Request, res: Response) => {
  res.status(200).json({
    ...ResponseBase,
    status: 'ok',
  });
};

// This endpoint is used to check if the app is alive.
const HandleLivez = (req: Request, res: Response) => {
  res.status(200).json({
    ...ResponseBase,
    status: 'alive',
  });
};

// This endpoint is used to check if the app is ready to serve requests.
const HandleReadyz = (req: Request, res: Response) => {
  // Check every service our app is dependant on, Ideally they should be Singleton to avoid recreating connections over the app.
  const checks = {
    mongo: 'pending',
    thirdPartyApiClient: 'pending', // this is an example of a third party api client
  };

  const appDependenciesReady = Object.values(checks).every(
    (val) => val === 'ready',
  );

  if (!appDependenciesReady) {
    res.status(503).json({
      ...ResponseBase,
      status: 'degraded',
    });
    return;
  }

  res.status(200).json({
    ...ResponseBase,
    status: 'ready',
    checks,
  });
};

export default {
  HandleHealthz,
  HandleLivez,
  HandleReadyz,
};
