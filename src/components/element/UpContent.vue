<template>
    <div class="up-content" :class="{up: status === 'up'}" >
      <div class="hide-area" ref="hide">
          <slot ref="hide" name="hide" />
      </div>
      <div v-if="upHide" class="up-area">
        <button v-if="status === 'down'" class="btn-up" @click="contentUp"><Icon type="arr-top"/></button>
        <button v-if="status === 'up'" class="btn-close" @click="contentUp"><Icon type="close-white"/></button>
        <slot ref="up" name="up" />
      </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    props: {
      upHide: {
        type: Boolean,
        default: true
      }
    },
    data(){
      return{
        status: 'down'
      }
    },
    methods:{
      contentUp(){
        if(!$(this.$refs.hide).is(':hidden')){
          $(this.$refs.hide).slideUp();
          this.status = 'up';
          $('body').css('overflow', 'hidden');
        }else{
          $(this.$refs.hide).slideDown();
          this.status = 'down';
          $('body').css('overflow', '');
        }
      }
    }
}
</script>
