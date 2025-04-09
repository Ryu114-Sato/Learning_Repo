<template>
  <v-app>
    <Header @delete-local-storage="deleteLocalStorage" />
    <v-main>
      <v-container>
        <router-view
          :books="books"
          @add-book-list="addBook"
          @update-book-info="updateBookInfo"
        >
          ここにv-container
          を設定すれば全てのページにグリッドが効く</router-view
        >
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/global/Footer.vue";
import Header from "@/global/Header.vue";
const STORAEG_KEY = "books";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data: () => ({
    books: [],
    newBook: null,
  }),
  mounted() {
    if (localStorage.getItem(STORAEG_KEY)) {
      //localstrage(key) が設定されているか
      try {
        //ローカルストレージキーをdataに設定
        this.books = JSON.parse(localStorage.getItem(STORAEG_KEY));
      } catch (e) {
        localStorage.removeItem(STORAEG_KEY);
      }
    }
  },
  methods: {
    addBook(e) {
      if (!e) {
        console.log("追加する本の情報が空の場合: " + e);
        return;
      }
      console.log("this.books.length:" + this.books.length);
      //booksに入力値を格納する
      this.books.push({
        id: this.books.length,
        title: e.title,
        image: e.image,
        description: e.description,
        readDate: "",
        memo: "",
      });
      this.saveBooks(); //内.保存処理呼び出し
      console.log("最後に保存したIDを参照：" + this.books.slice(-1)[0].id);
      console.log("this.books.length:" + this.books.length);
      this.goToEditPage(this.books.slice(-1)[0].id);
    },
    removeBook(x) {
      this.books.splice(x, 1);
      this.saveBooks();
      //localStorage.removeItem(key) で削除じゃない?
    },
    saveBooks() {
      //ローカルストレージ保存
      const parsed = JSON.stringify(this.books);
      localStorage.setItem(STORAEG_KEY, parsed); //key , value
    },
    updateBookInfo(e) {
      //子コンポからemitされた内容はeで連携
      const updateInfo = {
        //更新値
        id: e.id,
        readDate: e.readDate,
        memo: e.memo,
        title: this.books[e.id].title,
        image: this.books[e.id].image,
        description: this.books[e.id].description,
      };
      //booksを更新
      this.books.splice(e.id, 1, updateInfo);
      //更新したら保存
      this.saveBooks();
      //トップページに戻って保存を確認
      this.$router.push("/");
    },
    goToEditPage(id) {
      //編集画面に遷移時に最新のIDを連携
      this.$router.push(`/edit/${id}`);
    },
    deleteLocalStorage() {
      const isDeleted = "LocalStorageのデータを削除してもいいですか？";
      if (window.confirm(isDeleted)) {
        localStorage.setItem(STORAEG_KEY, "");
        localStorage.removeItem(STORAEG_KEY);
        this.books = [];
        window.location.reload();
      }
    },
  },
};
</script>
