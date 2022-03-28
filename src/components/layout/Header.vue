<template>
    <div class="header">
        <div class="left">
            <router-link v-if="menus.back" to="/" class="btn"><Icon type="back" /></router-link>
            <router-link v-if="menus['back-red']" to="/" class="btn"><Icon type="back-red" /></router-link>
            <!-- <router-link v-if="menus.back" to="/" class="btn"><i class="i-back"></i></router-link> -->
            <router-link to="/" class="btn"><i class="i-back-red"></i></router-link>
        </div>
       <div class="right">
           <router-link v-if="menus.view" to="/" class="btn">둘러보기</router-link>
           <!-- <router-link v-if="menus.tel" to="/" class="btn"><i class="i-tel"></i></router-link> -->
           <!-- <router-link v-if="menus.home" to="/" class="btn"><i class="i-home"></i></router-link> -->
           <router-link v-if="menus.home" to="/" class="btn"><Icon type="home" /></router-link>
           <router-link v-if="menus['home-red']" to="/" class="btn"><Icon type="home-red" /></router-link>
       </div>
    </div>
</template>
<script>
// import EventBus from '@/js/EventBus';
export default {
    name: 'Header',
    data() {
        return {

        }
    },
    mounted(){

    },
    methods: {

    }
};
</script>
