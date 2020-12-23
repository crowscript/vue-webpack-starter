<template>
  <div id="app">

    <AppHeader />
    <router-view />
    <AppFooter />

  </div>
</template>

<script>
  import AppHeader from './components/AppHeader';
  import AppFooter from './components/AppFooter';

  export default {
    name: 'app',
    components: {
      AppHeader,
      AppFooter
    },
    data () {
      return {
        mainHeading: 'Crowscript',
        year: new Date().getFullYear()
      }
    }
  }
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>
