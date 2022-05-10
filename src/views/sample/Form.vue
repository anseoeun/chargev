<template>
  <div class="contents" style="padding:2rem">
    <h2 class="guide-tit">인풋 스타일</h2>
    <Input type="text" v-model="form.form1" placeholder="text 인풋" />
    <Input type="number" v-model="form.form1" placeholder="number 인풋" maxlength="6" />

    <h2 class="guide-tit">form-box 내부 인풋</h2>    
    <div class="form-box-wrap">
      <h2 class="tit-type1 c-white">인풋박스 타이틀</h2>    
        <div class="form-box">
          <div class="row">
              <div class="input auto">
                  <Input type="text" v-model="form.form1" placeholder="text 인풋" />
              </div>
              <div class="right">
                <button class="btn">버튼</button>
              </div>
          </div>
          <div class="row">
              <div class="input">
                  <Input type="number" v-model="form.form1" placeholder="number 인풋" maxlength="6" />
              </div>
          </div>
          <div class="row">
              <div class="input inp-certify">
                  <Input type="number" v-model="form.auth" placeholder="인증번호" maxlength="6" />
                  <span class="time">2:59</span>
              </div>
          </div>
        </div>   
        <div class="btn-box">
            <button class="btn-type1 st2">확인</button>
        </div>
    </div>    

    <h2 class="guide-tit">PIN 인풋</h2>    
    <div class="form-box-wrap">
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
                  </div>
                  <Input type="number" v-model="form.pin" @focus="initPinFocus" maxlength="4" />
                </div>
            </div>
        </div>
      </div>
    </div>    

    <h2 class="guide-tit">첨부파일 인풋</h2>    
    <div class="inp-file">
        <input type="file" @change="handleFileChange($event)" />
        <div class="input">
            <Input type="text" v-model="form.file" placeholder="사업자등록증" />
        </div>
        <div class="right">
            <button class="btn">첨부하기</button>
        </div>
    </div>  

    <h2 class="guide-tit">체크버튼 단독</h2>    
    <div class="check">
        <button class="btn-type3 st2" @click="checkIcon($event, 'ruleChecked')">
          <Icon type="check" :class="{on: ruleChecked}" />
          <span class="txt">체크 토글 버튼</span>
        </button>
    </div>

    <h2 class="guide-tit">체크버튼 여러개</h2>    
    <div v-for="(item, index) in ruleList" :key="index" class="check">
        <button class="btn-type3 st2" @click="checkIcon($event, 'ruleChecked2', index)">
          <Icon type="check" :class="{on: ruleChecked2[index]}" />
          <span class="txt">{{ item.tit }}</span>
        </button>
    </div>
    

    <h2 class="guide-tit">체크버튼 여러개2</h2>    
    <ul class="chk-list">
      <li v-for="(item, index) in chargeType" :key="index">
        <button  @click="checkIcon($event, 'chargeTypeChecked', index)">
          <Icon type="check-white" :class="{on: chargeTypeChecked[index]}" />
          <span class="txt">{{ item }}</span>
        </button>
      </li>
    </ul>
    
  </div>
</template>
<script>
export default {
    components:{

    },  
    data(){
      return{
        form: {
          form1: '',
          pin: '',
          pin2: '',
        },
        ruleChecked: false,
        ruleChecked2: new Array(5).fill(false),
        ruleList: [
          {
            tit: '서비스 이용약관 [필수]',
          },
          {
            tit: '개인정보처리방침 [필수]',
          },
          {
            tit: '위치기반서비스 이용약관 [필수]',
          },
          {
            tit: '휴대폰본인확인서비스 [필수]',
          },
          {
            tit: '마케팅 이용 동의 [선택]',
          },
        ],    

        chargeTypeChecked:[],
        chargeType: [
          '완속',
          'DC콤보',
          '차데모',
          'AC3상',
        ],
      }
    },
    methods: {
      initPinFocus(type){
        let pin = this.form.pin
        if(type === 'check') pin = this.form.pin2
        if(pin.length >= 4){
          if(type === 'check') this.form.pin2 = ''
          else this.form.pin = ''
        }
      },
    }
};
</script>
<style scoped>
.guide-line{border-top:1px dotted #fff;margin:3rem 0;}
.guide-tit{font-weight: bold; border: 1px solid #fff;padding:0.252rem;margin-bottom:1rem;background: #f9f9f9;color: #000;}
.guide-tit ~ .guide-tit{margin-top:3rem;}
</style>


