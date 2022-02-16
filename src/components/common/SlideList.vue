<template>
    <div class="slide-list">
        <ul>
            <li>
                <button>
                     <slot ref="header" name="header" />
                </button>
                <div class="conts">
                    <slot ref="content" name="content" />
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
    props:{
      
    }
}
</script>

