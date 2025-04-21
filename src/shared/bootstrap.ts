import MongoClient from '@/shared/clients/mongoClient';
import TracerClient from '@/shared/clients/tracerClient';
import logger from '@/shared/utils/logger';

export const bootstrap = async () => {
  // should we accept the application config as a parameter? we could list the dependencies and load them in the bootstrap
  // load the application config
  // setup proper config validation and load
  const config: any = {
    mongo: {
      url: 'mongodb://...',
    },
    tracer: {
      url: 'http://...',
    },
  };

  const mongoClient = new MongoClient(logger, config);
  await mongoClient.connect();

  const tracerClient = new TracerClient(logger, config);
  await tracerClient.connect();

  logger.info('All dependencies configured and ready.');
};
