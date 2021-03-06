/* eslint-env node */
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins:
          [
            require('postcss-easy-import')(),
            require('autoprefixer')(),
            require('postcss-nested')()
          ],
      } 
    }
  },
  devServer: {
    proxy: 'http://localhost:3000'
  }
};
