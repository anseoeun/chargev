<template>
    <div :class="layoutClass">
        <Header />
        <slot />
        <Footer />

        <!-- 총전소검색 -->
        <PopChargeSearch :visible="btmLayer.PopChargeSearch" @close="btmLayer.PopChargeSearch = false" @PopChargeSearchList="btmLayer.PopChargeSearchList = true"/>
        <!-- 충전소 리스트 -->
        <PopChargeSearchList :visible="btmLayer.PopChargeSearchList" @close="btmLayer.PopChargeSearchList = false"/>        
    </div>
</template>

<script>
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import PopChargeSearch from '@/views/PopChargeSearch'
import PopChargeSearchList from '@/views/PopChargeSearchList'
export default {
    components: {
        Header,
        Footer,

        PopChargeSearch,
        PopChargeSearchList
    },
    computed: {
      layoutClass(){
        return this.$root.$route.meta.layoutClass ? this.$root.$route.meta.layoutClass : 'layout-default'
      },
    }, 
    data(){
      return{
      btmLayer:{
        PopChargeSearch: false,
        PopChargeSearchList: false,
      },
      }
    },
    mounted(){
      this.$root.$on('PopChargeSearch', ()=>{
        this.btmLayer.PopChargeSearch = true
      })
    }
}
</script>