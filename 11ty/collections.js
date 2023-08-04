const { dir } = require('../11ty/config');

const getTopLevelPages = (collection) => {
  const map = {}; // folder -> page
  const levelsIndexes = {};

  const printPageAndChildren = (page) => {
    const indent = Array(page.data.level).join(' ');
    console.log(`${indent}- `, page.data.id, page.data.level);
    page.children.forEach(printPageAndChildren);
  };

  const addIndexes = (pages) => pages
    .forEachChain((page, index) => {
      const parent = map[page.data.parentFolder];
      page.data.orderLocal = (parent?.data.orderLocal || []).concat([index + 1]);

      const globalIndex = (levelsIndexes[page.data.level] || 0) + 1;
      page.data.globalLevelIndex = levelsIndexes[page.data.level] = globalIndex; // TODO: remove and use array indexes when printing headings
      page.data.orderGlobal = (parent?.data.orderGlobal || []).concat([globalIndex]);

      addIndexes(page.children);
    });

  return addIndexes(collection
    .getFilteredByGlob(`${dir.contentAbsolute}/**/*.md`)
    .filter((page) => page.data.show !== false) // remove hidden pages (might be wip)
    .forEachChain((page) => {
      map[page.data.folder] = page; // map folder -> page (used for parenting)
      page.children = []; // add children prop to each page for easier sorting/filtering
    })
    .sort((a, b) => b.data.level - a.data.level || a.filePathStem.localeCompare(b.filePathStem)) // sort by level, then by file/folder name
    .forEachChain((page) => map[page.data.parentFolder]?.children.push(page)) // nest - works since they are already sorted by level
    .filter((page) => page.data.level === 1)) // list only top level pages (others are nested into page.children)
};


exports.registerCollections = (eleventyConfig) => {
  eleventyConfig.addCollection('pages', getTopLevelPages);
};
