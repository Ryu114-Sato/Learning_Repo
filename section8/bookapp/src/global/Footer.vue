<template>
  <div>
    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
          @click="anotherPage(link)"
        >
          {{ link }}
        </v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }}
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>


<script>
export default {
  name: "Footer",
  // data: () => ({
  //   links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
  // }),
  data() {
    return {
      links: ["HOME", "StudyIndex", "SEARCH", "Services", "Blog", "Contact Us"],
    };
  },
  methods: {
    anotherPage(link) {
      //this.$emit("test-btn", this.links[link]);
      if (link === "HOME") {
        console.log("HOME:" + link);
        this.$router.push("/");
      } else if (link === "SEARCH") {
        console.log("/search:" + link);
        this.$router.push("/search");
      } else if (link === "StudyIndex") {
        console.log("/StudyIndex:" + link);
        this.$router.push("/StudyIndex");
      }
    },
  },
};
</script>

<style>
</style>