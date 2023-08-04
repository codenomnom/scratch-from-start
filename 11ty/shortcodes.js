exports.registerShortcodes = (eleventyConfig) => {
  eleventyConfig.addShortcode('chip', (type) => `<em class="chip-${type}" data-help="${type}">${type}</em>`);
};
