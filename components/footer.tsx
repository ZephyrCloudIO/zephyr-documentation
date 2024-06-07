import {TailwindIndicator} from "./tailwind-indicator";

export const Footer = () => {
  return (
    <div id="footer-copyright">
      {" "}
        <TailwindIndicator />
      <p>
        Join our <a href="#">Discord Server</a> for support.
      </p>
      <p>
        <a href="https://github.com/ZephyrCloudIO/docs">Edit this page</a>.
      </p>
      <p> © 2024 Zephyr Cloud. All rights reserved.</p>
    </div>
  );
};
