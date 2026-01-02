# Contributing to LifeKernel

Thank you for your interest in contributing to LifeKernel! This guide will help you get started with contributing to our frontend monorepo.

## 🚀 Getting Started

### Prerequisites

- Node.js >= 20.0.0
- PNPM >= 10.14.0
- Git
- VS Code (recommended)

### Setup

1. **Fork the repository**

   ```bash
   git clone <your-username>/lifekernel/
   cd LifeKernel
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Create a development branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📁 Project Structure

Understanding the monorepo structure is essential for effective contributions:

```
LifeKernel/
├── apps/                    # Applications
│   ├── admin-web/          # Admin dashboard
│   ├── mobile/             # Mobile app
│   └── user-web/           # User web app
├── packages/               # Shared packages
│   ├── api/                # API utilities
│   ├── types/              # TypeScript definitions
│   └── ui/                 # UI components
└── docs/                   # Documentation
```

## 🛠️ Development Workflow

### 1. Code Changes

- Make your changes in the appropriate app or package
- Follow the existing code style and patterns
- Add tests for new features
- Update documentation as needed

### 2. Testing

```bash
# Run linting across all packages
pnpm lint

# Build all applications
pnpm build

# Test specific applications
pnpm start:user    # Test user web
pnpm start:admin   # Test admin web
pnpm start:mobile  # Test mobile app
```

### 3. Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
feat: add new feature
fix: fix bug
docs: update documentation
style: code style changes
refactor: code refactoring
test: add or update tests
chore: build process or auxiliary tool changes
```

Examples:

```bash
git commit -m "feat(admin): add user management dashboard"
git commit -m "fix(mobile): resolve navigation issue"
git commit -m "docs: update README with setup instructions"
```

## 🎯 Types of Contributions

### 🐛 Bug Reports

When filing a bug report, please include:

- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, browser, Node version)
- Screenshots if applicable

### ✨ Feature Requests

For feature requests, provide:

- Clear description of the feature
- Use case and benefits
- Implementation suggestions (optional)
- Potential impact on existing functionality

### 💻 Code Contributions

#### Adding New Features

1. **Check existing issues** to avoid duplicates
2. **Create an issue** to discuss the feature
3. **Create a feature branch** from `develop`
4. **Implement the feature** with tests
5. **Update documentation**
6. **Submit a pull request**

#### Fixing Bugs

1. **Find the bug report** or create one
2. **Create a fix branch** from `develop`
3. **Write tests** that reproduce the bug
4. **Implement the fix**
5. **Verify all tests pass**
6. **Submit a pull request**

## 📝 Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type when possible
- Use meaningful variable and function names

### React Components

- Use functional components with hooks
- Follow React best practices
- Implement proper error boundaries
- Use consistent prop naming

### Code Style

- Follow ESLint configuration
- Use Prettier for formatting
- Write self-documenting code
- Keep functions small and focused

### File Naming

- Use kebab-case for files: `user-profile.tsx`
- Use PascalCase for components: `UserProfile.tsx`
- Use camelCase for variables and functions

## 🧪 Testing Guidelines

### Unit Tests

- Write tests for new features and bug fixes
- Test both success and error cases
- Use descriptive test names
- Mock external dependencies

### Integration Tests

- Test component interactions
- Test API integrations
- Test user workflows

### Mobile Testing

- Test on both iOS and Android
- Test different screen sizes
- Test performance on devices

## 📱 Application-Specific Guidelines

### User Web (Next.js)

- Use Next.js features appropriately
- Implement proper SEO
- Optimize for performance
- Use server-side rendering when beneficial

### Admin Web (Vite + React)

- Focus on admin-specific features
- Implement proper access controls
- Optimize for data-heavy operations
- Use appropriate state management

### Mobile (Expo/React Native)

- Follow React Native best practices
- Optimize for mobile performance
- Handle platform differences
- Test on actual devices

## 🔧 Development Tools

### VS Code Extensions (Recommended)

- TypeScript and JavaScript Language Features
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets
- Turbo Repo
- Prettier - Code formatter
- ESLint

### Git Hooks

We use Git hooks to ensure code quality:

- Pre-commit: Run linting and formatting
- Pre-push: Run tests and build checks

## 📋 Pull Request Process

### Before Submitting

1. **Test thoroughly** on all target platforms
2. **Update documentation** for any API changes
3. **Add tests** for new functionality
4. **Run full test suite** locally
5. **Rebase** your branch if needed

### Pull Request Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Checklist

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests added/updated
```

### Review Process

1. **Automated checks** must pass
2. **Code review** by maintainers
3. **Testing verification**
4. **Approval and merge**

## 🏗️ Architecture Guidelines

### Shared Packages

When contributing to shared packages:

- **`@acme/ui`**: Keep components generic and reusable
- **`@acme/types`**: Define comprehensive type definitions
- **`@acme/api`**: Handle API communication consistently

### Cross-App Considerations

- Ensure changes work across all applications
- Test shared package changes in consuming apps
- Consider backward compatibility
- Document breaking changes

## 🚨 Security Considerations

- Never commit sensitive data
- Use environment variables for secrets
- Follow security best practices
- Report security vulnerabilities privately

## 📚 Documentation

### Code Documentation

- Use JSDoc comments for functions
- Document complex logic
- Provide usage examples
- Keep documentation up-to-date

### README Updates

- Update relevant README files
- Document new features
- Update setup instructions
- Add troubleshooting information

## 🤝 Community Guidelines

### Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Follow professional standards

### Communication

- Use clear and descriptive titles
- Provide context in issues and PRs
- Be patient with reviews
- Ask questions when unsure

## 🎉 Recognition

Contributors are recognized in:

- Contributors section in README
- Release notes for significant contributions
- Special recognition for maintainers

## 📞 Getting Help

### Resources

- [Project Documentation](./README.md)
- [Next.js Documentation](https://nextjs.org/docs)
- [Expo Documentation](https://docs.expo.dev/)
- [Turbo Documentation](https://turbo.build/repo/docs)

### Support Channels

- GitHub Issues: Bug reports and feature requests
- GitHub Discussions: General questions and ideas
- Team Communication: Internal discussions

---

Thank you for contributing to LifeKernel! Your contributions help make this project better for everyone. 🚀
