<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-blumembers-add max">
      <template slot="content">
          <div class="cont-scroll">
            <div class="form-box-wrap">
              <h2 class="tit-type1 c-white">블루멤버스 계정연동</h2>

              <div class="form-box">
                  <div class="row">
                      <div class="input auto">
                          <Input type="number" v-model="form.cardnum" maxlength="16" placeholder="블루멤버스 카드 번호 입력" />
                      </div>
                  </div>
                  <div class="row">
                      <div class="input">
                          <Input type="password" v-model="form.password" placeholder="비밀번호 입력" />
                      </div>
                  </div>
              </div>
              <div class="btn-box">
                  <button class="btn-type1 st2">연동하기</button>
              </div>
            </div>
          </div>
      </template>
    </BtmLayer>
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
          form:{
            cardnum: '',
            password: '',
          },
      }
  },
}
</script>
