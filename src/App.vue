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
    data(){
      return {

      }
    },
    computed: {
      layout(){
        return this.$root.$route.meta.layout
      },
    },
}
</script>

<style lang="scss">
  @import '@/assets/css/style.scss';
</style>
<!-- <style>
@import '~@/assets/css/style.css';
</style> -->