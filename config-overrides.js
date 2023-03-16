const { alias } = require("react-app-rewire-alias");
const { override, disableEsLint } = require("customize-cra");
//change relative path to alias
module.exports = function overrideReact(config) {
  alias({
    "@components": "src/components",
    "@pages": "src/pages",
    "@utils": "src/utils",
    "@contexts": "src/contexts",
    "@apis": "src/apis",
  })(config);
  override(disableEsLint());
  return config;
};
