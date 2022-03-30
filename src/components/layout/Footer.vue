<template>
    <div class="footer">
       <div class="footer-menu">
           <router-link to="/" class="menu" :class="{ on : menu === 'home' }"><span class="icon"><Icon type="foot-home" /></span><span class="txt">HOME</span></router-link>
           <router-link to="/" class="menu" :class="{ on : menu === 'map' }"><span class="icon"><Icon type="foot-map" /></span><span class="txt">MAP</span></router-link>
           <router-link to="/" class="menu" :class="{ on : menu === 'charge' }"><span class="icon"><Icon type="foot-charge" /></span><span class="txt">CHARGE</span></router-link>
           <router-link to="/" class="menu" :class="{ on : menu === 'apply' }"><span class="icon"><Icon type="foot-apply" /></span><span class="txt">APPLY</span></router-link>
           <router-link to="/" class="menu" :class="{ on : menu === 'more' }"><span class="icon"><Icon type="foot-more" /></span><span class="txt">MORE</span></router-link>
       </div>
    </div>
</template>
<script>
export default {
    computed: {
      menu(){
        return this.$root.$route.meta.menu
      },
    }
};
</script>