const withTM = require("next-transpile-modules")(["vision"]);

module.exports = withTM({
  reactStrictMode: true,
});
