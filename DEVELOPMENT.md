# Development Guide

This guide provides detailed instructions for setting up and working with the LifeKernel monorepo development environment.

## 🚀 Quick Start

### System Requirements

- **Node.js**: >= 20.0.0
- **PNPM**: >= 10.14.0
- **Git**: Latest version
- **VS Code**: Recommended IDE

### Initial Setup

```bash
# 1. Clone the repository
git clone https://github.com/DaDDy-chilll/lifekernel/
cd LifeKernel

# 2. Install PNPM (if not already installed)
npm install -g pnpm@10.14.0

# 3. Install dependencies
pnpm install

# 4. Start development
pnpm dev
```

## 🛠️ Development Environment Setup

### VS Code Configuration

**Recommended Extensions:**

```json
{
  "recommendations": [
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-json",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-turbo"
  ]
}
```

**Workspace Settings (`.vscode/settings.json`):**

```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  }
}
```

### Environment Configuration

**Create environment files:**

```bash
# User Web
apps/user-web/.env.local
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_ENV=development

# Admin Web
apps/admin-web/.env.local
VITE_API_URL=http://localhost:8000
VITE_APP_ENV=development

# Mobile
apps/mobile/.env
EXPO_PUBLIC_API_URL=http://localhost:8000
EXPO_PUBLIC_APP_ENV=development
```

## 📱 Application Development

### User Web (Next.js)

**Development Server:**

```bash
pnpm start:user
# Access: http://localhost:3000
```

**Key Features:**

- **App Router**: File-based routing in `app/` directory
- **Server Components**: Automatic SSR for components
- **API Routes**: Backend logic in `app/api/`
- **Static Assets**: Optimized image and asset handling

**Development Tips:**

- Use `console.log` for debugging server components
- Check Network tab for API requests
- Use React DevTools for component debugging
- Enable Next.js Debug Mode: `NEXT_DEBUG=1`

### Admin Web (Vite + React)

**Development Server:**

```bash
pnpm start:admin
# Access: http://localhost:5173
```

**Key Features:**

- **Fast HMR**: Instant hot module replacement
- **Modern Build**: Optimized bundling with Rollup
- **Plugin Ecosystem**: Extensive Vite plugin support
- **Dev Tools**: Rich development tooling

**Development Tips:**

- Use Vite DevTools for bundle analysis
- Enable source maps for debugging
- Use `vite.config.ts` for custom configuration
- Leverage HMR for rapid iteration

### Mobile (Expo/React Native)

**Development Server:**

```bash
pnpm start:mobile
# Access: Expo Go app or http://localhost:8081 (web)
```

**Key Features:**

- **Cross-Platform**: iOS, Android, Web support
- **Expo Router**: File-based navigation
- **NativeWind**: Tailwind CSS for React Native
- **Expo EAS**: Build and deployment services

**Development Tips:**

- Use Expo Go for quick testing
- Use physical devices for performance testing
- Check Expo DevTools for debugging
- Use `expo install` for native dependencies

## 📦 Package Development

### Shared Packages Workflow

**Development Workflow:**

```bash
# 1. Work on shared package
cd packages/ui

# 2. Make changes
# Edit components in src/

# 3. Test in consuming app
cd ../../apps/user-web
pnpm dev

# 4. Verify changes work across apps
cd ../../apps/admin-web
pnpm dev
```

**Package Publishing (Internal):**

```bash
# Update package version
cd packages/ui
npm version patch

# Rebuild dependent packages
pnpm build

# Test changes
pnpm test
```

### UI Component Development

**Component Structure:**

```
packages/ui/src/components/
├── Button/
│   ├── Button.tsx          # Component implementation
│   ├── Button.test.tsx     # Tests
│   ├── Button.stories.tsx  # Storybook stories
│   └── index.ts           # Exports
└── index.ts               # Barrel exports
```

**Component Template:**

```typescript
// packages/ui/src/components/Button/Button.tsx
import React from 'react';
import { ButtonProps } from './Button.types';
import { buttonStyles } from './Button.styles';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  return (
    <button
      className={buttonStyles({ variant, size })}
      {...props}
    >
      {children}
    </button>
  );
};
```

## 🔄 Testing Strategy

### Unit Testing

**Setup:**

```bash
# Install testing dependencies (if needed)
pnpm add -D jest @testing-library/react @testing-library/jest-dom

# Run tests
pnpm test

# Run tests in watch mode
pnpm test --watch
```

**Test Structure:**

```typescript
// packages/ui/src/components/Button/Button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('applies variant styles', () => {
    render(<Button variant="secondary">Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-gray-500');
  });
});
```

### Integration Testing

**E2E Testing Setup:**

```bash
# Install Playwright
pnpm add -D @playwright/test

# Run E2E tests
pnpm test:e2e
```

**E2E Test Example:**

```typescript
// apps/user-web/e2e/user-journey.spec.ts
import { test, expect } from '@playwright/test';

test('user can navigate and interact', async ({ page }) => {
  await page.goto('/');

  // Test navigation
  await page.click('[data-testid="nav-dashboard"]');
  await expect(page).toHaveURL('/dashboard');

  // Test interaction
  await page.fill('[data-testid="search-input"]', 'test query');
  await page.click('[data-testid="search-button"]');
  await expect(page.locator('[data-testid="search-results"]')).toBeVisible();
});
```

## 🎨 Styling Development

### Tailwind CSS Workflow

**Development Setup:**

```bash
# Watch for CSS changes
pnpm dev:css

# Build CSS
pnpm build:css
```

**Component Styling:**

```typescript
// packages/ui/src/components/Button/Button.styles.ts
import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
        destructive: 'bg-red-600 text-white hover:bg-red-700',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);
```

### Mobile Styling (NativeWind)

**Setup:**

```typescript
// apps/mobile/nativewind.config.js
module.exports = {
  input: './global.css',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    '../../packages/ui/src/**/*.{js,jsx,ts,tsx}',
  ],
};
```

**Component Usage:**

```typescript
// apps/mobile/components/Button.tsx
import { View, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

export const Button = ({ children, variant = 'primary' }) => {
  return (
    <StyledView className={`p-4 rounded ${variant === 'primary' ? 'bg-blue-600' : 'bg-gray-200'}`}>
      <StyledText className="text-white font-medium">{children}</StyledText>
    </StyledView>
  );
};
```

## 🔧 Debugging

### Common Issues

**Module Resolution:**

```bash
# Clear cache
pnpm store prune
rm -rf .turbo node_modules
pnpm install

# Rebuild
pnpm build
```

**Metro Issues (Mobile):**

```bash
# Clear Metro cache
cd apps/mobile
npx expo start --clear

# Reset project
npx expo install --fix
```

**TypeScript Issues:**

```bash
# Rebuild types
pnpm build

# Check TypeScript configuration
npx tsc --noEmit
```

### Debugging Tools

**Browser DevTools:**

- React DevTools for component inspection
- Redux DevTools for state debugging
- Network tab for API requests
- Console for error logging

**Mobile Debugging:**

- Expo DevTools for React Native debugging
- Flipper for advanced debugging
- Device logs for native issues
- Simulator/Emulator debugging

**VS Code Debugging:**

```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Next.js",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/apps/user-web/node_modules/next/dist/bin/next",
      "args": ["dev"],
      "cwd": "${workspaceFolder}/apps/user-web"
    }
  ]
}
```

## 🚀 Performance Optimization

### Development Performance

**Turbo Caching:**

```bash
# Check cache status
pnpm turbo --force

# Clear cache
pnpm turbo clean
```

**Build Optimization:**

```bash
# Analyze bundle size
pnpm build --analyze

# Optimize images
pnpm optimize:images
```

### Runtime Performance

**React Optimization:**

```typescript
// Use React.memo for expensive components
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* Complex rendering */}</div>;
});

// Use useMemo for expensive calculations
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

// Use useCallback for stable function references
const handleClick = useCallback((id: string) => {
  onItemClick(id);
}, [onItemClick]);
```

**Mobile Performance:**

```typescript
// Use FlatList for long lists
<FlatList
  data={items}
  renderItem={renderItem}
  keyExtractor={item => item.id}
  getItemLayout={(data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  })}
/>

// Optimize images
<Image
  source={{ uri: imageUrl }}
  style={{ width: 100, height: 100 }}
  resizeMode="cover"
  cachePolicy="memory-disk"
/>
```

## 🔄 CI/CD Development

### Local Testing

**Pre-commit Hooks:**

```bash
# Install husky
pnpm add -D husky

# Setup hooks
npx husky install
npx husky add .husky/pre-commit "pnpm lint && pnpm test"
```

**Pipeline Testing:**

```bash
# Test CI pipeline locally
docker compose -f docker-compose.ci.yml up --build

# Run all checks
pnpm lint && pnpm test && pnpm build
```

### Environment Management

**Development Environments:**

```bash
# Local development
pnpm dev:local

# Staging environment
pnpm dev:staging

# Production build test
pnpm build:production
```

## 📚 Learning Resources

### Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Vite Documentation](https://vitejs.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [Turbo Documentation](https://turbo.build/repo/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Best Practices

- [React Best Practices](https://react.dev/learn/thinking-in-react)
- [TypeScript Best Practices](https://typescript-eslint.io/rules/)
- [Monorepo Best Practices](https://monorepo.tools/)

### Community

- [GitHub Discussions](https://github.com/vercel/turborepo/discussions)
- [Discord Communities](https://discord.gg/bZD5Ydjj)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/monorepo)

---

This development guide should help you get started with LifeKernel development. For specific questions, refer to the individual application documentation or reach out to the development team.
