module.exports = {
  css: {
    extract: false,
  },
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
  publicPath:
    process.env.NODE_ENV === 'production' ? '/vue-triangle-separator/' : '/',
};
