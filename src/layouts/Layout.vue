<template>
    <component :is="layout" >
        <div :class="'layout'+layout">
            <slot />
        </div>
    </component>
</template>

<script>
import Default from './Default';
import Noheader from './Noheader';
import Nofooter from './Nofooter';
import None from './None';
import MobileLayout from './MobileLayout';
// import BlackNone from './BlackNone';

export default {
    name: 'TheLayout',
    components: {
        Default,
        Noheader,
        Nofooter,
        None,
        MobileLayout,
        // BlackNone
    },
    props: {
        layout:{
            type: String,
            default: 'None',
        },
    },
}
</script>