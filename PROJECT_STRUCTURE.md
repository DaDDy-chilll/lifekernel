# Project Structure

This document provides a detailed overview of the LifeKernel monorepo structure, file organization, and architectural patterns.

## 📁 Root Directory Structure

```
LifeKernel/
├── .git/                   # Git version control
├── .turbo/                 # Turbo build cache
├── apps/                   # Application packages
├── packages/               # Shared packages
├── node_modules/           # Node dependencies
├── README.md              # Project documentation
├── CONTRIBUTING.md        # Contribution guidelines
├── ARCHITECTURE.md         # Architecture documentation
├── DEVELOPMENT.md          # Development guide
├── PROJECT_STRUCTURE.md    # This file
├── package.json           # Root package configuration
├── pnpm-workspace.yaml    # PNPM workspace configuration
├── tsconfig.base.json     # Base TypeScript configuration
├── turbo.json             # Turbo build configuration
└── pnpm-lock.yaml         # Dependency lock file
```

## 📱 Applications Directory (`apps/`)

### User Web Application (`apps/user-web/)

```
apps/user-web/
├── .env.local             # Local environment variables
├── .gitignore             # Git ignore patterns
├── package.json           # Application dependencies
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── app/                   # Next.js App Router
│   ├── (auth)/           # Auth route group
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   ├── (dashboard)/      # Dashboard route group
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── settings/
│   │       └── page.tsx
│   ├── api/              # API routes
│   │   ├── auth/
│   │   │   └── route.ts
│   │   └── users/
│   │       └── route.ts
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── loading.tsx       # Loading component
│   ├── error.tsx         # Error boundary
│   ├── not-found.tsx     # 404 page
│   └── page.tsx          # Home page
├── components/           # App-specific components
│   ├── ui/              # UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── index.ts
│   ├── layout/          # Layout components
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── Footer.tsx
│   └── features/        # Feature components
│       ├── UserProfile/
│       └── Dashboard/
├── lib/                  # Utilities and configurations
│   ├── auth.ts          # Authentication utilities
│   ├── db.ts            # Database configuration
│   ├── utils.ts         # Utility functions
│   └── validations.ts   # Validation schemas
├── hooks/               # Custom React hooks
│   ├── useAuth.ts
│   ├── useApi.ts
│   └── useLocalStorage.ts
├── types/               # App-specific types
│   ├── api.ts
│   ├── user.ts
│   └── index.ts
├── public/              # Static assets
│   ├── icons/
│   ├── images/
│   └── favicon.ico
└── styles/              # Style files
    ├── globals.css
    └── components.css
```

### Admin Web Application (`apps/admin-web/)

```
apps/admin-web/
├── .env.local             # Local environment variables
├── .gitignore             # Git ignore patterns
├── package.json           # Application dependencies
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── index.html             # Entry HTML
├── public/                # Static assets
│   ├── icons/
│   ├── images/
│   └── favicon.ico
├── src/                   # Source code
│   ├── main.tsx          # Application entry point
│   ├── App.tsx           # Root component
│   ├── components/       # App-specific components
│   │   ├── ui/          # UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── index.ts
│   │   ├── layout/      # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Footer.tsx
│   │   └── features/    # Feature components
│   │       ├── UserManagement/
│   │       ├── Analytics/
│   │       └── Settings/
│   ├── pages/           # Page components
│   │   ├── Dashboard.tsx
│   │   ├── Users.tsx
│   │   ├── Settings.tsx
│   │   └── Login.tsx
│   ├── hooks/           # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useApi.ts
│   │   └── usePermissions.ts
│   ├── services/        # API services
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   └── users.ts
│   ├── utils/           # Utility functions
│   │   ├── constants.ts
│   │   ├── helpers.ts
│   │   └── validations.ts
│   ├── types/           # App-specific types
│   │   ├── api.ts
│   │   ├── user.ts
│   │   └── index.ts
│   └── styles/          # Style files
│       ├── globals.css
│       └── components.css
└── dist/                 # Build output
```

### Mobile Application (`apps/mobile/)

```
apps/mobile/
├── .env                   # Environment variables
├── .gitignore             # Git ignore patterns
├── package.json           # Application dependencies
├── tsconfig.json          # TypeScript configuration
├── metro.config.js        # Metro bundler configuration
├── babel.config.js        # Babel configuration
├── app.json               # Expo configuration
├── eas.json               # EAS build configuration
├── nativewind.config.js   # NativeWind configuration
├── global.css             # Global styles
├── app/                   # Expo Router file-based routing
│   ├── (tabs)/           # Tab navigation
│   │   ├── _layout.tsx   # Tab layout
│   │   ├── index.tsx     # Home tab
│   │   ├── profile.tsx   # Profile tab
│   │   └── settings.tsx  # Settings tab
│   ├── auth/             # Auth screens
│   │   ├── login.tsx
│   │   └── register.tsx
│   ├── _layout.tsx       # Root layout
│   └── index.tsx         # Home screen
├── components/           # Mobile-specific components
│   ├── ui/              # UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── index.ts
│   ├── layout/          # Layout components
│   │   ├── Header.tsx
│   │   ├── TabBar.tsx
│   │   └── Container.tsx
│   └── features/        # Feature components
│       ├── UserProfile/
│       ├── Dashboard/
│       └── Settings/
├── constants/            # App constants
│   ├── colors.ts
│   ├── sizes.ts
│   └── index.ts
├── hooks/               # Custom React hooks
│   ├── useAuth.ts
│   ├── useApi.ts
│   └── useStorage.ts
├── utils/               # Utility functions
│   ├── api.ts
│   ├── storage.ts
│   ├── helpers.ts
│   └── validations.ts
├── types/               # App-specific types
│   ├── api.ts
│   ├── navigation.ts
│   └── index.ts
├── assets/              # Static assets
│   ├── images/
│   ├── icons/
│   └── fonts/
└── __tests__/           # Test files
    ├── components/
    ├── hooks/
    └── utils/
```

## 📦 Shared Packages Directory (`packages/`)

### UI Components Package (`packages/ui/)

```
packages/ui/
├── package.json           # Package configuration
├── tsconfig.json          # TypeScript configuration
├── src/                   # Source code
│   ├── components/        # UI components
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.types.ts
│   │   │   └── index.ts
│   │   ├── Input/
│   │   │   ├── Input.tsx
│   │   │   ├── Input.test.tsx
│   │   │   ├── Input.stories.tsx
│   │   │   ├── Input.types.ts
│   │   │   └── index.ts
│   │   ├── Card/
│   │   ├── Modal/
│   │   ├── Badge/
│   │   └── index.ts      # Component exports
│   ├── hooks/            # UI-specific hooks
│   │   ├── useTheme.ts
│   │   ├── useAnimation.ts
│   │   └── index.ts
│   ├── utils/            # UI utilities
│   │   ├── cn.ts         # Classname utility
│   │   ├── styles.ts     # Style utilities
│   │   └── index.ts
│   ├── types/            # UI types
│   │   ├── component.ts
│   │   ├── theme.ts
│   │   └── index.ts
│   └── index.ts          # Main export
├── styles/               # Global styles
│   ├── globals.css
│   └── theme.css
├── stories/              # Storybook stories
│   ├── Button.stories.tsx
│   ├── Input.stories.tsx
│   └── index.ts
├── tests/                # Test utilities
│   ├── setup.ts
│   └── mocks.ts
└── dist/                 # Build output
```

### Types Package (`packages/types/)

```
packages/types/
├── package.json           # Package configuration
├── tsconfig.json          # TypeScript configuration
├── src/                   # Source code
│   ├── api/              # API types
│   │   ├── requests.ts
│   │   ├── responses.ts
│   │   ├── errors.ts
│   │   └── index.ts
│   ├── user/             # User-related types
│   │   ├── profile.ts
│   │   ├── permissions.ts
│   │   ├── preferences.ts
│   │   └── index.ts
│   ├── common/           # Common utility types
│   │   ├── base.ts
│   │   ├── pagination.ts
│   │   ├── sorting.ts
│   │   └── index.ts
│   ├── ui/               # UI types
│   │   ├── components.ts
│   │   ├── theme.ts
│   │   ├── forms.ts
│   │   └── index.ts
│   └── index.ts          # Main export
├── tests/                # Type tests
│   ├── api.test.ts
│   ├── user.test.ts
│   └── common.test.ts
└── dist/                 # Build output
```

### API Package (`packages/api/)

```
packages/api/
├── package.json           # Package configuration
├── tsconfig.json          # TypeScript configuration
├── src/                   # Source code
│   ├── client/           # API client configuration
│   │   ├── base.ts       # Base client setup
│   │   ├── interceptors.ts # Request/response interceptors
│   │   ├── types.ts      # Client types
│   │   └── index.ts
│   ├── endpoints/        # API endpoint definitions
│   │   ├── auth.ts       # Authentication endpoints
│   │   ├── users.ts      # User endpoints
│   │   ├── dashboard.ts  # Dashboard endpoints
│   │   └── index.ts
│   ├── hooks/            # API hooks (React Query/SWR)
│   │   ├── useAuth.ts    # Auth hooks
│   │   ├── useUsers.ts   # User hooks
│   │   ├── useDashboard.ts # Dashboard hooks
│   │   └── index.ts
│   ├── types/            # API-specific types
│   │   ├── requests.ts
│   │   ├── responses.ts
│   │   ├── errors.ts
│   │   └── index.ts
│   ├── utils/            # API utilities
│   │   ├── validation.ts # Request validation
│   │   ├── transform.ts  # Data transformation
│   │   ├── cache.ts      # Caching utilities
│   │   └── index.ts
│   └── index.ts          # Main export
├── mocks/                # API mocking utilities
│   ├── handlers.ts       # MSW handlers
│   ├── data.ts          # Mock data
│   └── index.ts
├── tests/                # Test utilities
│   ├── setup.ts
│   ├── helpers.ts
│   └── fixtures.ts
└── dist/                 # Build output
```

## 🔧 Configuration Files

### Root Configuration Files

#### `package.json` (Root)
```json
{
  "name": "lifekernel",
  "private": true,
  "version": "1.0.0",
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build",
    "lint": "turbo lint",
    "start:mobile": "turbo dev --filter=mobile",
    "start:admin": "turbo dev --filter=admin-web",
    "start:user": "turbo dev --filter=user-web"
  },
  "packageManager": "pnpm@10.14.0",
  "devDependencies": {
    "autoprefixer": "^10.4.23",
    "postcss": "^8.5.6",
    "tailwindcss": "3.4.19",
    "turbo": "^2.7.2",
    "typescript": "^5.9.3"
  }
}
```

#### `pnpm-workspace.yaml`
```yaml
packages:
  - apps/*
  - packages/*

nodeLinker: hoisted
```

#### `turbo.json`
```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "dev": {
      "cache": false,
      "persistent": true
    },
    "build": {
      "dependsOn": ["^build"],
      "outputs": [
        "dist/**",
        ".next/**",
        "build/**"
      ]
    },
    "lint": {}
  }
}
```

#### `tsconfig.base.json`
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "allowImportingTsExtensions": true,
    "jsx": "react-jsx",
    "strict": true,
    "noEmit": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "paths": {
      "@acme/ui": ["./packages/ui/src"],
      "@acme/types": ["./packages/types/src"],
      "@acme/api": ["./packages/api/src"]
    }
  }
}
```

## 📋 File Naming Conventions

### General Rules

- **Files**: kebab-case (`user-profile.tsx`)
- **Folders**: kebab-case (`user-profile/`)
- **Components**: PascalCase (`UserProfile.tsx`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)

### Component Structure

```
ComponentName/
├── ComponentName.tsx      # Main component
├── ComponentName.test.tsx # Tests
├── ComponentName.stories.tsx # Storybook stories
├── ComponentName.types.ts # Component types
├── ComponentName.styles.ts # Component styles
├── hooks/                # Component-specific hooks
├── utils/                # Component-specific utils
└── index.ts              # Exports
```

### Hook Structure

```
hooks/
├── useHookName.ts        # Hook implementation
├── useHookName.test.ts   # Hook tests
└── index.ts              # Hook exports
```

## 🔄 Import/Export Patterns

### Imports

```typescript
// External libraries
import React from 'react';
import { useState } from 'react';

// Internal packages
import { Button } from '@acme/ui';
import { User } from '@acme/types';
import { useAuth } from '@acme/api';

// Local imports
import { Component } from './Component';
import { utility } from '../utils/utility';
import { type LocalType } from './types';
```

### Exports

```typescript
// Named exports (preferred)
export const Component = () => {};
export type ComponentProps = {};
export const helper = () => {};

// Default exports (for main component)
export default Component;

// Re-exports
export { Button, Input } from './components';
export type { User, Profile } from './types';
```

## 🎯 Best Practices

### Directory Organization

1. **Group by feature**, not by file type
2. **Keep related files together**
3. **Use index files** for clean imports
4. **Separate concerns** clearly

### File Structure Guidelines

1. **Components**: One component per file
2. **Types**: Co-locate with usage or in dedicated types file
3. **Tests**: Same directory as implementation
4. **Stories**: Same directory as component
5. **Utils**: Group by functionality

### Naming Guidelines

1. **Be descriptive**: Use meaningful names
2. **Be consistent**: Follow established patterns
3. **Avoid abbreviations**: Use full words
4. **Use prefixes**: For related groups (use*, *Service, etc.)

---

This project structure provides a solid foundation for scalable, maintainable development. Follow these patterns to ensure consistency across the monorepo.
