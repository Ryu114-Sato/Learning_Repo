<template>
  <div>
    <!-- v-row,colなどを使用する事でレスポンシブに画面が変動する-->
    <v-row
      ><!-- 1行目-->
      <v-col cols="6">
        <!--1列 cols='列の長さ'-->
        <v-text-field label="Title" v-model="keyword"> </v-text-field>
      </v-col>
    </v-row>
    <v-row
      ><!-- 2行目-->
      <v-col cols="3"
        ><!--1列-->
        <v-btn color="primary" @click="search(keyword)">Search </v-btn>
      </v-col>
      <v-col cols="3"
        ><!--2列-->
        <v-btn color="secondary" to="/">Back to list</v-btn>
      </v-col>
    </v-row>
    <v-row
      ><!-- 3行目-->
      <v-col
        cols="12"
        md="6"
        v-for="(book, index) in searchResults"
        :key="book.index"
      >
        <v-card class="mx-auto">
          <v-row>
            <v-col cols="4">
              <v-img :src="book.image"></v-img>
            </v-col>
            <v-col cols="8">
              <v-card-title>{{ book.title }}</v-card-title>
              {{ book.description }}
              <v-spacer></v-spacer>
              <v-card-actions
                ><v-btn
                  class="mx-2"
                  fab
                  dark
                  color="indigo"
                  @click="addBookList(index)"
                >
                  <v-icon dark> mdi-plus </v-icon>
                </v-btn>
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
  name: "BookSearch", //component名
  props: {
    //propsのデータは親から渡ってくる（props down)
    //App.vue (親)→BookEdit.vue (子)へpropsで受け取り、
    books: Array,
  },
  data() {
    return {
      keyword: "",
      searchResults: [],
    };
  },
  methods: {
    addBookList(index) {
      //Event Up
      this.$emit("add-book-list", this.searchResults[index]);
    },
    async search(keyword) {
      this.searchResults = [];
      const baseUrl = "https://www.googleapis.com/books/v1/volumes?"; //このAPIの後にパラメータを足して検索

      //クエリーストリングを作成
      const params = {
        q: `intitle:${keyword}`, //検索文字列
        maxResults: 40, //最大検索数
      };
      //fetch で取得する際に必要
      const queryParams = new URLSearchParams(params);
      console.log(baseUrl + queryParams);

      //fetch でjsonを取得(検索してる)※ここでエラーがでた場合、一度Applicationのkeyをdeleteしてserveを再起動
      const response = await fetch(baseUrl + queryParams).then((response) =>
        response.json()
      );
      console.log(response.items);
      //必要な情報を配列にpush
      for (let book of response.items) {
        let title = book.volumeInfo.title;
        // let subtitle = book.volumeInfo.subtitle;
        let img = book.volumeInfo.imageLinks;
        let description = book.volumeInfo.description;
        this.searchResults.push({
          //検索結果を格納
          title: title ? title : "", //(三項) 演算子
          // subtitle: subtitle ? subtitle : "",
          image: img ? img.thumbnail : "",
          description: description ? description.slice(0, 40) : "",
        });
      }
    },
  },
};
</script>

<style></style>