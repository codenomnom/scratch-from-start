const stripLastSection = (path) => path.slice(0, path.lastIndexOf('/'));


const filterFirstLevelSubpages = (collection, location) => {
  // const location = page.filePathStem;
  const rootFolder = stripLastSection(location); // "root" folder
  console.log('-> subpages for', rootFolder);

  const filtered = collection.filter((page) => {
    const pageFolder = stripLastSection(page.filePathStem);
    if (rootFolder === pageFolder) { // the same page
      return false;
    }
    if (pageFolder.indexOf(rootFolder) === 0) { // in the same directory
      const pageFolderWithoutRoot = pageFolder.replace(rootFolder, '');
      const isNested = pageFolderWithoutRoot.lastIndexOf('/') !== 0;
      console.log('-- pageFolder:', pageFolder);
      console.log('-- pageFolderWithoutRoot:', pageFolderWithoutRoot);
      console.log('-- isNested:', isNested);
      if (isNested) {
        return false;
      }
      return true;
    }

    return false;
  });

  console.log('for root: ', rootFolder);
  console.log(filtered.map((page) => [page.data.title, page.templateContent]));

  return filtered;
};

const filterByLevel = (collection, level) => collection.filter((page) => page.data.level === level);

module.exports = {
  filterByLevel,
  filterFirstLevelSubpages,
};
