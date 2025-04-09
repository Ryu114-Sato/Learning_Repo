<template>
  <div>
    <!--v-rowの中にv-colを入れるのは、グリッドにさせる為-->
    <v-row>
      <v-col cols="6">
        <v-btn color="primary" to="/addStudyFile"> addStudyFile</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <!--配列に入っているオブジェクトの回数分colが表示される-->
      <v-col
        cols="12"
        sm="6"
        v-for="studyFile in studyFiles"
        :key="studyFile.id"
      >
        <v-card>
          <v-row>
            <!-- <v-col cols="4">
              <v-img :src="study.image"></v-img>
            </v-col> -->
            <v-col cols="8">
              <v-card-title>{{ studyFiles.title }}</v-card-title>
              Study date : {{ studyFiles.studyDate }} Your thoughts :
              {{ studyFiles.memo }}
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-btn
                  :to="{ name: 'lets study', params: { id: studyFiles.id } }"
                  color="indigo"
                  fab
                  small
                  dark
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn @click="createTxt(study.title, study.memo)" color="green"
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
export default {
  name: "StudyIndex",
  props: {
    studyFiles: Array,
  },
  mounted() {
    requestAnimationFrame(() => {
      console.log("this.studyFiles:" + this.studyFiles);
      if (this.studyFiles.length > 0) {
        console.log("count studyFiles :" + this.studyFiles.length);
      }
    });
  },
};
</script>
