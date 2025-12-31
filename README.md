# LifeKernel Frontend Monorepo

A modern, scalable frontend monorepo for personal development applications built with TypeScript, React, and cutting-edge development tools.

## 🏗️ Architecture Overview

LifeKernel is a **frontend-only monorepo** that serves three distinct applications:
- **User Web** - Main user-facing application (Next.js)
- **Admin Web** - Administrative dashboard (React + Vite)
- **Mobile** - Cross-platform mobile application (Expo/React Native)

> **Note**: Backend services are hosted in a separate microservices repository.

## 📁 Repository Structure

```
LifeKernel/
├── apps/                          # Application containers
│   ├── admin-web/                 # Admin dashboard (React + Vite)
│   ├── mobile/                    # Mobile app (Expo/React Native)
│   └── user-web/                  # User web app (Next.js)
├── packages/                      # Shared packages
│   ├── api/                       # API client utilities
│   ├── types/                     # Shared TypeScript definitions
│   └── ui/                        # Shared UI components
├── .turbo/                        # Turbo cache directory
├── package.json                   # Root package configuration
├── pnpm-workspace.yaml           # PNPM workspace configuration
├── turbo.json                     # Turbo build pipeline configuration
└── tsconfig.base.json            # Base TypeScript configuration
```

## 🚀 Quick Start

### Prerequisites

- **Node.js**: `>=20.0.0`
- **PNPM**: `>=10.14.0` (recommended package manager)
- **Expo CLI**: For mobile development

### Installation

```bash
# Clone the repository
git clone https://github.com/DaDDy-chilll/lifekernel/
cd LifeKernel

# Install dependencies
pnpm install
```

### Development

```bash
# Start all applications in development mode
pnpm dev

# Start specific applications
pnpm start:user          # User web application
pnpm start:admin         # Admin web application  
pnpm start:mobile        # Mobile application
```

### Build

```bash
# Build all applications
pnpm build

# Lint all applications
pnpm lint
```

## 📱 Applications

### User Web (`apps/user-web`)
- **Framework**: Next.js 16.1.1
- **Purpose**: Main user-facing application
- **Features**: 
  - Server-side rendering (SSR)
  - API routes
  - Tailwind CSS styling
  - Shared packages integration

### Admin Web (`apps/admin-web`)
- **Framework**: React 19.2.0 + Vite 7.2.4
- **Purpose**: Administrative dashboard
- **Features**:
  - Fast development server
  - Hot module replacement
  - Modern build tooling
  - Tailwind CSS v4

### Mobile (`apps/mobile`)
- **Framework**: Expo SDK ~54.0.30
- **Purpose**: Cross-platform mobile application
- **Features**:
  - React Native 0.81.5
  - Expo Router for navigation
  - NativeWind for styling
  - Cross-platform compatibility

## 📦 Shared Packages

### `@acme/ui`
- **Purpose**: Shared React components
- **Peer Dependencies**: React 19.1.0, React DOM 19.1.0
- **Usage**: Reusable UI components across all applications

### `@acme/types`
- **Purpose**: Shared TypeScript definitions
- **Usage**: Common types and interfaces used across the monorepo

### `@acme/api`
- **Purpose**: API client utilities and configurations
- **Usage**: Centralized API communication logic

## 🛠️ Technology Stack

### Core Technologies
- **TypeScript**: Type-safe development
- **React**: Component-based UI framework
- **PNPM**: Fast, disk space efficient package manager
- **Turbo**: Monorepo build system

### Application-Specific
- **Next.js**: Full-stack React framework (User Web)
- **Vite**: Fast build tool (Admin Web)
- **Expo**: React Native development platform (Mobile)

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework
- **NativeWind**: Tailwind for React Native
- **Expo Vector Icons**: Icon library

### Development Tools
- **ESLint**: Code linting
- **TypeScript**: Static type checking
- **Turbo**: Incremental builds and caching

## 🔧 Development Workflow

### 1. Environment Setup
```bash
# Ensure you're using the correct Node version
node --version  # Should be >=20.0.0

# Install PNPM if not already installed
npm install -g pnpm@10.14.0

# Install dependencies
pnpm install
```

### 2. Development Mode
```bash
# Start all apps
pnpm dev

# Or start individual apps
pnpm start:user    # http://localhost:3000
pnpm start:admin   # http://localhost:5173  
pnpm start:mobile  # Expo development server
```

### 3. Code Quality
```bash
# Lint all packages and apps
pnpm lint

# Type checking
pnpm build  # Includes TypeScript compilation
```

### 4. Building for Production
```bash
# Build all applications
pnpm build

# Individual app builds
cd apps/user-web && pnpm build
cd apps/admin-web && pnpm build
cd apps/mobile && pnpm build
```

## 🏛️ Monorepo Configuration

### PNPM Workspace (`pnpm-workspace.yaml`)
```yaml
packages:
  - apps/*      # All applications
  - packages/*  # All shared packages

nodeLinker: hoisted
```

### Turbo Pipeline (`turbo.json`)
- **`dev`**: Persistent development servers with caching disabled
- **`build`**: Incremental builds with dependency graph
- **`lint`**: Parallel linting across packages

### TypeScript Configuration
- **Base Config**: `tsconfig.base.json` with shared settings
- **App-specific**: Each app extends base config with specific paths

## 📋 Package Scripts Reference

### Root Level Scripts
| Script | Description |
|--------|-------------|
| `pnpm dev` | Start all apps in development mode |
| `pnpm build` | Build all applications |
| `pnpm lint` | Lint all packages and applications |
| `pnpm start:user` | Start user web application |
| `pnpm start:admin` | Start admin web application |
| `pnpm start:mobile` | Start mobile application |

### Application-Specific Scripts
| Application | Dev | Build | Lint |
|-------------|-----|-------|------|
| User Web | `next dev` | `next build` | `eslint` |
| Admin Web | `vite` | `vite build` | `eslint` |
| Mobile | `expo start` | `expo build` | `expo lint` |

## 🔐 Environment Variables

Each application should have its own environment configuration:

```
apps/
├── admin-web/.env.local
├── mobile/.env
└── user-web/.env.local
```

### Common Environment Variables
```bash
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000
EXPO_PUBLIC_API_URL=http://localhost:8000

# Feature Flags
NEXT_PUBLIC_FEATURE_ANALYTICS=true
EXPO_PUBLIC_FEATURE_ANALYTICS=true
```

## 📱 Mobile Development

### Expo Setup
```bash
# Install Expo CLI
npm install -g @expo/cli

# Start development server
pnpm start:mobile

# Run on device
pnpm start:mobile --android  # Android
pnpm start:mobile --ios      # iOS
pnpm start:mobile --web      # Web
```

### Mobile-Specific Commands
```bash
# Install dependencies in mobile app
cd apps/mobile && pnpm install

# Generate assets
npx expo install expo-assets

# Run tests
pnpm test
```

## 🎨 Styling Guide

### Tailwind CSS Configuration
- **User/Admin Web**: Uses Tailwind CSS v4
- **Mobile**: Uses NativeWind (Tailwind for React Native)

### Shared Design System
- UI components in `@acme/ui` package
- Consistent color palette and spacing
- Responsive design principles

## 🔄 Continuous Integration

### Recommended CI/CD Pipeline
```yaml
# Example GitHub Actions workflow
name: CI/CD Pipeline
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
      - run: pnpm install
      - run: pnpm lint
      - run: pnpm build
```

## 📊 Performance Considerations

### Build Optimization
- **Turbo Caching**: Incremental builds for faster development
- **Code Splitting**: Automatic in Next.js and Vite
- **Tree Shaking**: Dead code elimination

### Bundle Size Management
- Shared packages reduce duplication
- Dynamic imports for large dependencies
- Bundle analysis tools integration

## 🐛 Troubleshooting

### Common Issues

1. **Module Resolution Errors**
   ```bash
   # Clear cache
   pnpm store prune
   rm -rf .turbo node_modules
   pnpm install
   ```

2. **Metro/Mobile Path Issues**
   ```bash
   # Reset Metro cache
   cd apps/mobile
   npx expo start --clear
   ```

3. **TypeScript Path Issues**
   ```bash
   # Rebuild TypeScript
   pnpm build --force
   ```

### Development Server Issues
- Ensure ports 3000, 5173, and 8081 are available
- Check firewall settings for Expo development server
- Verify Node.js and PNPM versions

## 🤝 Contributing Guidelines

### Branch Strategy
- `main`: Production-ready code
- `develop`: Integration branch
- `feature/*`: Feature branches
- `fix/*`: Bug fixes

### Code Standards
- Use TypeScript for all new code
- Follow ESLint configuration
- Write tests for new features
- Update documentation

### Pull Request Process
1. Create feature branch from `develop`
2. Make changes with proper testing
3. Submit PR with detailed description
4. Ensure CI/CD pipeline passes
5. Code review and merge

## 📚 Additional Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Expo Documentation](https://docs.expo.dev/)
- [Turbo Documentation](https://turbo.build/repo/docs)
- [PNPM Documentation](https://pnpm.io/)

### Tools & Extensions
- **VS Code**: Recommended extensions
  - TypeScript and JavaScript Language Features
  - Tailwind CSS IntelliSense
  - ES7+ React/Redux/React-Native snippets
  - Turbo Repo

## 📄 License

This project is licensed under the ISC License.

---

**LifeKernel** - Your personal development companion, built with modern web technologies.
