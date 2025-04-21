import { Logger } from 'winston'; // this package is pretty heavy, we should use a lighter package or import only what we need

class TracerClient {
  constructor(private logger: Logger, private config: any) {
    if (!config) {
      throw new Error('Tracer config is required');
    }

    this.logger = logger.child({
      service: 'tracer',
    });
  }

  async connect() {
    this.logger.info('Tracer client initialized');
  }

  async disconnect() {
    this.logger.info('Tracer client disconnected');
  }

  async getClient() {
    this.logger.info('Tracer client getClient');
  }
}

export default TracerClient;
