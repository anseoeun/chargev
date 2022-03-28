<template>
    <div v-if="!pinSet" class="transparent-box-wrap">
    <strong class="tit">PIN 설정</strong>
    <div class="transparent-box">
        <div class="form-box">
        <div class="row">
            <div class="input">
                <div class="inp-pin">
                <div class="pin">
                    <input type="password" v-model="pin[0]" autocomplete="new-password" maxlength="1">
                    <input type="password" v-model="pin[1]" autocomplete="new-password" maxlength="1">
                    <input type="password" v-model="pin[2]" autocomplete="new-password" maxlength="1">
                    <input type="password" v-model="pin[3]" autocomplete="new-password" maxlength="1">
                </div>
                <input type="number" v-model="pin" @focus="initPinFocus">
                </div>
            </div>
        </div>
        </div>
        <div class="box-btn">
        <button class="btn-type1 st1" @click="pinSet = true">확인</button>
        </div>
    </div>
    </div>
    <div v-else class="transparent-box-wrap">
    <strong class="tit">PIN 확인</strong>
    <div class="transparent-box">
        <div class="form-box">
        <div class="row">
            <div class="input">
                <div class="inp-pin">
                <div class="pin">
                    <input type="password" v-model="pin2[0]" autocomplete="new-password" maxlength="1">
                    <input type="password" v-model="pin2[1]" autocomplete="new-password" maxlength="1">
                    <input type="password" v-model="pin2[2]" autocomplete="new-password" maxlength="1">
                    <input type="password" v-model="pin2[3]" autocomplete="new-password" maxlength="1">
                </div>
                <input type="number" v-model="pin2" @focus="initPinFocus('check')">
                </div>
            </div>
        </div>
        </div>
        <div class="box-btn">
        <button class="btn-type1 st1">확인</button>
        </div>
    </div>
    </div>
</template>

<script>

export default {
  props: {
    visible: {
      type: Boolean,
      default: false  
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
