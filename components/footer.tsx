export const Footer = () => {
  return (
    <div id="footer-copyright">
      <div className="flex gap-4">
        <p>
          <a
            href="https://zephyr-cloud.io/discord"
            target="_blank"
            rel="noreferrer"
          >
            Discord Server
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/company/zephyr-cloud"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p>
          <a
            href="mailto:support@zephyr-cloud.io"
            target="_blank"
            rel="noreferrer"
          >
            Email us
          </a>
        </p>
      </div>

      <p>
        © {new Date().getFullYear()} <b>Zephyr Cloud</b>. All rights reserved.
      </p>
    </div>
  );
};
