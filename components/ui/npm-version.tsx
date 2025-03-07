import React from "react";
import { version } from "../../lib/site.config";

export const CurrentVersion = () => {
  return (
    <div>
      <p>Current version: {version}</p>
    </div>
  );
};
