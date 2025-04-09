<template>
  <div>
    <h1>本のリスト</h1>
    <ul>
      <li @click="showBookDetai(book.id)" v-for="book in books" :key="book.id">
        {{ book.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BookList",
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
        {
          id: 2,
          title: "Object モード",
          content:
            "props がオブジェクトの場合、これはコンポーネントプロパティとしてそのまま設定されます。プロパティが静的なときに便利です。",
        },
        {
          id: 3,
          title: "Function モード",
          content:
            "プロパティを返す関数を作成することができます。これにより、パラメータを他のタイプにキャストし、静的な値をルートベースの値などと組み合わせることができます。",
        },
        {
          id: 4,
          title: "参考URL",
          content:
            "https://v3.router.vuejs.org/ja/guide/essentials/passing-props.html",
        },
      ],
    };
  },
  methods: {
    showBookDetai(id) {
      this.bookIndex = id - 1;
      console.log("id:" + id);
      console.log("bookIndex:" + this.bookIndex);
      //clickした時にパラメータを渡すには、pathではなく、nameを使う

      this.$router.push({
        name: "Book", //index.js のnameを参照
        params: {
          id: this.books[this.bookIndex].id,
          title: this.books[this.bookIndex].title,
          content: this.books[this.bookIndex].content,
        },
      });
    },
  },
};
</script>

<style>
</style>