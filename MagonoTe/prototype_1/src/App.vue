<template>
  <v-app>
    <v-main>
      <HeaderCmp/>
      <HelloWorld/>
      <router-view/>
    </v-main>    
  </v-app>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import HeaderCmp from './components/HeaderCmp.vue'

export default defineComponent({
  name: 'App',

  components: {
    HelloWorld,
    HeaderCmp
  },

  data () {
    return {
      //
    }
  },
})
</script>
