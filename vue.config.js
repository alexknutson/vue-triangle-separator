module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/demoStyles/_main.scss";`,
      },
    },
  },
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
  publicPath:
    process.env.NODE_ENV === 'production' ? '/vue-triangle-separator/' : '/',
};
