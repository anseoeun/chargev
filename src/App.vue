<template>
  <body id="app">
    <Layout :layout="layout">
        <router-view />
    </Layout>
  </body>
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
    watch:{
      bodyClass(newval) {
        if(newval === 'black-mode') {
          console.log('a:'+newval);
          document.querySelector('body').classList.add('black-mode')
        }else{
          console.log('b:'+newval);
          document.querySelector('body').classList.remove('black-mode')
        }
      }
    },
    mounted(){
      // let bodyClassCheck = setInterval(()=>{
      //   if(this.bodyClass != undefined) {
      //     document.querySelector('body').classList.add(this.bodyClass)
      //     clearInterval(bodyClassCheck)
      //   }
      // }, 50)      
      // setTimeout(bodyClassCheck, 100)
    }
}
</script>

<style lang="scss">
  @import '@/assets/css/style.scss';
</style>
<!-- <style>
@import '~@/assets/css/style.css';
</style> -->