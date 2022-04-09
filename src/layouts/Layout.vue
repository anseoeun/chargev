<template>
    <component :is="layout" >
        <slot />
    </component>
</template>

<script>
import Default from './Default';
import Map from './Map';
import None from './None';

export default {
    name: 'TheLayout',
    components: {
        Default,
        Map,
        None,
    },
    props: {
        layout:{
            type: String,
            default: 'None',
        },
    },
}
</script>