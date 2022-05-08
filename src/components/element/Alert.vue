<template>
  <div 
    v-if="isOpen"
    :dim="isDim"
    class="alert-popup">
      <div class="dim" v-if="isDim"></div>
      <div class="popup">
          <div v-if="$slots.header" class="pop-header">
              <div class="pop-tit">
                <slot name="header" />
              </div>
          </div>
          <div class="pop-body">
               <div v-if="$slots.body" class="alert-txt">
                 <slot name="body" />
               </div>

               <div class="btn-wrap">
                 <button v-if="confirm" class="btn-type1 st1" @click="$emit('close')">확인</button>
                 <slot name="btn" />
               </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen:{
      type: Boolean,
      default: false
    },
    isDim:{
      type: Boolean,
      default: true
    },
    confirm:{
      type: Boolean,
      default: true
    },
  },
  watch:{
    isOpen(newValue, oldValue) {
      if (newValue) {
        document.body.setAttribute('style', 'overflow:hidden')
      }else if (oldValue){
        document.body.setAttribute('style', '')
      }      
    }    
  },
  methods: {
    onClose() {
      this.$emit('close')
    },
    onCloseDim() {
      if(this.dimClose) this.$emit('close')
    },
  }
}
</script>