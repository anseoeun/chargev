<template>
    <component :is="layout" >
        <div :class="'layout'+layout">
            <slot />
        </div>
    </component>
</template>

<script>
import Default from './Default';
import None from './None';

export default {
    name: 'TheLayout',
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