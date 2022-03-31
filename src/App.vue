<template>
  <div id="app">
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
      },
    },
}
</script>

<style>
  @import '~@/assets/css/style.css';
</style>