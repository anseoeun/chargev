<template>
    <div 
      ref="layerwrap" 
      class="btm-layer-wrap"
      style="display:none;"
     >
        <div class="dim" @click="onClose"></div>
        <div ref="layer" class="btm-layer" style="display:none;">
            <template>
                <slot ref="content" name="content" />
            </template>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    props: {
      visible: {
        type: Boolean,
        default: false
      },
    },
    watch: {
      visible(newVisible) {
        const layerwrap = this.$refs.layerwrap
        const layer = this.$refs.layer
        
        if (newVisible) {
            setTimeout(()=>{
                $(layerwrap).fadeIn();
                $(layer).slideDown(300);
            }, 100)
        }else{
            $(layer).slideUp(300, function(){
                $(layerwrap).fadeOut();
            });
        }
      }
    },
    methods:{
      onClose() {
        this.$emit('close')
      },
    }
}
</script>

