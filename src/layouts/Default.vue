<template>
    <div :class="layoutClass">
        <Header />
        <slot />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default {
    components: {
        Header,
        Footer,
    },
    computed: {
      layoutClass(){
        return this.$root.$route.meta.layoutClass ? this.$root.$route.meta.layoutClass : 'layout-default'
      },
    },    
}
</script>