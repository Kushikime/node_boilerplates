# 🚀 Express.js Boilerplate

A robust, scalable, and production-ready boilerplate built with Express.js and TypeScript. Designed with best practices in mind, it includes essential features like strong request validation with Zod, API versioning, health checks, and a clean architecture pattern.

---

## 🌟 Current Features

- **TypeScript Integration**: Fully typed codebase for better developer experience and error prevention.
- **Clean Architecture**: Well-defined separation of concerns with routes, controllers, and services.
- **API Versioning**: Future-proof API structure with versioning (v1, v2, etc.).
- **Request Validation**: Robust validation using Zod for ensuring data integrity.
- **Health Checks**: Built-in health endpoints following Kubernetes conventions (healthz, readyz, livez).
- **Middleware Pipeline**: Customizable middleware for request processing.

---

## 📁 Current Project Structure

```
node_boilerplates/
├── src/
│   ├── api/
│   │   ├── v1/
│   │   │   ├── health/
│   │   │   │   ├── health.route.ts
│   │   │   │   ├── health.controller.ts
│   │   │   │   └── health.service.ts
│   │   │   └── zod-test/
│   │   │       ├── zod-test.route.ts
│   │   │       ├── zod-test.controller.ts (WIP)
│   │   │       └── zod-test.service.ts (WIP)
│   │   └── v2/
│   ├── core/
│   │   └── models/
│   ├── shared/
│   ├── config/
│   └── app.ts
├── dist/
├── node_modules/
├── package.json
├── package-lock.json
├── tsconfig.json
└── .gitignore
```

---

## 🛠️ Technology Choices & Architectural Decisions

### TypeScript
- Provides static type-checking during development
- Enhances code quality and maintainability
- Improves IDE support with better autocompletion and error detection

### Express.js
- Lightweight and flexible web framework
- Excellent middleware ecosystem
- High performance and widespread adoption

### Zod for Validation
- Runtime type validation with TypeScript integration
- Self-documenting schemas
- Excellent error handling and detailed validation errors
- Type inference from schemas for end-to-end type safety

### API Versioning
- Future-proofs the API by isolating changes between versions
- Enables backward compatibility while evolving the API
- Organized directory structure by version

### Service-Controller-Route Pattern
- Clear separation of concerns:
  - Routes: Define API endpoints and connect them to controllers
  - Controllers: Handle HTTP requests/responses and delegate business logic to services
  - Services: Contain business logic, independent of HTTP context

### Health Checks
- Following Kubernetes patterns with standard endpoints:
  - `/healthz`: Basic health check
  - `/readyz`: Application readiness check
  - `/livez`: Application liveness check

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation
```
git clone <repository-url>
cd node_boilerplates
npm install
```

### Development
```
npm run dev
```

### Production Build
```
npm run build
npm start
```

---

## 🔮 Planned Features & Roadmap

- **Error Handling**: Centralized error handling middleware
- **Authentication**: JWT-based authentication with role-based access control
- **Database Integration**: Flexible data access layer with repository pattern
- **Logging**: Structured logging for production environments
- **OpenAPI Documentation**: Automatic API documentation generation
- **Unit & Integration Testing**: Test setup with Jest
- **Docker Support**: Containerization for deployment
- **CI/CD Pipeline**: Automated testing and deployment
- **Rate Limiting & Security Headers**: Additional security features
- **Environment Configuration**: Secure configuration management
- **Monitoring & Tracing**: Observability infrastructure

---

## 📖 Usage Examples

### Creating a New API Endpoint

1. Create a new directory in `src/api/v1/` for your feature
2. Add route, controller, and service files following the existing pattern
3. Define your Zod validation schemas in the route file
4. Implement your business logic in the service
5. Register your routes in `app.ts`

### Request Validation with Zod

```typescript
// Example from zod-test.route.ts
const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  age: z.number().min(18),
});

router.post(
  '/',
  [
    // Middleware to validate request body against schema
    (req: Request, res: Response, next: NextFunction) => {
      const { success, data, error } = userSchema.safeParse(req.body);
      
      if (!success) {
        return res.status(400).json({
          message: 'Invalid input data',
          error: error.flatten().fieldErrors,
        });
      }
      
      next();
    },
  ],
  // Request handler
  (req: Request, res: Response) => {
    res.send('Valid data received');
  },
);
```

---

## 📜 License

This project is licensed under the ISC License - see the LICENSE file for details.

