# Zephyr Documentation - Module Federation

This repository contains the Zephyr Cloud documentation implemented as a module federation architecture with multiple independent micro-frontend applications.

## Architecture

- **Host App** (`apps/host/`): Main documentation site running on port 3030
- **AI App** (`apps/ai/`): AI and machine learning documentation on port 3001
- **Cloud App** (`apps/cloud/`): Cloud deployment and infrastructure on port 3002  
- **Mobile App** (`apps/mobile/`): Mobile development and React Native on port 3003
- **Sidepanel App** (`apps/sidepanel/`): Browser extension and tools on port 3004
- **Web App** (`apps/web/`): Web development and frontend guides on port 3005

## Getting Started

### Prerequisites

- Node.js 22.x
- pnpm 10.x

### Installation

1. Install dependencies for all applications:
   ```bash
   pnpm install:all
   ```

2. Start all applications in development mode:
   ```bash
   pnpm dev
   ```

3. Visit the host application at [http://localhost:3030](http://localhost:3030)

4. Navigate to `/apps` to see the module federation navigation page

### Individual App Commands

Start individual applications:
```bash
pnpm dev:host      # Host app on port 3030
pnpm dev:ai        # AI docs on port 3001  
pnpm dev:cloud     # Cloud docs on port 3002
pnpm dev:mobile    # Mobile docs on port 3003
pnpm dev:sidepanel # Sidepanel docs on port 3004
pnpm dev:web       # Web docs on port 3005
```

Build individual applications:
```bash
pnpm build:host
pnpm build:ai
pnpm build:cloud
pnpm build:mobile  
pnpm build:sidepanel
pnpm build:web
```

### Build All

Build all applications:
```bash
pnpm build
```

## Module Federation Configuration

Each remote application exposes:
- `./App`: Main documentation index
- `./Guide`: Guide section

The host application consumes all remote applications and provides a unified navigation experience.

## Development Workflow

1. Each app can be developed independently
2. Changes are reflected immediately with hot reload
3. The host app provides navigation between all documentation sections
4. Each app maintains its own dependencies and can use different RSPress versions if needed

## Technology Stack

- **RSPress**: Documentation framework
- **Module Federation**: Micro-frontend architecture
- **React**: UI framework  
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling (in host app)

## Deployment

Each application can be deployed independently to different domains or the same domain with different paths. Update the `remotes` configuration in the host app's module federation config to point to the deployed URLs.