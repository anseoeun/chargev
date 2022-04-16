<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-charge">
      <template slot="content">
        <div class="cont-scroll">
           <ChargeTime :timeSetType="timeSetType" :key="timeSetType" />            
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
}
</script>
