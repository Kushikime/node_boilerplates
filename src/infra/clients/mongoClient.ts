import { Logger } from 'winston'; // this package is pretty heavy, we should use a lighter package or import only what we need

class MongoClient {
  constructor(private logger: Logger, private config: any) {
    if (!config) {
      throw new Error('Mongo config is required');
    }

    // create a child logger for mongo, how this will work? how to customize the logger for mongo?
    this.logger = logger.child({
      service: 'mongo',
    });
  }

  async connect() {
    this.logger.info('Mongo client initialized');
  }

  async disconnect() {
    this.logger.info('Mongo client disconnected');
  }

  async getClient() {
    this.logger.info('Mongo client getClient');
  }
}

export default MongoClient;
