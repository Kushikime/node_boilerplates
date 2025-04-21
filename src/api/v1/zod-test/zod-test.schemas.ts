import { z } from 'zod';

// Validation schemas

// Lets say I want to accept some user data and validate it using zod
// By default each field is required
// We can make fields optional by wrapping them in: z.optional()
const zodTestSchema = z.object({
  name: z.string({}),
  email: z.string().email(),
  password: z.string().min(8),
  age: z.number().min(18),
});

// TS types
type ZodTestDto = z.infer<typeof zodTestSchema>;

export { zodTestSchema, ZodTestDto };
