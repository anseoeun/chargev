<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-payment-add max">
      <template slot="content">
          <div class="cont-scroll">
              <PaymentAdd
                :form="form"
                :status="status"
                @confirm="paymentAddConfirm"
                @add="status='paymentAdd-complete2'"
               />
          </div>
      </template>
    </BtmLayer>
</template>

<script>
import PaymentAdd from '@/views/common/PaymentAdd'
export default {
  components:{
    PaymentAdd
  },    
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  },  
  data(){
      return{
          status: 'paymentAdd',
          form:{},
      }
  },
  methods: {
    paymentAddConfirm(form){
      this.form = Object.assign({}, this.form, form)
    }
  }  
}
</script>
