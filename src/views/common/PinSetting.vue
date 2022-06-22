<template>
    <div v-if="!pinSet" class="form-box-wrap">
      <strong class="tit">PIN 입력</strong>
      <div class="form-box">
      <div class="row">
          <div class="input">
              <div class="inp-pin">
                <div class="pin">
                    <Input type="password" v-model="form.pin[0]" autocomplete="new-password" maxlength="1" />
                    <Input type="password" v-model="form.pin[1]" autocomplete="new-password" maxlength="1" />
                    <Input type="password" v-model="form.pin[2]" autocomplete="new-password" maxlength="1" />
                    <Input type="password" v-model="form.pin[3]" autocomplete="new-password" maxlength="1" />
                    <Input type="password" v-model="form.pin[4]" autocomplete="new-password" maxlength="1" />
                    <Input type="password" v-model="form.pin[5]" autocomplete="new-password" maxlength="1" />
                </div>
                <Input type="number" v-model="form.pin" @focus="initPinFocus" maxlength="6" />
              </div>
          </div>
      </div>
      </div>
    </div>
    <div v-else-if="pinSet" class="form-box-wrap">
      <strong class="tit">PIN 재입력</strong>
      <div class="form-box">
        <div class="row">
            <div class="input">
                <div class="inp-pin">
                  <div class="pin">
                      <Input type="password" v-model="form.pin2[0]" autocomplete="new-password" maxlength="1" />
                      <Input type="password" v-model="form.pin2[1]" autocomplete="new-password" maxlength="1" />
                      <Input type="password" v-model="form.pin2[2]" autocomplete="new-password" maxlength="1" />
                      <Input type="password" v-model="form.pin2[3]" autocomplete="new-password" maxlength="1" />
                      <Input type="password" v-model="form.pin2[4]" autocomplete="new-password" maxlength="1" />
                      <Input type="password" v-model="form.pin2[5]" autocomplete="new-password" maxlength="1" />
                  </div>
                  <Input type="number" v-model="form.pin2" @focus="initPinFocus('check')" maxlength="6" />
                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  props: {
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
  mounted(){
    window.addEventListener('keyup', function(event) {
      if (event.keyCode === 13) { 
        this.pinSetting();
      }
    }.bind(this));
  },
  methods:{
    initPinFocus(type){
      let pin = this.form.pin
      if(type === 'check') pin = this.form.pin2
      if(pin.length >= 6){
        if(type === 'check') this.form.pin2 = ''
        else this.form.pin = ''
      }
    },
    pinSetting(){
      this.pinSet = true;
      this.$emit('pinSetting', this.pinSet)
    },
  }
}
</script>
