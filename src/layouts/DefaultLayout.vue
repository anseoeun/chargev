<template>
    <div>
        <Header />
        <slot />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default {
    name: 'DefaultLayout',
    components: {
        Header,
        Footer,
    },
}
</script>