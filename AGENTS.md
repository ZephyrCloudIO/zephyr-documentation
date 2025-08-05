# AGENTS.md - Development Guidelines

## Build/Test/Lint Commands
- `pnpm dev` - Start development server on port 3030
- `pnpm build` - Build for production
- `pnpm lint` - Run Biome linter
- `pnpm format` - Format and fix code with Biome
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm preview` - Preview built site

## Code Style Guidelines
- **Formatter**: Biome with 2-space indentation, double quotes
- **Imports**: Use `@/*` path aliases, organize imports automatically
- **Types**: Strict TypeScript, use interfaces for props, explicit return types for functions
- **React**: Use `React.forwardRef` for components, prefer function components
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Files**: `.tsx` for React components, `.ts` for utilities
- **CSS**: Tailwind classes, use `cn()` utility for conditional classes
- **Exports**: Named exports preferred, use `export const` for components

## Error Handling
- Use structured error objects with `code` and `name` properties
- Prefix error codes with "ZE" (e.g., "ZE10010", "ZE20015")
- Group errors by category (build, deploy, etc.)