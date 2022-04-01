<template>
  <div class="test">
    테스트

      <br>
      <br>
      <!-- transparent-box-wrap -->
      <div class="transparent-box-wrap">
        <strong class="tit">로그인</strong>
        <div class="transparent-box">
          <div class="form-box">
            <div class="row">
              <div class="input">
                  <input type="text" placeholder="ID(Email)">
              </div>
            </div>
            <div class="row">
              <div class="input">
                  <input type="text" placeholder="비밀번호">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn-type1 st1">로그인</button>
          </div>
        </div>
      </div>
      <br>
      <div class="transparent-box-wrap">
        <strong class="tit">본인인증</strong>
        <div class="transparent-box">
          <div class="form-box">
            <div class="row">
              <div class="input auto">
                  <input type="text" placeholder="통신사">
              </div>
              <div class="btn">
                <button class="btn-type2 st1 inbl">선택</button>
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
          <div class="btn-box">
            <button class="btn-type1 st1">인증번호 발송</button>
          </div>
        </div>
      </div>
      <!-- PIN 설정 -->
      <div class="transparent-box-wrap">
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
                    <input type="text" v-model="pin" @focus="initPinFocus">
                  </div>
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn-type1 st1">인증번호 발송</button>
          </div>
        </div>
      </div>
      <!-- 차량정보 확인 -->
      <div class="transparent-box-wrap">
        <strong class="tit">차량정보 확인</strong>
        <div class="transparent-box">
          <div class="info-box">
              <div class="row">
                <div class="space-text"><span>BMW</span><span>530e</span></div>
                <div class="right"><b>상세정보</b></div>
              </div>
              <div class="row">
                <div class="space-text"><span>M</span><span>1010</span><span>0101</span><span>1234</span><span>1234</span></div>
              </div>
              <div class="row">
                <span class="space-text"><span>C</span><span>5361</span><span>48**</span><span>****</span><span>4151</span></span>
              </div>
          </div>
          <div class="btn-box">
            <button class="btn-type1 st1">확인</button>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  components: {
  
  },
  data() {
    return {
        pin: []
    }
  },
  mounted(){
  },
  methods: {
    initPinFocus(){
      if(this.pin.length == 4){
        this.pin = []
      }
    }
  }
}
</script>
