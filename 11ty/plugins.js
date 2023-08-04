const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const { EleventyRenderPlugin } = require('@11ty/eleventy');

const plugins = [syntaxHighlight, EleventyRenderPlugin]

exports.registerPlugins = (eleventyConfig) => plugins.forEach((plugin) => eleventyConfig.addPlugin(plugin));
