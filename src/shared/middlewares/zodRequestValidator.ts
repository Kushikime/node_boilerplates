import { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';

const requestBodyValidator = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;

    const { success, data, error } = schema.safeParse(body);

    if (!success) {
      res.status(400).json({
        message: 'Invalid input data',
        error: error.flatten().fieldErrors,
      });

      // honestly I hate that express not allowing us to return the res.status here (maybe its fixable)
      return;
    }

    // we assign the parsed and validated data to the request body
    req.body = data;

    next();
  };
};

const requestParamsValidator = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { params } = req;

    const { success, data, error } = schema.safeParse(params);

    if (!success) {
      return res.status(400).json({
        message: 'Invalid query parameters',
        error: error.flatten().fieldErrors,
      });
    }

    req.params = data;

    next();
  };
};

const requestQueryValidator = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { query } = req;

    const { success, data, error } = schema.safeParse(query);

    if (!success) {
      return res.status(400).json({
        message: 'Invalid query parameters',
        error: error.flatten().fieldErrors,
      });
    }

    req.query = data;

    next();
  };
};
export { requestBodyValidator, requestParamsValidator, requestQueryValidator };
