import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/navigation";
import "./scripts/skills";
import "./scripts/examples";
