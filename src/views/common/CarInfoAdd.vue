<template>
    <div class="form-box-wrap">
        <h2 class="tit-type1 c-white">{{ title }}</h2>
        <template v-if="status === 'carRegist-basic'">
            <div class="form-box">
                <div class="row">
                    <div class="input">
                        <Input type="text" v-model="form.carnum" placeholder="차량번호" />
                    </div>
                </div>
                <div class="row">
                    <div class="input">
                        <Input type="text" v-model="form.user" placeholder="소유자명" />
                    </div>
                </div>
            </div>
            <div class="btn-box">
                <button  class="btn-type1 st2"  @click="$emit('find');;">찾기</button>
                <button class="btn-type1 st2" @click="$emit('inconsistencyPop')">찾기(소유자명 불일치)</button>
                <button class="btn-type1 st2" @click="$emit('shareKey')">공유키 사용(법인차량 등록)</button>
            </div>
        </template>

        <template v-if="status == 'carRegist-rent'">
          <div class="form-box-wrap">
            <div class="form-box">
              <div class="row">
                  <div class="input auto">
                      <Input type="text" v-model="form.carnum" placeholder="차량번호" />
                  </div>
              </div>
              <div class="row">
                  <div class="input auto">
                      <Input type="text" v-model="form.name" placeholder="소유자명(대표자)" />
                  </div>
              </div>
              <div class="row">
                  <div class="input auto">
                      <Input type="text" v-model="form.coperNum" placeholder="법인등록번호" />
                  </div>
              </div>
            </div>
            <div class="btn-box">
                <button class="btn-type1 st2" @click="status = 'completion'">찾기</button>
                <button class="btn-type1 st2" @click="copeerCheckPop = true">찾기(법인명 확인필요)</button>
            </div>
          </div>
        </template>

        <template v-if="status == 'carRegist-shareKey'">
            <div class="form-box-wrap">
                <div class="form-box">
                <div class="row">
                    <div class="input auto">
                        <Input type="text" v-model="form.shareKey" placeholder="공유키 입력" />
                    </div>
                </div>
                <div class="row">
                    <div class="input auto">
                        <Input type="text" v-model="form.coperName" placeholder="법인명 입력" />
                    </div>
                </div>
                </div>
                <div class="btn-box">
                    <button class="btn-type1 st2" @click="setStatus('completion')">찾기</button>
                </div>
            </div>
        </template>
        
        <template v-if="status === 'carRegist-regist'">
            <div class="card-wrap">
                <div class="card5">
                    <div class="car-info-wrap">
                        <Icon type="logo-bmw2" class="company-logo" />
                        <div class="car-info">
                            <p class="space-txt"><span>BENZ</span><span>EQC400</span></p>
                            <p>01가5678</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn-box">
                <button class="btn-type1 st2" @click="$emit('cardRegist')">카드등록</button>
            </div>
        </template>


        <Alert :is-open="copeerCheckPop" @close="copeerCheckPop = false" :close="true" class="header-title-size2">      
            <template slot="header">법인명 확인필요</template>
            <template slot="body">
                법인명이 일치하지 않습니다.
                <br />자동차등록증상의 법인명을
                <br />정확하게 입력바랍니다.  ex) (주)차지비
            </template>
        </Alert>        
    </div>
</template>

<script>

export default {
 props:{
    title:{
        type: String,
        default: '차량등록'
    },
    status: {
        type: String,
        default: ''
    }
 },
  data(){
    return{
      carIniputStatus: 'regist-person',
      form:{
        carnum: '',
        user: '',
        shareKey: '',
        coperNum: '',
      },
      carList: [
          {
              company: 'bmw',
              carInfo: ['BMW', '530e', '02보6596'],
              num: '9999-9999-9999-9999',
              selected: true,
          },
          {
              company: 'benz',
              carInfo: ['BMW', '530e', '02보6596'],
              num: '1010-0101-1234-1234',
              selected: false,
          },
      ],      
      inconsistencyPop: false,
      copeerCheckPop: false
    }
  },
  watch:{
    // status(value){
    //   if(value){
    //     this.carIniputStatus = value;
    //   }
    // }
  },
  methods:{
    setStatus(status){
        this.carIniputStatus = status;
        this.$emit('status', status);
    }
  }
}
</script>
