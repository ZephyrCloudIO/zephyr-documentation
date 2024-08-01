export const Footer = () => {
  return (
    <div id="footer-copyright">
      <div className="flex gap-4">
        {' '}
        <p>
          <a
            href="https://discord.gg/c28rAdS6HY"
            target="_blank"
            rel="noreferrer"
          >
            Discord Server
          </a>
        </p>
        <p>
          <a
            href="https://github.com/ZephyrCloudIO/docs"
            target="_blank"
            rel="noreferrer"
          >
            Edit this page
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

      <p> © 2024 Zephyr Cloud. All rights reserved.</p>
    </div>
  );
};
