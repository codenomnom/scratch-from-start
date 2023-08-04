const config = require('./11ty/config');
const { registerFilters } = require('./11ty/filters');
const { registerPlugins } = require('./11ty/plugins');
const { registerShortcodes } = require('./11ty/shortcodes');
const { registerCollections } = require('./11ty/collections');

const TEMPLATE_ENGINE = 'liquid';
const { dir } = config;

module.exports = (eleventyConfig) => {
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true, // false by default in 11ty
  });

  // eleventyConfig.addWatchTarget(imagePaths.input);
  eleventyConfig.addWatchTarget('./src/styles/');
  eleventyConfig.addPassthroughCopy('src/images');

  registerPlugins(eleventyConfig);
  registerFilters(eleventyConfig);
  registerShortcodes(eleventyConfig);
  registerCollections(eleventyConfig);

  return {
    markdownTemplateEngine: TEMPLATE_ENGINE,
    dataTemplateEngine: TEMPLATE_ENGINE,
    htmlTemplateEngine: TEMPLATE_ENGINE,
    templateFormats: ['html', 'md', TEMPLATE_ENGINE],
    dir,
  }
};
