import { Request, Response } from 'express';
import { ZodTestDto } from './zod-test.schemas';

class ZodTestService {
  constructor() {}

  async zodTestHandler(body: ZodTestDto): Promise<any> {
    // At this point we know that the request body is valid and all the fields are present, unless fields are optional.
    const { name, email, password, age } = body;

    await new Promise((resolve) => setTimeout(resolve, 2500));

    return { message: 'Zod test handler success' };
  }
}

/* Additional improvements:
- Partial schemas to construct complex ones.
- Custom error handler with concise error messages.
- Use of zod-to-ts to generate types from schemas. (can be used for frontend, swagger, etc)
- use JSDoc to generate documentation for the types.
*/
export default ZodTestService;
