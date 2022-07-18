<template>
  <div><h1>本のリスト</h1>
  <ul>
    <li 
    @click="showBookDetai(book.id)"
    v-for="book in books" 
    :key="book.id">
    {{book.title}}
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name:'BookList',
  data(){
    return{
      bookIndex: -1,
      books:[
        {id:1,title:'タイトル１', content:'本の内容'},
        {id:2,title:'タイトル2', content:'本の内容'},
        {id:3,title:'タイトル3', content:'本の内容'},
      ]
    }
  },
  methods: {
    showBookDetai(id){
      this.bookIndex = id -1
      console.log('id:'+id)
      console.log('bookIndex:'+this.bookIndex)
      //clickした時にパラメータを渡すには、pathではなく、nameを使う
   
  this.$router.push({
        name: 'Book', //index.js のnameを参照 
        params:{
          id:this.books[this.bookIndex].id,
         title:this.books[this.bookIndex].title,
         content:this.books[this.bookIndex].content,
        }

      }) 
    
    }
  },

}
</script>

<style>

</style>