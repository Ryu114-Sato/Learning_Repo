const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "",
  //scssをグローバル（全てのコンポーネントで使用できる様にする）に設定する
  css: {
    loaderOptions: {
      scss: {
        // additionalData: `@import "@/assets/sass/main.scss"`,
        additionalData: `@use "@/assets/sass/main.scss" as *;`,
      },
    },
  },
});

/* 
注意：

** publicPath
- npm run build 時に できるdistフォルダ内のファイルのディレクトリが
本番環境様になっており、直接開こうとするとうまく表示されないため
設定のpublicPathを変更する

publicPath のdefault が '/' になっている

*** scss の設定について
- @use を使うと、Sass の 変数・関数をスコープ付きでインポート します。
- as * をつけることで、$color-primary などの変数をそのまま使えます。
- Sass の @import は非推奨 なので、以下のように @use に変更してください：


*/
