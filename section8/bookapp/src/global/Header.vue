<template>
  <div>
    <v-app-bar app color="primary" dark>
      <!-- <strong> Record of what i learned</strong> -->
      <v-spacer></v-spacer>
      <v-btn color="error" @click="deleteLocalStorage"> Delete Data</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    deleteLocalStorage() {
      this.$emit("delete-local-storage");
    },
  },
};
</script>

<style></style>