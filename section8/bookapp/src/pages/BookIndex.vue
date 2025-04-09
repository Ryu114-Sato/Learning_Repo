<template>
  <div>
    <!--v-rowの中にv-colを入れるのは、グリッドにさせる為-->
    <v-row>
      <v-col cols="6">
        <v-btn color="primary" to="/search"> Search system service</v-btn>
      </v-col>
      <v-col cols="12">
        <ul>
          <li>このシステムの改善案:</li>
          <li>重複しない様に -> Loadashのserchなど追加</li>
          <li>削除機能 -> idがずれるのでインクリメントidを別で作成</li>
          <li>ソート機能</li>
        </ul>
      </v-col>
    </v-row>
    <v-row>
      <!--配列に入っているオブジェクトの回数分colが表示される-->
      <v-col cols="12" sm="6" v-for="book in books" :key="book.id">
        <v-card>
          <v-row>
            <v-col cols="4">
              <v-img :src="book.image"></v-img>
            </v-col>
            <v-col cols="8">
              <v-card-title>{{ book.title }}</v-card-title>
              Read date : {{ book.readDate }} Your thoughts : {{ book.memo }}
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-btn
                  :to="{ name: 'BookEdit', params: { id: book.id } }"
                  color="indigo"
                  fab
                  small
                  dark
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn @click="createTxt(book.title, book.memo)" color="green"
                  >create Txt</v-btn
                >
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
//import _ from "lodash";
export default {
  name: "BookIndex",
  props: {
    //propsのデータは親から渡ってくる（props down)
    //App.vue (親)→BookEdit.vue (子)へpropsで受け取り、
    test: String,
    books: Array,
  },
  // watch: {
  //   books: {
  //     handler() {
  //       /* booksのオブジェクトを監視。オブジェクトに変更が加えられると、
  //             ハンドラーメソッド検知し処理が実行される */
  //       console.log("変更されました");
  //       window.location.reload(); //cmpと違いdataは残る為、DOM再読み込みする
  //     },
  //     deep: true,
  //   },
  // },
  mounted() {
    requestAnimationFrame(() => {
      //  console.log("this.books1" + this.books);
      if (this.books.length > 0) {
        console.log("count books :" + this.books.length);
      }
      //  console.log("this.books2:" + this.books);
    });
  },
  methods: {
    createTxt(title, memo) {
      const blob = new Blob([memo], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.download = title;
      a.href = url;
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      //https://self-development.info/javascript%E3%81%A0%E3%81%91%E3%81%AB%E3%82%88%E3%82%8B%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E4%BD%9C%E6%88%90%E3%83%BB%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89/
    },
  },
};
</script>

<style>
</style>