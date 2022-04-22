<template>
    <div class="transparent-box-wrap">
        <strong class="tit">결제정보 추가</strong>
        <!-- 카메라인식 -->
        <template v-if="paymentIniputStatus == 'camera'">
            <div class="camera-box"></div>
            <div class="btn-wrap">
                <button class="btn-type1 st2" @click="paymentIniputStatus = 'form';$emit('status', paymentIniputStatus)">직접입력</button>
            </div>
        </template>
        <!-- 직접입력 -->
        <template v-else-if="paymentIniputStatus == 'form'">
            <div class="transparent-box">
            <div class="form-box">
                <div class="row">
                <div class="input">
                    <Input type="number" v-model="form.cardnum" maxlength="16" placeholder="카드번호" />
                </div>
                </div>
                <div class="row">
                <div class="input">
                    <Input type="number" v-model="form.maxdate" maxlength="4" placeholder="유효기간" />
                </div>
                </div>
                <div class="row">
                <div class="input">
                    <Input type="password" v-model="form.password" maxlength="2" placeholder="비밀번호 앞2자리" />
                </div>
                </div>
            </div>
            <div class="btn-box">
                <button class="btn-type1 st1" @click="paymentIniputStatus = 'completion';$emit('status', paymentIniputStatus)">확인</button>
            </div>
            </div>
            <div class="btn-wrap">
                <button class="btn-type1 st2" @click="paymentIniputStatus = 'camera';$emit('status', paymentIniputStatus)">카메라 인식</button>
            </div>
        </template>
        <!-- 완료 -->
        <template v-if="paymentIniputStatus == 'completion'">
            <div class="transparent-box parallel-box">
            <div class="info-box">
                <div class="row">
                    삼성카드
                    <div class="right"><b>상세정보</b></div>
                </div>
                <div class="row">
                    <div class="space-text"><span>5361</span><span>48**</span><span>****</span><span>4151</span></div>
                </div>
                <div class="row">
                    02/24
                </div>
            </div>
            <div class="btn-box">
                <button class="btn-type1 st1" @click="confirm">확인</button>
            </div>
            </div>
        </template>
    </div>
</template>

<script>

export default {
  data(){
    return{
      form:{
        cardnum: '',
        maxdate: '',
        password: '',
      },
      paymentIniputStatus: 'camera',
      carIniputStatus: 'basic',
      pinIniputStatus: '',
    }
  },
  methods: {
      confirm(){
          this.$emit('confirm', this.form);
      }
  }
}
</script>
