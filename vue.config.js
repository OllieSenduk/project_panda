module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      scss: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/styles/variables.scss";`
      },
      sass: {
       data: `
         @import "@/styles/_variables.scss";
       `
     }
    }
  }
}
