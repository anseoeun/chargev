<template>
    <component :is="layout" >
        <slot />
    </component>
</template>

<script>
import Default from './Default';
import Noheader from './Noheader';
import Nofooter from './Nofooter';
import None from './None';
import MobileLayout from './MobileLayout';

export default {
    name: 'TheLayout',
    components: {
        Default,
        Noheader,
        Nofooter,
        None,
        MobileLayout,
    },
    props: {
        layout:{
            type: String,
            default: 'Default',
        },
    },
}
</script>