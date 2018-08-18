<template>
  <div id="app">
    <navigation/>
    <div class="main-container">
        <router-view/>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Navigation from './components/navigation.vue';
import { USER_REQUEST } from '../src/store/actions/user';

export default {
  components: {
    Navigation,
  },
  name: 'app',
  created() {
    if (this.$store.getters.isAuthenticated) {
      this.$store.dispatch(USER_REQUEST);
    }
  },
};
</script>

<style>
 @import "~vuetify/dist/vuetify.css";

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    color: #2e426b;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
</style>

<style scoped>
  .main-container {
    min-height: calc(100vh - 70px);
  }
</style>
