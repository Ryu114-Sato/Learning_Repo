const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  //検証した時に、cssのクラスの階層が間違えている為、パブリックパスで修正
  publicPath: '',
  css:{
    loaderOptions: {
      scss: {
        additionnalData: `@import "@/assets/sass/main.scss"`
      }
    }
  }

}