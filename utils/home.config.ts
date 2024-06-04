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
            "title": "Why Zephyr Cloud", // TODO: shouldn't introduction and "Why" be on the same page?
            "href": "/why-zephyr-cloud",

        },
        {
            "title": "Install Zephyr",
            "href": "/introduction",
            "variant": "small"
        },
        {
            "title": "Create Module Federation App",
            "href": "/mental-model",
            "variant": "small"
        },
    ],
    configure: [
        {
            "title": "Migrate from vanilla module federation",
            href: "/installation",
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
        {
            "title": "Migrating from Module Federation",
            href: "/migrating-from-module-federation",
            description: "Creating a module federation application",
            "variant": "small"
        }
    ]
}