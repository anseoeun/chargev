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
      bodyClass(){
        return this.$root.$route.meta.bodyClass
      }
    },
    mounted(){
      let bodyClassCheck = setInterval(()=>{
        if(this.bodyClass != undefined) {
          document.querySelector('body').classList.add(this.bodyClass)
          clearInterval(bodyClassCheck)
        }
      }, 50)      
      setTimeout(bodyClassCheck, 100)
    }
}
</script>

<style lang="scss">
  @import '@/assets/css/style.scss';
</style>
<!-- <style>
@import '~@/assets/css/style.css';
</style> -->