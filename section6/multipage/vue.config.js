const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "",
  pages: {
    IndexPage: {
      // entry for the page
      entry: "src/indexPage/main.js",
      // the source template
      template: "public/indexPage.html",
      // output as dist/index.html
      filename: "indexPage.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Index Page",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "index-page"],
    },
    UsersPage: {
      entry: "src/usersPage/main.js",
      template: "public/usersPage.html",
      filename: "usersPage.html",
      title: "Users Page",
      chunks: ["chunk-vendors", "chunk-common", "users-page"],
    },

    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `subpage.html`.
    // subpage: "src/subpage/main.js",
  },
});

/*
TIP 
(設定が正しいかVue inspect などのコマンドで確認できると書いてある)

When building in multi-page mode, 
the webpack config will contain different plugins
(there will be multiple instances of html-webpack-plugin and preload-webpack-plugin). 
Make sure to run vue inspect if you are trying to modify the options for those plugins.

例：
npm install --save-dev preload-webpack-plugin
*/
