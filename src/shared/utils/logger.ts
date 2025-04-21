import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console({})],
});

// Logger should be customizable per development environment(dev, prod, etc) and per service (mongo, tracer, etc)

logger.info('Default logger initialized');

export default logger;
