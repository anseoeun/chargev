<template>
    <component :is="layout" >
        <slot  />
    </component>
</template>

<script>
import DefaultLayout from './DefaultLayout';
import MobileLayout from './MobileLayout';

export default {
    name: 'TheLayout',
    components: {
        DefaultLayout,
        MobileLayout,
    },
    props: {
        layout:{
            type: String,
            default: 'DefaultLayout',
        },
    },
}
</script>