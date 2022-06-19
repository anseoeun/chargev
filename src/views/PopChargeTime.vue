<template>
    <BtmLayer :visible="visible" @close="close" class="pop-charge max" @opended="opended">
      <template slot="content">
        <button class="btn-layer-close" @click="close"><Icon type="close" /></button>      
        <div class="cont-scroll">
          <ChargeTime :timeSetType="timeSetType" :opacity="opacity" :key="opacity" />
        </div>
      </template>
    </BtmLayer>
</template>

<script>
import ChargeTime from '@/views/common/ChargeTime'
export default {
  components:{
    ChargeTime
  },
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
    timeSetType:{
      type: String,
      default: ''  
    },
  },  
  data(){
    return{
      opacity: 0,
    }
  }, 
  methods:{
    close(){
      this.$emit('close');
      this.opacity = 0
    },
    opended(){
      this.opacity = 1
    }
  }
}
</script>
