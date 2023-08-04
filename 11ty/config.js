const dir = {
  input: 'src',
  output: 'dist',
  content: 'content',
};

dir.contentAbsolute = `./${dir.input}/${dir.content}/`;

module.exports = {
  dir,
};
