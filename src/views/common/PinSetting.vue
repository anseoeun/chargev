<template>
    <div v-if="!pinSet" class="transparent-box-wrap">
    <strong class="tit">PIN 설정</strong>
    <div class="transparent-box">
        <div class="form-box">
        <div class="row">
            <div class="input">
                <div class="inp-pin">
                  <div class="pin">
                      <Input type="password" v-model="form.pin[0]" autocomplete="new-password" maxlength="1" />
                      <Input type="password" v-model="form.pin[1]" autocomplete="new-password" maxlength="1" />
                      <Input type="password" v-model="form.pin[2]" autocomplete="new-password" maxlength="1" />
                      <Input type="password" v-model="form.pin[3]" autocomplete="new-password" maxlength="1" />
                  </div>
                  <Input type="number" v-model="form.pin" @focus="initPinFocus" maxlength="4" />
                </div>
            </div>
        </div>
        </div>
        <div class="btn-box">
          <button class="btn-type1 st1" @click="pinSetting">확인</button>
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
                      <Input type="password" v-model="form.pin2[0]" autocomplete="new-password" maxlength="1" />
                      <Input type="password" v-model="form.pin2[1]" autocomplete="new-password" maxlength="1" />
                      <Input type="password" v-model="form.pin2[2]" autocomplete="new-password" maxlength="1" />
                      <Input type="password" v-model="form.pin2[3]" autocomplete="new-password" maxlength="1" />
                  </div>
                  <Input type="number" v-model="form.pin2" @focus="initPinFocus('check')" maxlength="4" />
                </div>
            </div>
        </div>
        </div>
        <div class="btn-box">
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
    form: {
      type: Object,
      default: ()=>{}
    },    
  },  
  data(){
    return{
      pinSet:false,
    }
  },
  methods:{
    initPinFocus(type){
      let pin = this.form.pin
      if(type === 'check') pin = this.form.pin2
      if(pin.length >= 4){
        if(type === 'check') this.form.pin2 = ''
        else this.form.pin = ''
      }
    },
    pinSetting(){
      this.pinSet = true;
      this.$emit('pinset', this.pinSet)
    }
  }
}
</script>
