<template>
    <div>
        <slot />
        <Footer />
    </div>
</template>

<script>
import Footer from '@/components/layout/Footer';

export default {
    name: 'Noheader',
    components: {
        Footer,
    },
}
</script>