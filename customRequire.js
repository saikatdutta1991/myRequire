const path = require("path");
const fs = require("fs");

const getCode = fname =>
  fs.readFileSync(path.resolve(fname), { encoding: "utf8" });

customRequire = modulePath => {
  const code = getCode(modulePath);
  const exports = {};
  const module = { exports };
  const wrapper = new Function("module", "exports", code);
  wrapper(module, exports);
  return module.exports;
};

module.exports = customRequire;
