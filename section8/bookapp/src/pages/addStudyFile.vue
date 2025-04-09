<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto">
          <v-row>
            <!-- <v-col cols="4">
              <v-img :src="studyFile.image"> </v-img>
            </v-col> -->
            <v-col cols="12">
              <p class="text-h6">Title :{{ studyTitle }}</p>
              <v-text-field v-model="studyTitle">
                {{ studyTitle }}
              </v-text-field>
              Study Day :
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
                    v-model="studyDate"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="studyDate"
                  @input="menu = false"
                ></v-date-picker>
              </v-menu>
              Q :<v-text-field class="mx-2" v-model="question">
                {{ question }}
              </v-text-field>
              A :
              <v-text-field class="mx-2" color="red darken-1" v-model="answer">
                {{ answer }}
              </v-text-field>
              <v-card-actions>
                <v-btn @click="backToList" colors="secondary"
                  >Back to list</v-btn
                >
                <v-btn colors="info" @click="addStudyFile">Save</v-btn>
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
  name: "addStudyFile",
  props: {
    //propsのデータは親から渡ってくる（props down)
    //App.vue (親)→BookEdit.vue (子)へpropsで受け取り、
    studyFiles: Array,
  },
  data() {
    return {
      //propsで渡ってきたデータをbookに格納
      studyFile: "",
      studyTitle: "",
      studyDate: "",
      menu: false,
      question: "",
      answer: "",
      //  id: "",
    };
  },
  mounted() {},
  methods: {
    backToList() {
      const result = this.$emit(
        "delete-local-storage",
        this.studyFile.slice(-1)[0].id
      );
      console.log("result:" + result);
      if (!result) {
        this.$router.push("/");
      }
    },
    addStudyFile() {
      this.$emit("add-study-file", {
        studyFile: this.studyFile,
        studyTitle: this.studyTitle,
        studyDate: this.studyDate,
        question: this.question,
        answer: this.answer,
        // id: this.$route.params.id,
      });
    },
  },
  beforeRouteEnter(to, from, next) {
    //propsの値を設定しナビゲーションガードを利用し、DOM更新が終了時にデータを表示する機能
    next((vm) => {
      vm.$nextTick(() => {
        //callback関数を使用
        // vm.studyFile = vm.studyFiles[vm.$route.params.id];
        vm.studyDate = new Date( //設定されていなければ当日を設定
          Date.now() - new Date().getTimezoneOffset() * 60000
        )
          .toISOString()
          .substr(0, 10);
        console.log("vm.studyFile.readDate : " + vm.studyFile.readDate);

        // ...`vm`を通じてコンポーネントインスタンスにアクセス
        console.log("pass the nextTick: " + vm.studyFile);
      });
    });
  },
};
</script>

<style>
</style>