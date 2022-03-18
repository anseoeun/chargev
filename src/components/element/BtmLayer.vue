<template>
    <div class="btm-layer-wrap">
        <div class="dim"></div>
        <div class="btm-layer">
            <template v-if="content">
                <slot ref="content" name="content" />
            </template>
        </div>
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
    props:{
        content: {
            type: Boolean,
            default: false
        }
    }
}
</script>

