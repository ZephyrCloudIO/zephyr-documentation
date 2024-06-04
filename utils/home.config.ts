export interface CardItemProps {
    title: string;
    href: string;
    description?: string;
    className?: string;
    variant?: "small" | "default" | "large";

};

export type CardProps = Record<string, CardItemProps[]>;
export const HomeConfig: CardProps = {
    start: [
        {
            "title": "Why Zephyr", // TODO: shouldn't introduction and "Why" be on the same page?
            "description": "Have an overview of modern application deployment's complexity and how Zephyr can speed up the process.",
            "href": "/guide/getting-started/why-zephyr-cloud",

        },
        {
            "title": "Adding Zephyr to existing application",
            "description": "One line of code to add Zephyr to your existing application.",
            "href": "/guide/getting-started/existing-app",
            "variant": "small"
        },
        {
            "title": "Module Federation Application",
            "description": "Add Zephyr to applications built on module federation.",
            "href": "/guide/getting-started/create-mf-app",
            "variant": "small"
        },
    ],
    configure: [
        {
            "title": "Migrate from vanilla module federation",
            href: "/guide/getting-started/vanilla-mf",
            "variant": "small"
        },
        {
            "title": "Migrate from Medusa",
            href: "/migrating-from-existing-vanilla-module-federation",
            "variant": "small"
        },
        {
            "title": "Using Zephyr in a monorepo",
            href: "/migrating-from-medusa",
            "variant": "small"
        },

    ],
    receipes: []
}