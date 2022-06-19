<template>
  <div class="contents">
    <button class="back"><Icon type="back" /></button>        
    <div class="login-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>
      <div class="min-fix">
        <div class="form-box-wrap">
          <h2 class="tit-type1 c-white">기타정보 입력</h2>
            <div class="form-box">
              <div class="row">
                  <div class="input auto">
                      <Input type="number" v-model="form.addr" placeholder="주소" />
                  </div>
                  <div class="right">
                    <button class="btn" @click="btmLayer.PopAddr = true">우편번호</button>
                  </div>
              </div>
              <div class="row">
                  <div class="input auto">
                      <Input type="number" v-model="form.addr2" placeholder="상세주소" />
                  </div>
              </div>
            </div>
            <div class="btn-box">
                <button class="btn-type1 st2">확인</button>
            </div>
        </div>
      </div>
      <div class="info-text">
          주소를 확인해주세요.
          <br />주소가 변경되었다면 새로운 주소를 입력바랍니다.
      </div>
      <div class="info-text">
          주소를 입력해주세요.
      </div>
    </div>

    <!-- 주소 -->
    <PopAddr :visible="btmLayer.PopAddr" @close="btmLayer.PopAddr = false"/>
  </div>
</template>

<script>
import PopAddr from '@/views/PopAddr'
export default { 
  components:{
    PopAddr,
  },
  data(){
    return{
      form: {
        addr: '',
        addr2: '',
      },
      btmLayer:{
        PopAddr: false,
      }      
    }
  },
}
</script>
