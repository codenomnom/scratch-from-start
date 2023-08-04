const util = require('util');

const filters = {
  toJSON: util.inspect,
  numberToAlphabet: (num) => String.fromCharCode(97 + num),
}

module.exports = {
  ...filters,
  registerFilters: (eleventyConfig) => {
    Object.keys(filters).forEach((name) => eleventyConfig.addFilter(name, filters[name]));
  },
};
