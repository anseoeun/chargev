<template>
<div class="form-box-wrap">
  <h2 class="tit-type1 c-white">본인인증</h2>
    <div class="form-box">
      <div class="row">
          <div class="input auto">
              <Input type="text" v-model="form.agency.label" placeholder="통신사" />
          </div>
          <div class="right">
            <button class="btn" @click="$emit('agencyOpen')">선택</button>
          </div>
      </div>
      <div class="row">
          <div class="input auto">
              <Input type="number" v-model="form.tel" placeholder="전화번호" maxlength="11" />
          </div>
          <div class="right">
            <button class="btn" @click="setForm = true">인증번호 발송</button>
          </div>          
      </div>
      <div class="row">
          <div class="input inp-certify">
              <Input type="number" v-model="form.auth" placeholder="인증번호" maxlength="6" />
              <span v-if="setForm" class="time">2:59</span>
          </div>
      </div>
    </div>
    <div class="btn-box">
        <button v-if="status != 'authKey'" class="btn-type1 st2" @click="$emit('complete')">확인</button>
        <template v-if="isAuthKey">
          <button class="btn-type1 st2" @click="status = 'authKey';$emit('authKey')">인증값 찾기</button>
          <button v-if="status === 'authKey'" class="btn-type1 st2" @click="status = 'authKey';$emit('authKey2')">인증값 찾기(PIN넘어감)</button>
        </template>
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
    isAuthKey: {
      type: Boolean,
      default: false
    }
  },  
  data(){
    return{
      status: '',
      setForm: false
    }
  },
}
</script>
