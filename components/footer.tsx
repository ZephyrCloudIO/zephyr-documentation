const footerConfig = {
  discord: {
    label: 'Discord',
    href: 'https://discord.gg/zephyrcloud',
  },
  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/zephyr-cloud',
  },
  blog: {
    label: 'Blog',
    href: 'https://zephyr-cloud.io/blog',
  },
  pricing: {
    label: 'Pricing',
    href: 'https://zephyr-cloud.io/pricing',
  },
  faqs: {
    label: 'FAQs',
    href: 'https://zephyr-cloud.io/faqs',
  },
  contact: {
    label: 'Contact',
    href: 'https://zephyr-cloud.io/contact',
  },
  status: {
    label: 'System status',
    href: 'https://status.zephyr-cloud.io/',
  },
};

export const Footer = () => {
  const array = Object.values(footerConfig);
  return (
    <footer id="footer-copyright">
      <div className="flex gap-4">
        {array.slice(0, 3).map((item) => (
          <p>
            <a href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          </p>
        ))}
      </div>
      <div className="flex gap-4">
        {array.slice(3).map((item) => (
          <p>
            <a href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          </p>
        ))}
      </div>
      <p className="mt-3">
        © {new Date().getFullYear()} <b>Zephyr Cloud</b>. All rights reserved.
      </p>
    </footer>
  );
};
