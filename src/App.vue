<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->

    <Layout :layout="layout">
        <router-view />
    </Layout>
  </div>
</template>
<script>
import Layout from '@/layouts/Layout';

export default {
    name: 'App',
    components: { Layout },
    computed: {
      layout(){
        return this.$root.$route.meta.layout
      }
    },
}
</script>

<style lang="scss">
  @import '@/assets/css/style.scss';
</style>
<!-- <style>
@import '~@/assets/css/style.css';
</style> -->