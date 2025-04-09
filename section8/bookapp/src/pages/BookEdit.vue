<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto">
          <v-row>
            <v-col cols="4">
              <v-img :src="book.image"> </v-img>
            </v-col>
            <v-col cols="8">
              <v-card-title> Title : {{ book.title }} </v-card-title>
              Read Day :
              <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  @input="menu = false"
                  locale="jp-ja"
                  :day-format="(date) => new Date(date).getDate()"
                >
                </v-date-picker>
              </v-menu>
              Your thoughts :<v-textarea class="mx-2" v-model="book.memo">
                {{ book.memo }}
              </v-textarea>
              <v-card-actions>
                <v-btn @click="backToList" colors="secondary"
                  >Back to list</v-btn
                >
                <v-btn colors="info" @click="updateBookInfo">Save</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<script>
export default {
  name: "BookEdit",
  props: {
    //propsのデータは親から渡ってくる（props down)
    //App.vue (親)→BookEdit.vue (子)へpropsで受け取り、
    books: Array,
  },
  data() {
    return {
      //propsで渡ってきたデータをbookに格納
      book: "",
      date: "",
      menu: false,
    };
  },
  mounted() {
    requestAnimationFrame(() => {
      if (this.books.length > 0) {
        const book = JSON.stringify(this.book);
        const books = JSON.stringify(this.books);
        console.log("Accept book data :" + book);
        console.log("Accept books data :" + books);
      }
    });
  },
  methods: {
    backToList() {
      const result = this.$emit(
        "delete-local-storage",
        this.books.slice(-1)[0].id
      );
      console.log("result:" + result);
      if (!result) {
        this.$router.push("/");
      }
    },
    updateBookInfo() {
      this.$emit("update-book-info", {
        id: this.$route.params.id,
        readDate: this.date,
        memo: this.book.memo,
      });
    },
  },
  beforeRouteEnter(to, from, next) {
    //propsの値を設定しナビゲーションガードを利用し、DOM更新が終了時にデータを表示する機能
    next((vm) => {
      vm.$nextTick(() => {
        //$nextTickコールバック関数を使用することにより、DOM更新が完全に終わった後呼ばれる
        vm.book = vm.books[vm.$route.params.id];
        if (vm.book.readDate) {
          console.log("vm.book.readDate : " + vm.book.readDate);
          //readDateが設定されていれば、日付を更新する
          vm.date = vm.book.readDatedata;
        } else {
          vm.date = new Date( //設定されていなければ当日を設定
            Date.now() - new Date().getTimezoneOffset() * 60000
          )
            .toISOString()
            .substring(0, 10);
          console.log("vm.book.readDate : " + vm.book.readDate);
        }
        // ...`vm`を通じてコンポーネントインスタンスにアクセス
        console.log("book データを確認: " + vm.book);
      });
    });
  },
};
</script>

<style>
</style>