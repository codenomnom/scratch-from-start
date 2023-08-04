const { removeLastSectionFromPath, removeContentRoot } = require('../config/utils');

module.exports = {
  content: true,
  permalink: false,
  eleventyComputed: {
    id: (page) => removeContentRoot(page.page.inputPath),

    level: (page) => removeContentRoot(page.page.inputPath).split('/').length - 1,
    folder: (page) => removeLastSectionFromPath(removeContentRoot(page.page.filePathStem), 1),
    parentFolder: (page) => removeLastSectionFromPath(removeContentRoot(page.page.filePathStem), 2),
    slug: (page) => page.slug || page.page.fileSlug,
    draft: (data) => data.draft || false,
  }
};
