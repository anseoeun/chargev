<template>
    <div>
        <template v-if="content">
            <slot ref="content" name="content" />
        </template>
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

