# EdTech UI

> Modern EdTech UI application built with React, TypeScript, and Vite

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/edtech-ui.git
   cd edtech-ui
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the environment template
   pnpm prepare-env
   
   # Or manually copy
   cp env.template .env
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```

## 🌍 Environment Management

This project supports multiple environments with dedicated configuration:

### Available Environments
- **Development** (`dev`) - Local development
- **Staging** (`stage`) - Pre-production testing
- **Production** (`prod`) - Live environment

### Environment Setup

```bash
# Development (default)
pnpm prepare-env
pnpm dev

# Staging
pnpm prepare-env:stage
pnpm dev:stage

# Production
pnpm prepare-env:prod
```

### Environment Files
- `env.template` - Development environment template
- `env.stage.template` - Staging environment template  
- `env.prod.template` - Production environment template

Copy the appropriate template to create your environment files:
- `.env` (development)
- `.env.staging` (staging)
- `.env.production` (production)

## 📝 Available Scripts

### Development
```bash
pnpm dev              # Start development server
pnpm dev:stage        # Start development server with staging config
```

### Building
```bash
pnpm build            # Production build (includes type-check and lint)
pnpm build:dev        # Development build
pnpm build:stage      # Staging build
pnpm build:prod       # Production build
```

### Preview
```bash
pnpm preview          # Preview production build
pnpm preview:stage    # Preview staging build
pnpm preview:prod     # Preview production build
pnpm start            # Build and preview (production)
```

### Testing
```bash
pnpm test             # Run tests once
pnpm test:watch       # Run tests in watch mode
pnpm test:coverage    # Run tests with coverage report
pnpm test:ui          # Run tests with UI
pnpm test:e2e         # Run end-to-end tests (placeholder)
```

### Code Quality
```bash
pnpm lint             # Check code with ESLint
pnpm lint:fix         # Fix ESLint issues
pnpm lint:staged      # Lint staged files (used by husky)
pnpm format           # Format code with Prettier
pnpm format:check     # Check code formatting
pnpm type-check       # TypeScript type checking
pnpm type-check:watch # Type checking in watch mode
```

### Maintenance
```bash
pnpm clean            # Clean build outputs
pnpm clean:cache      # Clean all caches
pnpm clean:all        # Clean everything including node_modules
pnpm reinstall        # Clean install (removes node_modules and reinstalls)
```

### Quality Checks
```bash
pnpm pre-commit       # Run type-check, lint, and tests (CI pipeline)
```

## 🏗️ Project Structure

```
edtech-ui/
├── src/                    # Source code
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── layouts/           # Layout components
│   ├── hooks/             # Custom React hooks
│   ├── store/             # State management
│   ├── services/          # API services
│   ├── lib/               # Utility libraries
│   ├── utils/             # Utility functions
│   ├── types/             # TypeScript definitions
│   ├── constants/         # Application constants
│   ├── routes/            # Route definitions
│   ├── features/          # Feature modules
│   └── test/              # Test utilities
├── public/                # Static assets
├── env.*.template         # Environment templates
├── tailwind.config.js     # Tailwind configuration
├── vite.config.ts         # Vite configuration
├── vitest.config.ts       # Testing configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project configuration
```

## 🔧 Technology Stack

### Core
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### State Management
- **Zustand** - Lightweight state management
- **@tanstack/react-query** - Server state management

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

### Forms & Validation
- **React Hook Form** - Form library
- **Zod** - Schema validation

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vitest** - Testing framework
- **MSW** - API mocking
- **Husky** - Git hooks
- **lint-staged** - Staged file linting

## 🌍 Environment Variables

### Application Config
- `VITE_APP_NAME` - Application name
- `VITE_APP_VERSION` - Application version
- `VITE_APP_DESCRIPTION` - Application description

### API Configuration
- `VITE_API_BASE_URL` - API base URL
- `VITE_API_TIMEOUT` - API request timeout

### Feature Flags
- `VITE_ENABLE_DEV_TOOLS` - Enable development tools
- `VITE_ENABLE_MSW` - Enable Mock Service Worker
- `VITE_ENABLE_ANALYTICS` - Enable analytics
- `VITE_ENABLE_ERROR_REPORTING` - Enable error reporting

### External Services
- `VITE_GOOGLE_ANALYTICS_ID` - Google Analytics ID
- `VITE_SENTRY_DSN` - Sentry error reporting DSN
- `VITE_STRIPE_PUBLIC_KEY` - Stripe public key

### Social Authentication
- `VITE_GOOGLE_CLIENT_ID` - Google OAuth client ID
- `VITE_FACEBOOK_APP_ID` - Facebook app ID
- `VITE_GITHUB_CLIENT_ID` - GitHub OAuth client ID

## 🚀 Deployment

### Building for Production
```bash
# Build with production environment
pnpm build:prod

# The build output will be in the `dist` directory
```

### Environment-Specific Builds
```bash
# Development build
pnpm build:dev

# Staging build  
pnpm build:stage

# Production build
pnpm build:prod
```

## 🤝 Contributing

1. **Install dependencies**: `pnpm install`
2. **Set up environment**: `pnpm prepare-env`
3. **Start development**: `pnpm dev`
4. **Run tests**: `pnpm test`
5. **Check code quality**: `pnpm pre-commit`

### Code Quality Standards
- All code must pass TypeScript type checking
- All code must pass ESLint rules
- All code must be formatted with Prettier
- All tests must pass
- Minimum test coverage requirements apply

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy Coding! 🎉**
