<template>
    <div class="form-box-wrap">
      <h2 class="tit-type1 c-white">카드발급</h2>
        <div class="form-box">
          <div class="row">
              <div class="input auto">
                  <Input type="number" v-model="form.addr" placeholder="주소" />
              </div>
              <div class="right">
                <button class="btn" @click="$emit('postCode')">우편번호</button>
              </div>
          </div>
          <div class="row">
              <div class="input auto">
                  <Input type="number" v-model="form.addr2" placeholder="상세주소" />
              </div>
          </div>
        </div>
        <div class="btn-box">
            <button class="btn-type1 st2" @click="$emit('payment')">결제하기</button>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      form: {
        addr: '',
        addr2: '',
      },
    }
  },
}
</script>
