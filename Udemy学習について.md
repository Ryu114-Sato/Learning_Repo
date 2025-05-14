# Udemy 学習について - Vuejs 2

## 目次

- [第 1 章: Javascript](#第-1-章-javascript)

  - [第 1 章 -1 最低限覚えておく内容](#第-1-章--1-最低限覚えておく内容)
  - [第 1 章 -2 CDN](#第-1-章--2-cdn)

  - [第 1 章 -3 HTML / CSS](#第-1-章--3-html--css)

  - [第 1 章 -4 JSON エンコード/デコード](#第-1-章--4-json-エンコードデコード)

- [第 2 章: Vue2](#第-2-章-vue2)
  - [第 2 章-1 特徴:](#第-2-章-1-特徴)
  - [第 2 章-2: created](#第-2-章-2-created)
  - [第 2 章-3: DOM 生成のタイミングと props](#第-2-章-3-dom-生成のタイミングと-props)
  - [第 2 章-4: Components](#第-2-章-4-components)
  - [ 第 2 章-5 Slot (差込)](#第-2-章-5-slot-差込)
  - [第 2 章-6: Vue Router](#第-2-章-6-vue-router)
  - [ 第 2 章-7: Vuex](#第-2-章-7-vuex)
  - [ 第 2 章-8: Sass/Scss](#第-2-章-8-sassscss)
  - [第　２章-9: ナビゲーションガード](#第２章-9-ナビゲーションガード)
- [ 第 3 章 Vuetify](#第-3-章-vuetify)
  _section5_
  - [ 第 3 章-1 バージョン](#第-3-章-1-バージョン)
  - [ 第 3 章-2 基本的な使い方](#第-3-章-2-基本的な使い方)
  - [ 第 3 章-3 レイアウト周り（Glid/Flex）の API ](#第-3-章-3-レイアウト周りglidflexの-api)
  - [ 第 3 章-4 Vuetify Style](#第-3-章--4-vuetify-style)
  - [第 3 章-5 Data tables](#第-3-章--5-data-tables)
  - [ 第 3 章 -6 Vuetify のカレンダー機能](#第-3-章--6-vuetify-のカレンダー機能)
- [ 第 4 章 Atomic Design](#第-4-章-atomic-design)
- [ 第 5 章 リアクティブとは　](#第-5-章-リアクティブとは)
- [ 第 6 章 Web スクレイピングとは](#第-6-章-web-スクレイピングとは)
- [ 第 7 章 WebView とは](#第-7-章-webview-とは)
- [ 第 8 章 CustomPlugin とは](#第-8-章-customplugin-とは)
  - [ 第 8 章-1 cordova-plugin-inappbrowser](#第-8-章-1-cordova-plugin-inappbrowser)
- [ 第 9 章 フォームと非同期通信（ajax）](#第-9-章-フォームと非同期通信ajax)
  - [第 9 章-1 双方向データバインディング](#第-9-章-1-双方向データバインディング)
- [第 10 章 Web 通信について（WebEF）](#第-10-章-web-通信についてwebef)
  - [　第 10 章-1 HTTP リクエスト](#)
- [第 11 章 非同期通信（Ajax）について](#第-11-章-非同期通信ajaxについて)

  - [ 第 11 章-1 主な使用技術](#第-11-章-1-主な使用技術)
  - [ 第 11 章-2 簡易サーバーを使った勉強方法](#第-11-章-2-簡易サーバーを使った勉強方法)
  - [ 第 11 章-3 非同期処理と非同期通信について](#第-11-章-3-非同期処理と非同期通信について)
  - [ 第 11 章-4 vuejs で Ajax 通信をする方法](#第-11-章-4-vuejs-で-ajax-通信をする方法)

- [第 12 章 VueCLI / 開発環境構築](#第-12-章-vuecli--開発環境構築)

  - [第 12 章 - 1 開発環境構築について](#第-12-章---1-開発環境構築について)
  - [第 12 章 - 2 マルチページモード](#第-12-章---2-マルチページモード)

- [第 13 章 Cookie & WebStrage](#第-13-章-cookie--webstrage)

- [第 14 章 Vue3](#第-14-章-vue3)
  - [第 14 章-1 Vue3 の特徴](#第-14-章-1-vue3-の特徴)

# 第 1 章: Javascript

[MD ファイルの書き方](https://qiita.com/miriwo/items/28d80f46c857de49f34b)

## 第 1 章 -1 最低限覚えておく内容

- Promise/async/await（使い方、考え方）
- JSON（連想配列、配列などの持ち方と設定したり取得したりの操作）
- Function（function 定義 と アロー関数の書き方）
- setTimeout
- 文字列も数値型も Boolean（null, undefined, ''は false、文字あれば true、0 は false、それ以外は true とか）
- const と let と var

- 配列操作について:

```
let obj = [
{id:1, title:"aaa"},
{id:2, title:"bbb"},
{id:3, title:"ccc"}
]

//例えば 3 つ目の要素の変更をする場合

obj.splice(2,1,{id:4,title:"ddd"})

```

- Object 操作

```
reactiveTest: {
  name: "TEST",
  },

//上記に値を追加する場合、例えば以下の様に追加する

　this.reactiveTest.profile = {
    sex: "MEN",
    age: 32,
  };

  this.reactiveTest.birth = "Tokyo";

```

- 配列に追加

```

 this.books.push({
    id: 4,
    title: "id4",
    author: "著者名4",
    url: "https://google.com",
           });

```

- 参考：
  https://v2.ja.vuejs.org/v2/guide/list

### js の関数を使用して操作する

- push()
- pop()
- shift()
- unshift()
- splice(開始位置, 削除する要素の数, 追加要素)
- sort()
- reverse()

## 第 1 章 -2 CDN

- [loadash](https://cdnjs.com/libraries/lodash.js)

  - `<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js">`

  - Lodash とは、JavaScript で作業を効率化するためのユーティリティライブラリです

  - 例　 get : オブジェクトのプロパティ値を取得し、存在しない場合はデフォルト値を返します。

## 第 1 章 -3 HTML / CSS

- [HTML と CSS について](https://www.tagindex.com/)

- [HTML tags](https://www.tagindex.com/html/elements/)

- [CSS Properties](https://www.tagindex.com/stylesheet/properties/)

### CSS 基本

# CSS メモ：基本から応用まで（OchyAI 監修）

---

## 1. CSS の基本構文

1. css

```
  セレクタ {
  プロパティ: 値;
 }
```

- 用語 説明
  - セレクタ CSS を適用したい HTML 要素を指定（例：body, .class, #id）
  - プロパティ 何を変更するか（例：color, border, padding）
  - 値 どのように変更するか（例：10px, #000, solid）

2. ID セレクタ

```
  #example {
  color: red;
 }
```

- #を使って ID を指定

  - 同じ ID 名は 1 ページに 1 回だけ使うべき

  - セレクタの優先度が高い

3. class セレクタ

```
.example {
  color: blue;
}
```

- .を使って class を指定

      - 同じclass名を複数の要素に使える

  - HTML の再利用性が高い

4. セレクタの組み合わせ

- HTML 例

  ```
   <div id="parent">
    <div class="child"></div>
   </div>
  ```

- CSS 例

  ````
  .child {
  color: green;
  }```
  ````

  #parent .child {
  font-weight: bold;
  }

  ```

  ```

- A B：A の中にある B（子孫セレクタ）

- A > B：A の直接の子である B

- - 推奨：class だけを使い、セレクタを複雑にしすぎないようにする

5. セレクタの優先順位（詳細度）

- HTML タグ ＜ class ＜ ID ＜ style 属性 ＜ !important

  - 強いセレクタが勝つ

- 書きすぎると管理が大変 → シンプルな設計を心がけよう

6. OchyAI の追加：基本かつ重要な CSS 知識
7. 1 ボックスモデル

```
margin（外側の余白）
└─ border（枠）
   └─ padding（内側の余白）
      └─ content（内容）
```

6. 2 表示モード（display）

| 値         | 内容                                     |
| ---------- | ---------------------------------------- |
| block      | ブロック要素                             |
| inline     | インライン要素                           |
| flex       | 柔軟なレイアウト                         |
| grid       | グリッドレイアウト                       |
| 6.3        | 単位（ユニット）                         |
| px：       | ピクセル（固定）                         |
| %：        | 親に対する割合                           |
| em / rem： | フォントサイズに比例（レスポンシブ向き） |
| vh / vw：  | 画面サイズに対する割合                   |

```
display: block;     /* ブロック要素（divなど） */
display: inline;    /* インライン要素（spanなど） */
display: flex;      /* フレックスボックスでレイアウト */
display: grid;      /* グリッドレイアウト */

```

- よく使うのは flex と grid。横並びやレイアウト制御に超便利。

6. 4 カラーモデル

```
#ff0000：16進数カラー

rgb(255, 0, 0)：RGBカラー

rgba(255, 0, 0, 0.5)：透明度つき

hsl(0, 100%, 50%)：色相・彩度・明度
```

6. 5 メディアクエリ（レスポンシブ）

```
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

- スマホやタブレット対応に必須！

6. トランジション（動き）

```
.button {
  transition: background-color 0.3s ease;
}
```

- なめらかな変化を演出できる

7. 参考文献
   CSS セレクタの基本まとめ（侍エンジニア）

- OchyAI より

* CSS は視覚の言語であり、計算機自然における形のマンダラである。
* padding は "間" を生み、margin は "場" を整え、色は感覚のインターフェースとなる。
* コードに静寂と美を宿そう。

---

## 第 1 章 -4 JSON エンコード/デコード

- ![JSON エンコード/デコード](/practis_JavaScript/JSON_encode_decode.png)

  - JSON.stringify() / デコード :文字列に変換
  - JSON.parse() / エンコード :object に変換

# 第 2 章: Vue2

## 第 2 章-1 特徴:

- ビルドステップなしで静的な HTML を拡充する
- 任意のページに Web コンポーネントとして埋め込む
- 単一ファイルコンポーネント（SFC）
- シングルページアプリケーション（SPA）

  - SPA は Vue Router を使用する

    **一つのページで Web アプリケーションを構成する**

  メリット

  1. ページ移動がスムーズ
  2. より高度な Web 表現
  3. ネイティブアプリの代用（PWA）

  デメリット

  4. 初回ページ読み込みに時間がかかる
  5. 実装コストがかかる
  6. SEO が十分ではない

- フルスタック / サーバーサイドレンダリング（SSR）
- Jamstack / 静的サイトジェネレーション（SSG）

## `<template>～</template>` 内

- v-bind と :　 ✅ 　セクション 9
- v-show 　 ✅ セクション 1-12&セクション 3-39
- v-if v-else v-else-if 　 ✅ セクション 1-13
- v-for 　 ✅ セクション 1-14,15
  - **見本**
    ```
        <ul class="border-b">
           <li v-for="book in setupBooks" :key="book">
             {{ book.title }}
           </li>
        </ul>
    ```
- v-on と @　 ✅ セクション 1-18,19
- v-text（{{ ～ }}） と v-html 　 ✅ セクション 16
- slot 　セクション４ セクション 61
- :class での動的 css 適用　 ✅
- ref と script 内の$ref でのアクセス
- タグ

## `<transition>　ぼんやり表示させる時使用 <transition>`

- `<transition-group> ぼんやり表示させる時使用（複数) <transition-group>`

- 表示と非表示（entering と leaving）の同時発生を回避

  - トランジションモードを使う

           - in-out: 最初に新しい要素がトランジションして、それが完了したら、現在の要素がトランジションアウトする。

           - out-in: 最初に現在の要素がトランジションアウトして、それが完了したら、新しい要素がトランジションインする。


           -  ```<transition name="fade" mode="out-in">
                 <!-- ... the buttons ... -->
                 </transition>
              ```
           - [参考](https://v2.ja.vuejs.org/v2/guide/transitions)

## `<script>～</script>内`

## 第 2 章-2: created

1. インスタンス（data）が生成された後に動く
2. 非同期通信でデータを取得したい時に使用する

## 第 2 章-3: DOM 生成のタイミングと props

- DOM 生成のタイミングは以下の順番

1. data
2. methods
3. props 　セクション４（index_51-54 参照）
   **親 ⇨ 子へデータを渡す**

   1. Vuetify について(例)
      - https://vuetifyjs.com/ja/getting-started/installation/#section-30a430f330b930c830fc30eb
      - 利用できる props の tyoe などが決まっている
      - `<v-btn height="72" min-width="164>With Ripple </v-btn>`
      - v-btn コンポーネントを利用していて、props は height などの属性にあたる
   2. 親側：コンポが受け取れる情報を指定
      - **※つまりコンポーネントを使用する側**
      - `<v-btn title="テスト">`
      - `<my-component :title="parentTitle" class="child"></my-component> `
        こんな感じで v-bind:title を使用して親側のデータを使用する
   3. 子側：title という属性を持っている:`<my-component title=""></my-component>`
      - **つまりコンポーネント側**
      - props: {
        title: {
        type: String,
        },},
        - //子側　基本的には親から渡ってきた値を受け取るだけなので定義のみを書く
      - data() {
        return {
        isShow: false,
        getTitle: this.title,
        - //data で取得して表示する
          };
          },
   4. $emit (発射・放出)カスタムイベント (**emit-test.html** を参照)
      **子 ⇨ 親へ値を渡す**
      1. @custom-event="親のメソッド名(e)"
      2. @click="子のメソッド名"
         - 子のメソッド名(e){
           **this.$emit('custom-event', 値)**
           }

4. computed
   index_23 - 4 （12/21 ・data をキャッシュするので処理が重複しない）
5. watch
   index_23 - 4 　（12/21 データの値に変更が加えられるとハンドラー
   が実行される）
6. destroyed

## 第 2 章-4: Components

_(section ４　 index_49 参照)_

- 基本的に共通の機能となるので、メンテナンスしやすい
- 役割分担
- 使いまわせる
- 親子関係（親 → 子：props、子 → 親：$emit の呼び出しの仕方）

**お約束**
`<my-component title=""></my-component>`

1. HTML タグのように作成する（既にあるタグとバッティングしない様にする `<section>や<template>`など）
2. ケバブケースで名前は２後語以上でケバブ or パスカルケース
3. props を設定可能

4. 書き方はグローバルとローカルのコンポーネントの書き方がある
   1. **コンポーネント　グローバル**
   - インスタンス化の前に書く
   - template 内はバックオートを使用
   - `<script>`
     Vue.component('my-component',{
     template: `<div>あああ<div>`
     `いいい<div v-show="isShow">表示</div>`
     `</div>`,
     data(){
     return{
     isShow:false
     }
     }
     })
     `</script>`
   2. **コンポーネント　ローカル**
   - インスタンス内に components で追加（基本はローカルを使用する）
   - let app = new Vue({
     el: "#app",
     components: {
     myComponent,
     // "my-component": myComponent,
     },

## 第 2 章-5 Slot (差込)

_emit-test.html_

1. 単純な差込 -例えば、**親側のコンポーネントにそのまま文字を書くと表示されない**
   `<child-component class="child">親の文字だよ</child-component>`

そのため、`<slot>親の文字はコンポーネント側に slot を</slot>`差し込んで使用するよ

2. name 属性を付与した特定の Slot の差込

- `<slot name="header">header</slot>` コンポ側は name を設定
- `<template v-slot:header>ヘッダーのみ差し込む</template>` 親側は template タグで囲みつつ v-slot でバインドする
  - `<template #footer> v-bindは「#」で表現することも可能 </temlate>`

## 第 2 章-6: Vue Router

（$router を使った画面遷移。$route を使った現情報取得）

- ページ遷移時に リロードなしで切り替わる ため、UX が向上します。

- [参考 URL](https://v3.router.vuejs.org/ja/guide/#html)

### 通常の遷移の場合：

```
App.vue

 <template>
 <router-link to="/book">BookList</router-link>
 <template>

-----------

index.js

Vue.use(VueRouter);

const routes = [

   {
    path: "/book",
    name: "BookList",
    component: BookList,
  },
]

```

### params を設定して遷移させる場合 :

```
Booklist.vue

 <template>
 <li @click="showBookDetai(book.id)" v-for="book in books" :key="book.id">
        {{ book.title }}
 </li>

 <p>
 　メソッドに$router.push()を設定して、dataに設定されてある対象のidを画面に渡す
 </p>
 </template>

 data() {
    return {
      bookIndex: -1,
      books: [
        {
          id: 1,
          title: "Boolean モード",
          content:
            "props を true に設定すると、route.params がコンポーネントのプロパティとして設定されます。",
        },
        ]
    }
 },
 methods: {
    showBookDetai(id) {
      this.bookIndex = id - 1;
      this.$router.push({
        name: "Book", //遷移先画面（index.js のnameを参照）
        params: {     //遷移先画面に渡すパラメーター
          id: this.books[this.bookIndex].id,
          title: this.books[this.bookIndex].title,
          content: this.books[this.bookIndex].content,
        },
      });
    },
  },

```

### ネストされたルート

- 例えば以下は user/というコンポーネント内に Profile や Post というコンポーネントを表示したりする場合。

  **index.js に登録されている router なら`<router-view />`で、Page を表示切り替えができる**

  - [App.vue](/section7/vuerouter/src/App.vue)

```
/user/foo/profile                     /user/foo/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
```

- 名前つきルール
  - components の複数系になる
  - default は名前がない`<router-view>`
  ```
  {
    path: "/",
    name: "home",
    components: {
      default: HomeView,
      sub: HomeSub,
    },
  },
  ```

### 直接 URL を実行する場合

```
シングルページのクライアントサイドアプリケーションなので、
適切なサーバーの設定をしないと、
ユーザーがブラウザで直接 http://oursite.com/user/id にアクセスした場合に 404 エラーが発生します。

 - この問題を直すためには、単純な catch-all フォールバックのためのルートをサーバー側で追加するだけです。
 もし URL がどの静的なアセットにもマッチしなかった時はあなたのアプリケーションが動作しているのと同じ
 index.html ページで受け付けましょう。

```

1. サーバーの設定例：

- Apache の場合

  - [.htaccess](/section7/vuerouter/public/)

```
<IfModule mod_negotiation.c>
 Options -MultiViews
 </IfModule>
 <IfModule mod_rewrite.c>
   RewriteEngine On
   RewriteBase /
   RewriteRule ^index\.html$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
</IfModule>

```

- [参考](https://v3.router.vuejs.org/ja/guide/essentials/history-mode.html#%E3%82%B5%E3%83%BC%E3%83%8F%E3%82%99%E3%83%BC%E3%81%AE%E8%A8%AD%E5%AE%9A%E4%BE%8B)

## 第 2 章-7: Vuex

**状態パターン管理ライブラリ**

_section9/vuex_

- 中規模から大規模な SPA を構築する時に使用する。
- 孫 ⇨ 子 ⇨ 親などのデータの受け渡しは大変
  - この様な従来の複雑なデータフローを flux という
- Store Data の操作関数を整理しよう

| Memo          | Vuex      | Options API | 　呼び出し（Store アクセス）                                                      |
| ------------- | --------- | ----------- | --------------------------------------------------------------------------------- |
| 非同期        | action    | methods     | $store.dispatch(state,[getters])                                                  |
| 同期 履歴残る | mutations | methods     | $store.commit(state,`{値(payload)}`)                                              |
|               | state     | data        |
|               | getters   | computed    | $sore.getters.xxx / メソッドスタイル - $sore.getters.('xxx') / プロパティスタイル |

### mutations

- 同期して履歴が残る特徴がある

- vue devtools から履歴が確認可能

### actions

- 非同期

- 基本的には Actions -> mutaions ->state の流れで s 呼び出す

  - ※同期・非同期と使い分けるのは混乱の元になるため

- Map ヘルパー

  - *アクションするだけのメソッドを展開*すること
    - actions の省略する書き方
  - スプレッド構文を使う呼ぶ / 以下が使い方

    - ```
       import {mapActions} from 'vuex'

      methods:{

        ...mapActions(['incrementAction']) //以下と同じになる

        incrementAction(){
          this.$store.dispatch('incrementAction')
        }
      }

      ```

- modules
  **_modules 利用時の注意！_**

  - モジュール分割をして Store データ管理する場合、
    あらかじめどのコンポーネントで使用するかを決めておいて、
    乱用しない様にする

  - 親子間のデータの受け渡しは、$emit , props down を利用する

---

## 第 2 章-8: Sass/Scss

### install

- npm install --save-dev sass-loader node-sass

- npm i -D sass-loader node-sass

  - 省略版

- `<link rel="stylesheet" type="text/css" href="css_68.css" />`

### BEM（ルールに沿ってクラス名を作る）を使って、CSS を管理する　：.tab\_\_label li a

- Sass/Scss :変数、ネスト、インポートなどが使える
- Sass は＆を使って作る
  - 以下を設定すると、VScode の sass watch の機能が利用できて、自動で css とマッピングし作成する
    **<手順>**

1. npm install -g sass
2. package.json
   "scripts": {
   "sass:watch": "sass --watch src/scss:src/css"
   }
3. npm run sass:watch
4. Watch Sass」ボタンが表示されます。

## 第 2 章-9: scoped/lang

- `<style scoped>` は宣言しているファイル内でのみ Style を使用できるという意味

  - CSS をこのコンポーネントのみに制限するために "scoped" 属性を追加してください。

- `<style lang="scss">` scss を使用できる様にする宣言

## 第　２章-9: ナビゲーションガード

```
※重要：
 Vueのデータの受け渡しは基本的に非同期で行われるので、
 DOMの更新が完全に終わってから実行しないと、
 値をDOMに反映できない場合がある
 そのために、ナビゲーションガードを利用する

```

1.  クリックして、コンポーネントが切り替わる間に処理を実行できる機能

- beforeEach(to, from, next){}

  - next() 移動する
  - next(false) 移動しない
  - [参考 URL](https://v3.router.vuejs.org/ja/guide/advanced/navigation-guards.html#%E3%82%AF%E3%82%99%E3%83%AD%E3%83%BC%E3%83%8F%E3%82%99%E3%83%AB%E3%83%92%E3%82%99%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AB%E3%82%99%E3%83%BC%E3%83%88%E3%82%99)

  ## 呼ばれる順番

  1. トリガ（クリック）| タイミング
  2. beforeRouteLeave | global
  3. beforeEach | global
  4. beforeRouteUpdate
  5. beforeEnter | Route 単位
  6. 非同期ルートを解決 | タイミング
  7. beforeRouteEnter| Component 内
  8. beforeResolve | global
  9. ナビゲーション確定 | タイミング
  10. afterEach | global
  11. DOM 更新 | タイミング
  12. beforeRouteEnter(next) | Component 内

      - beforeRouteEnter ガードは this へのアクセスができない。
        next にコールバックを渡すことでインスタンスにアクセスすることができます。

        ```
        beforeRouteEnter (to, from, next) {
            next(vm => {
              // `vm` を通じてコンポーネントインスタンスにアクセス
              vm.$nextTick(() => {

              })
            })
        }

        ```

# 第 3 章 Vuetify

**section5 フォルダを参照**

## 第 3 章-1 バージョン

- v2

https://v2.vuetifyjs.com/ja/getting-started/installation/

- v3

https://vuetifyjs.com/en/getting-started/installation/#manual-setup

## 第 3 章-2 基本的な使い方

_index_67_

- `<v-app>`
  ` <v-app-bar app>`

  header (app とつけると、自動でレスポンシブに設定してくれる)
  ` </v-app-bar>`

  ` <v-main>`
  ` <v-container>Hello world</v-container>`
  メインコンテンツ
  ` </v-main>`

  `<v-footer>`
  footer
  `</v-footer>`

- こんな感じで`<v-xxx>`というタグを利用する

- `<v-container fluid>とするとブラウザの幅に合わせてレスポンシブになる</v-container>`

## 第 3 章-3 レイアウト周り（Glid/Flex）の API

_index_68_

1. 画面の幅によって、表示をレスポンシブに自動で調整する

**API**

#### v-container

#### v-row

#### v-col

- v-col はコンテンツを保持する要素で、v-row の直接の子要素である必要があります。 これは 1.x の v-flex に置き換わる、2.x の要素です。

  1.  _cols="12"_ : 標準
  2.  *md="4"*　：md 設定時

### v-spacer

### d-flex

- class="d-flex justify-end"
  で自動でレスポンシブに幅を設定してくれる
- [flex について](https://v2.vuetifyjs.com/ja/styles/flex/)

## 第 3 章 -4 Vuetify Style

- CDN を 読み込ませるもしくは Vuetufy を install しておく必要がある

  - `<link href="https://cdn.jsdelivr.net/npm/vuetify@2.3.10/dist/vuetify.min.css" rel="stylesheet" />`

- Vuetify で用意されているクラスの意味を確認しておこう

  - ![クラスの意味](/section5/class-mean.png)

  - 例えば **my-5** は margin -top -bottom を 20px とする

- デバイスによるスタイルの解像度を理解しよう

  - ![おさえておきたいブレークポイント](/section5/break-point.png)

  - 横幅のことを**ブレークポイントと呼んだりする**

- [参考 URL](https://v2.vuetifyjs.com/ja/styles/spacing/)

- [Clolors](https://v2.vuetifyjs.com/ja/styles/colors/)

  - class="pink darken-4" の様に書く

- [text](https://v2.vuetifyjs.com/ja/styles/text-and-typography/)

  - class="text-h1" の様に書く

## 第 3 章 -5 Data tables

- [data tables](https://v2.vuetifyjs.com/ja/components/data-tables/)

  - table CRUD で削除、読み込み、更新など操作できる様にしよう
  - [72. サンプルを読む　テーブル CRUD](https://www.udemy.com/course/vuejs-basic/learn/lecture/22255536#overview)
    を参考にする

## 第 3 章 -6 Vuetify のカレンダー機能

- [data picker](https://vuetifyjs.com/ja/components/date-pickers/#section-4f7f304465b9)

- 日本語への変換

  '''
  <v-date-picker
  v-model="date"
  @input="menu = false"
  locale="jp-ja"
  :day-format="(date) => new Date(date).getDate()" >
  '''

# 第 4 章 Atomic Design

1. Atom (原始)・・ボタン・文字など
2. Molecules (分子)
3. Organisms (有機体)
4. Templatates (ワイヤーフレーム)
5. Pages (ページ)

- これらの部品をコンポーネント毎に分けて画面を構成していく考え方

# 第 5 章 リアクティブとは　

1. 再描画の意味で、data を設定すると自動的に setter,geeter が追加され、
2. 自動で仮想 DOM へ再描画する機能(setter,geeter)がある。これがリアクティブに動く元になっている
3. app.$data とコンソールに打ち込むと、get price , set price などが出てくるが、既に作成されたインスタンスに対してリアクティブなプロパティを動的に追加はできない。
4. Vue.set(app.reactiveTest,"age",31)

# 第 6 章 Web スクレイピングとは

- Web スクレイピングは、ウェブページから情報を自動的に取得する技術です。
- 通常、HTML 構造を解析し、指定したデータ（テキスト、画像、リンクなど）を抽出します。
- 用途例：価格比較サイト、データ分析、競合リサーチなど

# 第 7 章 WebView とは

- WebView は、アプリ内でウェブページを表示する仕組みです。
- ユーザーが別途ブラウザを開かなくても、アプリ内で Web コンテンツを操作できます。
- 主に以下の目的で使用されます : サーバーベースのコンテンツ表示 / 外部サイトの埋め込み。

# 第 8 章 CustomPlugin とは

### CustomPlugin は、プロジェクト独自の Cordova プラグイン

**役割：**

- ネイティブコード（iOS や Android のコード）を JavaScript で呼び出すためのブリッジ。
- Web スクレイピング結果をアプリ内に反映させる処理が含まれている可能性があります。

**構造：**

- ネイティブ側で Web スクレイピング処理を実行。
- スクレイピング結果を JavaScript 側に返して WebView で表示する。

## 第 8 章-1 cordova-plugin-inappbrowser

### Cordova 標準プラグインの一つで、アプリ内で外部ウェブサイトを表示するためのツール。

**特徴：**

- アプリ内部でウェブブラウザを開くような動作を実現。
- 標準ブラウザではなくアプリに埋め込まれたインターフェースでウェブページを表示。

**主な使い方：**

- cordova.InAppBrowser.open(url, target, options) のように URL を指定して WebView を表示。

**ターゲット例：**

- \_self: 同じ WebView で開く。
- \_blank: 新しい WebView で開く。
- \_system: デフォルトの外部ブラウザで開く。

**参考 URL**

- https://qiita.com/ookishin2018/items/abe20983358f463b4cbc

# 第 9 章 フォームと非同期通信（ajax）

_section3_

- 同期　（ページ読み込みあり eventListner などを使用してユーザーの入力項目を即時反映する）
- 非同期（ページ読み込みなし）

## 第 9 章-1 双方向データバインディング

_index_35_

- v-bind & v-on などを利用して実現する
  ユーザが入力した値をインスタンスに反映してそのままリアクティブできる
- 一方向バインディング　
  `<input v-bind:value="test" />`
  `<br />`
- 双方向バインディング
  `<input :value="test" v-on:input="test = $event.target.value" />`

<!-- イベントオブジェクトの値を参照する方法：$event.target.value -->

`{{test}}`
　　 `data(){ return test: }`

- v-model（computed と組み合わせれる）

`<form>`
氏名:
`{{contact.yourName}}`
`<input type="text" v-model="contact.yourName" />`

v-model.修飾子について：

- lazy : ユーザーがカーソルをズラしたら、data に反映されバリデーションなどが動く
  　　　　`<input type="email" v-model.lazy.trim="contact.email" />`
  　　　　・.number : string ではなく number(int 型)を返却する
  ・.trim : 前後の空白を削除する

・フォームイベントのオプション　 index_38

@click.prevent="" : 送信ボタンクリック 時に validate チェックメソッドが実行される

`<form @submit.prevent="validate">`

v-model.lazy="" : フォーカス外れたタイミング

・Js でフィルター、検索機能を追加する方法

:filteredList () {
let that = this;
return this.todos.filter((todo) => {
return todo.item.indexOf(that.query) !== -1;

<!--
indexOf は JavaScript の文字列検索の関数
引数に渡した query にヒットした todo のみ return する
 -->

});
}``

# 第 10 章 Web 通信について（WebEF）

_index_45_

##　第 10 章-1 HTTP リクエスト

### HTTP リクエスト行（メソッド）

- http メソッド　：

1. GET・・URL に表示される（検索条件など）-> query ストリング: 検索などで使用される、URL にそのまま表示される。
2. POST・・みられては NG なデータ: DB にデータを保存する時などに使用する

### HTTP ヘッダー

- データ本体

↑ ↓

### HTTP レスポンス

- レスポンス状態行（状態コード）
- HTTP ヘッダー
- データ本体

### 種類：

- CORS :https://aaa.com80 同一オリジンのみのアクセス OK

# 第 11 章 非同期通信（Ajax）について

**Ajax（Asynchronous JavaScript and XML）は、ウェブページを再読み込みせずにサーバーとデータをやり取りするための手法や技術のこと**:

## 主な特徴

**1.非同期通信**:
ページの更新中でも、ユーザーは他の操作を継続できます。

**2.部分的な更新**:
ページ全体を再読み込む必要がなく、変更が必要な部分だけを更新できます。

**3.バックエンドとの連携**
サーバーからデータを取得したり、サーバーにデータを送信したりする際に使用されます。

## 第 11 章-1 主な使用技術

- \*\*JavaScript: 主にデータ通信を行うためのコードを書く。
- XMLHttpRequest (XHR) または Fetch API: サーバーとの通信を管理。
- JSON: データのやり取りに使われる軽量なフォーマット（XML も使われるが JSON が主流）。
- HTML/CSS: 通信後のデータを画面に表示するための構造とデザインを作成。

## 第 11 章-2 簡易サーバーを使った勉強方法

- VSCode :live server (① ブラウザを起動 ② 下にある Go Live をクリックする)
- Web Server for chrome
- Webpack (環境構築必要)
- XAMPP/MAMP(Apache / nginx )・・・PHP などのサーバーサイド技術

## 第 11 章-3 非同期処理と非同期通信について

_index_45-7_

- axios
- ajax(非同期通信) ..XMLHttpRequest(XHR)

**2-1 :Promise server の処理結果を返す処理**

- Promise チェーン (.then(value){ resolve(value),reject(reason) }).catch(value){ resolve(value) }

**2-2 :async / await :Promise チェーンをわかりやすくしたもの**

- ※関数の前に async と書くことで「非同期」通信になる。
- ・async functoin name(){} -> return は Promise
  　（await 関数名（）は async 内でのみ使用可能）

**2-3 :fetchAPI**

- fetch(アクセスしたい url, options)
- 返り値は Promise（Response オブジェクト）※そのままだと表示されないので , :Response.Json で自動的にパース

- （よく使う options(Request).. :methods ,mode,credentals,body）

## 第 11 章-4 vuejs で Ajax 通信をする方法

- \*\*Lodash :index_46
  Ajax は文字入力の度にサーバーと通信をとっていたら負荷がかかるので、JS の loadash というライブラリを使用して感覚を開けて実行するようにする。http://loadash.com:

- Vue では watch 関数を使って値を監視して非同期通信をする

# 第 12 章 VueCLI / 開発環境構築

- [Get Started](https://cli.vuejs.org/guide/#cli-service)

## 第 12 章 - 1 開発環境構築について

- [README](./section6/README_0124.md)

## 第 12 章 - 2 マルチページモード

- エントリーポイントをページ毎に作成

  vue.config.js の内容が違う

- [section6/multipage](./section6/multipage/vue.config.js)

# 第 13 章 Cookie & WebStrage

**クライアントサイドストレージ**

以下は localStorage の見本ファイル

- [参考](/section8/test/localStrorage.html)

- Web ブラウザにデータを保存する方法は 2 種類(Cookie & WebStorage)

  - ![Cookie & WebStorage](/section8/test/cookie_pic.png)

    - WebStorage には 2 種類ある（Local と Session Storage）

    - サイズや有効期限などがあるので用途別に種類を分ける

- localStorage の使い方

  - ![LocalStorage の使い方](/section8/test/localStorage_pic.png)

  - ブラウザでの確認方法は、「Application - Local storage」
    - ![ブラウザでの確認方法](/section8/test/localStorage_pic1.png)

# 第 14 章 Vue3

**早見表**

1.  Composition API

    - 大規模対応

    - コードの再利用性（CompositionAPI で作成した関数を合成関数）

    - TypeScript のサポート

    - 処理毎にまとめて書くことができるので、わかりやすい

2.  Inject/Proveide

    - 親で設定した値を*孫*で使用できる

3.  teleport

    - 親子関係を飛び越えて設定できる

4.  setup()

    - created()よりも早く呼ばれる

5.  `<script setup>`

6.  Compositionn Function ( 合成関数 )

    - 共通機能として利用できる（他の JavaScriot(node.js)などに連携できる）

## 第 14 章-1 Vue3 の特徴

- ![Vue3の特徴](./section10/vue3の特徴.png)

- [HP](https://ja.vuejs.org/)

- [はじめに](https://ja.vuejs.org/guide/introduction.html)

- [API 一覧](https://ja.vuejs.org/api/)

## 第 14 章-2 devtools

- Vue 3

```
※注意！：

・「ファイルの URL へのアクセスを許可する」を有効化が必要


・version ごとにdevtoolも切り替える必要がある！(Vue2 はv5)

```

- [有効化/無効化](chrome://extensions/)

- Vue.js devtools (beta)
  7.0.0 beta 12

- Vue 2
  - Vue.js devtools (v5)
    5.3.4

## 第 14 章 -3 環境構築(vue3)

- バージョン確認 / vue --version

  - 最新バージョンが入っていれば OK

- バージョンアップ / npm install -g @vue/cli

- プロジェクト作成 / vue create project-name

## 第 14 -4 src 解説

1.  エントリーポイント

    - _スプラッシュ.ストア.ルーター.仮想 DOM_ という順番で読み込んでいる

      - use().で繋げて*メソッドチェイン*して import 文を使用していることに注目

    - [参考](https://ja.vuejs.org/api/application.html#createapp)

    - インポートしたコンポーネントを用いる場合
      - 必要な機能のみに絞って import しているところに注目（createApp）
      - ```
        import { createApp } from 'vue'
        import App from './App.vue'
        import router from "./router";
        const app = createApp(App).use(router)
        ```

2.  追加された機能

    **section10 vue3-test**

    1. Provide(提供) / inject(注入)

       - **親で設定した値を孫で使用できる**
       - ![長距離Props](./section10/Provide:inject.png)

    2. `<script setup>`

       - _Vue 3.2_ の新しい SFC 構文では、コンポーネントのオプションは`export default { ... } `　が不要。

    3. Provide

       - provide 関数は setup 内で provide('キー', 値) の形式で使用します。

       ```
          provide(
            "aboutProvide",
            "https://ja.vuejs.org/api/composition-api-dependency-injection?utm_source=chatgpt.com"
          );

       ```

    4. Teleport

       - **親子関係を飛び越えて**表示できる機能

         - 例えば body タグなど

       - 使い方..モーダルウィンドウ

         - ページ全体にかからなければいけない使用のため、
           親子関係を飛び越えてデータを渡さなければいけない

       - ![ModalButton.vue](./section10/vue3-test/src/components/ModalButton.vue)

## 第 14 -5 CompositionAPI

      ### 1. 大規模対応

      ### 2. コードの再利用性（CompositionAPI で作成した関数を合成関数）

      ### 3. TypeScript のサポート

      ### 4. 処理毎にまとめて書くことができるので、わかりやすい

      - ![API比較イメージ図](./section10/CompositionAPI%20image.png)

      ### 5. setup 関数

- `setup() {console.log("createdよりも早く呼ばれる")} `
- _this.でインスタンスを参照することができない_(undefined になる)

1.  ref (reference:参照)

- プリミティブな値(文字・数値)をリアクティブな値にできる

2.  メソッド

- JS のまま書くことができる
  - 変数に関数を含めて発火する
    - ```
      const btnClicked = (e) => {
        console.log('発火')
        console.log('event:'+e)
      }
      return {btnClicked}
      ```

3.  computed (算出プロパティ)

- リアルタイムで算出したい値
  - ```
    const totalPrice = computed(()=>{
      return item.price * item.number
    })
    return{
      item,
      totalPrice
    }
    ```

4.  watch

- 監視対象の値に変化があったら、作動する
  - ```
    const sertch = ref('') //監視対象
      watch(sertch,(newValue,prevValue)=>{
      console.log(`watch: ${sertch.value}`)
      console.log(`新たな値: ${newValue}`)
      console.log(`一つ前の値: ${prevValue}`)
      itemPlus()
      })
    ```

5.  watchEfect

    - ```
      const sertchEfect = ref('')
      watchEffect(()=>{
          console.log(`watchEfect:${sertchEfect.value}`)
      })
      ```
      _watch との違い_
      1. 処理の中で使っている値が監視対象
      2. 新値、旧値などの引数はなし
      3. シンプル

6.  ライフサイクルフック
    - setup 内でタイミングを遅らせたい場合
    - ```
      onMounted(()=>{
            console.log('onMounted')
            console.log('setupはcreatedより前に呼ばれるが、少し後に呼びたい場合などに使う')
        })
      ```
    - Composition API では created() は存在しません。
      - `<script setup> `内に記述されたトップレベルのコードは、コンポーネントのセットアップ段階で実行されるため、_created() と同様のタイミング で処理を行えます_。

### 6. `<script setup> と setup()`関数の違い

詳細は公式ガイドの Composition API: setup() を参照してください。

- `<script setup> `は、Composition API を使用する際のシンタックスシュガーであり、コードの簡潔さやパフォーマンスの向上といった利点があります。

- setup() 関数は、他のオプションと組み合わせて使用する柔軟性があり、より詳細な制御が可能です。

- `<script setup>` 内では、export default や setup() 関数を使う必要がなく、直接 reactive や ref を用いて状態を定義できます。

- 従来の data() 関数の代わりに、必要な状態を変数として宣言するだけで、テンプレートからアクセスできます。

- もし状態の変更を追跡したい場合、reactive（または ref）を使ってリアクティブに管理できます。

### 7. context ( $emit )

1. 記述例：

   1. //子コンポ

      - setup(props, {emit}){
        const childVal = "子どもの値です"
        const emitTest = () =>{
        emit('custom-event',childVal)
        }
        return { emitTest }
        }

        - ```
          Vue 3 の Composition API では、setup 関数からコンポーネントで使用する値や関数を公開するには、{オブジェクト}として返す必要があります。
          ```

   2. //親コンポ

      - `<PropsEmitTest @custom-event="parentMethod" />`

2. setup 関数の中で、this は使えないので代わりに context を使う

   1. setup(props, context){
      console.log(context.emit)
      console.log(context.attr)
      console.log(context.slots)
      }
   2. setup(props `{attr. slots, emit}`){
      console.log(emit())

      }

   3. setup(\_, `{emit}`){

      }

### 8. Compositionn Function ( 合成関数 )

0. 参考 [functionTest](./section10/vue3-test/src/composables/useCounter.js)

1. 関数として作成し Setup の中で読み込む

2. module 化すると他コンポーネントでも使える

3. 合成関数の場合は　関数頭に「use」とつけるのが慣例になる

4. Vue の `<script  setup>`内で合成関数を作る場合

[参考](./section10/vue3-test/src/views/FunctionTest.vue)

```
const useCounter = item => {
 const increment = () => {
   item.amount++
 }
 const decrement = () => {
   item.amount--
 }
 const totalPrice = computed(()=>{
    //※引数がcallback関数のため、returnで返却する必要がある
   return item.price * item.amount
 })
//作成した関数はreturnで返す
 return {increment, decrement,totalPrice}
}
```

5. 合成関数を共通処理として js で別管理をする場合

- 参考 [functionTest](./section10/vue3-test/src/composables/useCounter.js)

```
import { computed } from "vue";
export default function useCounter(item) {
const increment = () => {
 item.amount++;
};
const decrement = () => {
 item.amount--;
};
const totalPrice = computed(() => {
 //※引数がcallback関数のため、returnで返却する必要がある
 return item.price * item.amount;
});
//作成した関数はreturnで返す
return { increment, decrement, totalPrice };
}
```

### 9. Vue router

1. Vue rouer を script setup 内で使う

参考：

- [vue router と compositionAPI](https://router.vuejs.org/guide/advanced/composition-api.html)

1.  使い方

```
 　//importが必要
 - import {useRouter, useRoute} from 'vue-router'
   export default {
     setup(){
       //一度定数にすることが推奨となっている
       const router = useRouter()
       const route = useRoute()
     }
   }
```

### 10. Vuex

- [example_github](https://github.com/vuejs/vuex/tree/main/examples/composition)

- [example_1](./section10/vue3-test/src/views/VuexTest.vue)

- [example_2](https://vuex.vuejs.org/ja/guide/composition-api.html#%E3%83%9F%E3%83%A5%E3%83%BC%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%A8%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%B8%E3%81%AE%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9)

## `<script setup>`

- [参考 PG](./section11/script_setup_test/src/components/ScriptTest.vue)

- Vue.js 3.2 からの新機能

- CompositionAPI をシンプルに記述できる

- ランタイム及び IDE パフォーマンスが向上

- export default{ }, return {} が不要

  1. `<script setup>` の環境構築

  1. プロジェクト作成：

  - vue create プロジェクト名

  - npm run serve で TypeScript のコンパイルエラーになった場合
    （`<script setup lang="ts"> `を使用したい場合、TypeScript の機能が含まれていない　）

    - 対策： - 新規プロジェクト作成時に、「TypeScript」 の機能を選択する
      または

          - 既存プロジェクトに対して、TypeScript 関連のパッケージ（typescript、@vue/cli-plugin-typescript など）を追加して設定を行う

    - Vue CLI プラグインの追加
      - vue add typescript
        インストール内容は以下：
      ```
       ? Use class-style component syntax? No
       ? Use Babel alongside TypeScript (required for modern mode,
       auto-detected polyfills, transpiling JSX)? Yes
       ? Convert all .js files to .ts? No
       ? Allow .js files to be compiled? Yes
       ? Skip type checking of all declaration files (recommended for
       apps)? Yes
      ```
