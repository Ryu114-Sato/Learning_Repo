<template>
  <div>
    <p>本の詳細</p>
    <p>タイトル:{{ title }}</p>
    <p>本の内容:{{ content }}</p>
    {{ books[bookIndex].title }}
  </div>
</template>

<script>
/*
このコンポーネントはBookListの内容を
表示するための受け皿の様なページです
*/
export default {
  name: "BookDetail",
  props: {
    id: Number,
    title: String,
    content: String,
  },
  data() {
    //ブラウザをリフレッシュした時用のdata
    return {
      bookIndex: this.$route.params.id - 1,
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
  created() {
    if (this.$route.params.id > this.books.length) {
      //ブックリストの配列よりも大きいIDが渡ってきた場合戻る
      this.$router.push("/book");
    }
  },
};
</script>

<style>
</style>
