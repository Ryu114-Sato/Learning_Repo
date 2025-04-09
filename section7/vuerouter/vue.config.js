const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  /* publicPath: "",
　　　publicPath をブランクで設定すると、
　　　NotFoundに飛ばなくなる
  */
});
