<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-payment-list max" @opended="opended">
      <template slot="content">
          <div class="cont-scroll">
              <!-- 결제수단별 이용기록 -->
              <h2 class="tit-type1">결제수단별 이용기록</h2>
              <UsingHistory
                @detailUsingHistory="btmLayer.popPaymentDetail = true"
                :key="opacity"
               />
          </div>
      </template>
    </BtmLayer>
</template>

<script>
import UsingHistory from '@/views/common/UsingHistory'
export default {
  components:{
    UsingHistory
  },  
  props: {
    visible: {
      type: Boolean,
      default: false  
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
