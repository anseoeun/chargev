<template>
  <div class="contents">
    <button class="back"><Icon type="back" /></button>        
    <div class="login-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>
      <div class="min-fix">
        <PaymentAdd
          @confirm="paymentAddConfirm"
          @status="status = 'completion'"
          />
      </div>
      <div v-if="status === 'basic'" class="info-text">
        충전요금 결제를 위한 결제카드정보를 입력합니다.
        <br />신용카드번호 및 유효기간, 비밀번호 앞2자리를
        <br />입력해주세요.
      </div>
      <div v-if="status === 'completion'" class="info-text">
        결제카드를 추가로 등록하길 원하시는 경우
        <br />카드 추가 버튼을 눌러 추가 가능합니다.
        <br />PAYCO 연동시 등록된 신용카드는 비활성화됩니다.
      </div>

    </div>
  </div>
</template>

<script>
import PaymentAdd from '@/views/common/PaymentAdd'
export default { 
  components:{
    PaymentAdd
  },
  data(){
    return{
      status: 'basic'
    }
  },
  methods: {
    paymentAddConfirm(form){
      this.form = Object.assign({}, this.form, form)
    }
  }    
}
</script>
