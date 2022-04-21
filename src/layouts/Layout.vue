<template>
    <component :is="layout" >
        <slot />
    </component>
</template>

<script>
import Default from './Default';
import None from './None';

export default {
    components: {
        Default,
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