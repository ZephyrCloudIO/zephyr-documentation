import {
  NavigationCard,
  NavigationCardContent,
  NavigationCardDescription,
  NavigationCardHeader,
  NavigationCardTitle,
} from "@zephyr-docs/shared";

const apps = [
  {
    name: "AI Documentation",
    description: "AI and machine learning integration guides",
    href: "http://localhost:3001",
    icon: "🤖",
  },
  {
    name: "Cloud Documentation",
    description: "Cloud deployment and infrastructure guides",
    href: "http://localhost:3002",
    icon: "☁️",
  },
  {
    name: "Mobile Documentation",
    description: "Mobile development and React Native guides",
    href: "http://localhost:3003",
    icon: "📱",
  },
  {
    name: "Sidepanel Documentation",
    description: "Browser extension and sidepanel guides",
    href: "http://localhost:3004",
    icon: "🔧",
  },
  {
    name: "Web Documentation",
    description: "Web development and frontend guides",
    href: "http://localhost:3005",
    icon: "🌐",
  },
];

export function NavigationGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {apps.map((app) => (
        <NavigationCard
          key={app.name}
          className="hover:shadow-lg transition-shadow"
        >
          <NavigationCardHeader>
            <div className="text-4xl mb-2">{app.icon}</div>
            <NavigationCardTitle>{app.name}</NavigationCardTitle>
            <NavigationCardDescription>
              {app.description}
            </NavigationCardDescription>
          </NavigationCardHeader>
          <NavigationCardContent>
            <a
              href={app.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              View Documentation →
            </a>
          </NavigationCardContent>
        </NavigationCard>
      ))}
    </div>
  );
}
