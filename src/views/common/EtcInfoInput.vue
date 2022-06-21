<template>
    <div class="form-box-wrap">
      <h2 class="tit-type1 c-white">기타정보 입력</h2>
        <div class="form-box">
          <div class="row">
              <div class="input auto">
                  <Input type="text" v-model="form.addr" placeholder="주소" />
              </div>
              <div class="right">
                <button class="btn" @click="$emit('popAddr')">우편번호</button>
              </div>
          </div>
          <div class="row">
              <div class="input auto">
                  <Input type="text" v-model="form.addr2" placeholder="상세주소" />
              </div>
          </div>
        </div>
        <div class="btn-box">
            <button class="btn-type1 st2" @click="$emit('complete')">확인</button>
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
      btmLayer:{
        PopAddr: false,
      }      
    }
  },
}
</script>
