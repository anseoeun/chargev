<template>
<div class="transparent-box-wrap">
    <strong class="tit">본인인증</strong>
    <div class="transparent-box parallel-box">
        <div class="form-box">
        <div class="row">
            <div class="input auto">
                <input type="text" v-model="agency.label" placeholder="통신사">
            </div>
            <div class="btn">
            <button class="btn-type2 st1 inbl" @click="$emit('agencyOpen')">선택</button>
            </div>
        </div>
        <div class="row">
            <div class="input">
                <input type="text" placeholder="전화번호">
            </div>
        </div>
        <div class="row">
            <div class="input">
                <div class="inp-certify">
                <input type="number" placeholder="인증번호">
                <span class="time">2:59</span>
                </div>
            </div>
        </div>
        </div>
        <div class="box-btn">
            <button class="btn-type1 st1">인증번호 발송</button>
        </div>
    </div>
</div>
</template>

<script>

export default {
  props: {
    agency: {
      type: Object,
      default: ()=>{}
    },
  },  
  data(){
    return{
      pinSet:false,
      pin: [],   
      pin2: [],   
    }
  },
  methods:{
    initPinFocus(type){
      let pin = this.pin
      if(type === 'check') pin = this.pin2
      if(pin.length >= 4){
        if(type === 'check') this.pin2 = []
        else this.pin = []
      }
    }
  }
}
</script>
