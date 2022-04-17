<template>
    <div class="layout-default">
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
}
</script>