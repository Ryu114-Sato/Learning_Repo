# test_202501

## Vue CLI

- [install](https://cli.vuejs.org/guide/installation.html)

- npm i -g @vue/cli

上記でエラーの場合、

- sudo npm i -g @vue/cli

- vue --version

  - @vue/cli 5.0.8

## Vue プロジェクト作成

- vue create xxx // CUI コマンド

  - 一般的な作成方法

### Project Name : test_01

- Vue CLI v5.0.8
- ? Please pick a preset: Manually select features
- ? Check the features needed for your project: Babel, Linter
- ? Choose a version of Vue.js that you want to start the project with 2.x
- ? Pick a linter / formatter config: Basic
- ? Pick additional lint features: Lint on save
- ? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated
  config files
- ? Save this as a preset for future projects? No

## node.js

- node -v
  - v20.11.1
- npm -v
  - 10.2.4

## sass

- npm install --save-dev sass-loader node-sass

- version は package.json を参照

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 拡張機能

- ESlint

  - ソースチェック

- Vuter

  - ソースに色つける

- Prettier

  - 成形

# Vue CLI プロジェクト構成

※他の環境に Upload する場合、dist、node_moduled ディレクトリは不要

## ルートディレクトリ

- **`node_modules/`**  
  外部パッケージや依存関係がインストールされるディレクトリ。

  - 他の環境に Upload する時は不要

- **`dist`**
  コンパイル後のフォルダ(npm run build 後にコンパイルされ最適化される)

  - 他の環境に Upload する時は不要

- **`public/`**  
  静的アセットを配置するディレクトリ。

  - **`index.html`**  
    アプリのエントリーポイントとなる HTML ファイル。

- **`src/`**  
  アプリケーションのソースコードが含まれるディレクトリ。(`開発フォルダ`)

  - **`assets/`**  
    画像やスタイルシートなどのアセットを配置。
  - **`components/`**  
    再利用可能な Vue コンポーネントを配置。
    - 最近の VueCLI ではコンポーネント名を 2 つ以上の単語にしなければエラーが出てしまう！
  - **`App.vue`**  
     アプリケーションのルートコンポーネント。

    - export default は自由に名前を定義可能
    - import した components は export default に定義する
    - _※注意：頭大文字でパスカルケースにする_

    ```
    export default {
    name: 'App',
    components: {
    HelloWorld
    }
    }
    ```

    - import HelloWorld from "@/components/HelloWorld.vue";
      - `@ は src フォルダのこと`

  - **`main.js`**  
    　アプリケーションのエントリーポイント。
    - `一番最初に読み込まれるファイルのこと`
    0. 以下の順番で読み込まれる
    1. main.js / 親
    2. App.vue / 子
    3. HelloWorld.vue / 孫

- **`.browserslistrc`**  
  対応ブラウザの設定ファイル。

- **`.eslintrc.js`**（または `.eslintrc.json`）  
  ESLint の設定ファイル。

- **`.gitignore`**  
  Git に無視させるファイルやディレクトリの設定。

- **`package.json`**  
  プロジェクトの依存関係やスクリプトが記述されたファイル。

  - `node_modulesにインストールされてるソフトが記載される`

- **`package-lock.json`**  
  依存関係のバージョンを固定するためのファイル。

- **`README.md`**  
  プロジェクトの説明を記載するファイル。

- **`vue.config.js`**（任意）  
  Vue CLI 用のカスタム設定ファイル（デフォルトでは生成されない）。

---

## 補足

- **追加のオプションについて**
  - プロジェクト作成時に TypeScript、Router、Vuex などを選択すると、関連ファイルやディレクトリが追加されます。
  - テストフレームワークを選択した場合、`tests/` ディレクトリが生成されます。
- **カスタマイズ**  
  必要に応じて `vue.config.js` を作成してプロジェクト設定を調整可能です。
