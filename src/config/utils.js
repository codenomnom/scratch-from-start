const { dir } = require('../../11ty/config');

Array.prototype.forEachChain = function () {
  this.forEach(...arguments);
  return this;
};

const removeFirstFolderFromPath = (path) => {
  if (path.indexOf('/') === 0) {
    path = path.substring(1); // remove first trailing slash
  }

  return path.substring(path.indexOf('/') + 1);
};

const removeLastSectionFromPath = (path, times = 1) => {
  for (i = 0; i < times; i++) {
    path = path.substr(0, path.lastIndexOf('/'))
  }
  return path;
};

const removeTrailingSlashFromStart = (path) => path.charAt(0) === '/' ? path.substring(1) : path;

const removeContentRoot = (path) => {
  if (!path) {
    return path;
  }
  const { contentAbsolute } = dir;
  const contentRelative = `/${dir.content}/`

  if (path.indexOf(contentAbsolute) === 0) {
    return path.substring(contentAbsolute.length);
  } else if (path.indexOf(contentRelative) === 0) {
    return path.substring(contentRelative.length);
  }

  return path;
};

const removeRootFromPath = (path, root) => {
  path = removeTrailingSlashFromStart(path);
  root = removeTrailingSlashFromStart(root);
  const index = path.indexOf(root);
  if (index === 0) {
    return path.substring(index + root.length);
  }
};

module.exports = {
  removeContentRoot,
  removeRootFromPath,
  removeLastSectionFromPath,
  removeTrailingSlashFromStart,
};
