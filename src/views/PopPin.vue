<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-pin-setting max">
      <template slot="content">
        <div class="cont-scroll">
            <!-- pin설정 -->
            <PinSetting :form="form" />
        </div>
      </template>
    </BtmLayer>
</template>

<script>
import PinSetting from '@/views/common/PinSetting'
export default {
  components:{
    PinSetting,
  },  
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  },  
  data(){
    return{
      form:{
        pin: '',
        pin2: '',
      },
    }
  }
}
</script>