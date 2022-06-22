<template>
  <div class="contents">
    <button class="back"><Icon type="back" /></button>        
    <div class="login-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>
      <div v-if="status === 'selfAuth'" class="min-fix">
        <!-- 본인인증 -->
        <SelfAuth :form="form" :isAuthKey="true" @agencyOpen="btmLayer.agency=true"
          @complete="status='carAuth';guideTextStatus='carAuth'"
          @authKey="guideTextStatus = 'selfAuth-authKey'"
          @authKey2="status='pinSetting';guideTextStatus = 'pinSetting2'"
         />
      </div>
      <div v-if="status === 'carAuth'" class="min-fix">
        <!-- 차량인증 -->
        <CarAuth
          @auth="btmLayer.PopCarAuth=true"
         />
      </div>
      <div v-if="status === 'carCheck'" class="min-fix">
        <!-- 차량확인 -->
        <CarCheck
          @complete="alert.uncertifiedCar=true"
         />
      </div>
      <div v-if="status === 'paymentCheck'" class="min-fix">
        <!-- 결제정보확인 -->
        <PaymentCheck
          @complete="status='productCheck';guideTextStatus='productCheck'"
         />
      </div>
      <div v-if="status === 'productCheck'" class="min-fix">
        <!-- 상품확인 -->
        <ProductCheck
           @complete="status='etcInfoInput';guideTextStatus='etcInfoInput'"
         />
      </div>
      <div v-if="status === 'etcInfoInput'" class="min-fix">
        <!-- 기타정보입력 -->
        <EtcInfoInput
          :form="form"
           @popAddr="btmLayer.PopAddr=true"
           @complete="status='pinSetting';guideTextStatus='pinSetting';alert.biometricsPop=true"
         />
      </div>
      <div v-if="status === 'pinSetting'" class="min-fix">
        <!-- PIN -->
        <PinSetting :form="form" @pinSetting="guideTextStatus='pinCheck'" />
      </div>

      <!-- 가이드텍스트 -->
      <GuideText :status="guideTextStatus"  />
    </div>
    
    <!-- 팝업:통신사 선택 -->
    <AgencySelect :visible="btmLayer.agency" @close="agencySelect"/>
    <!-- 팝업:차량인증 -->
    <PopCarAuth :visible="btmLayer.PopCarAuth" @close="btmLayer.PopCarAuth = false"
      @regist="btmLayer.PopCarAuth = false;status = 'carCheck';guideTextStatus='carCheck'"
    />
    <!-- 팝업:주소 -->
    <PopAddr :visible="btmLayer.PopAddr" @close="btmLayer.PopAddr=false"/>

     <!-- 팝업:미인증차량 안내 -->
    <Alert :is-open="alert.uncertifiedCar" 
      @close="alert.uncertifiedCar=false;status='paymentCheck';guideTextStatus='paymentCheck'"
    >
        <template slot="header">미인증차량 안내</template>
        <template slot="body">
          미인증 차량은 등록이 불가능하며 삭제됩니다.
          <br />계속 진행을 원하시는 경우 확인 버튼을
          <br />눌러주세요.
        </template>
    </Alert>
    <!-- 팝업:생체인식 사용 -->
    <Alert :is-open="alert.biometricsPop" @close="alert.biometricsPop=false" :confirm="false" class="header-title-size2">
        <template slot="header">생체인식 사용</template>
        <template slot="body">
          <span class="bold t-m">생체인식을 사용하시겠습니까?</span>
        </template>
        <template slot="btn">
          <button class="btn-type1 st1" @click="alertPop=false">사용</button>
          <button class="btn-type1 st3" @click="alertPop=false">사용안함</button>
        </template>
    </Alert>         
  </div>
</template>

<script>
import SelfAuth from '@/views/common/SelfAuth'
import CarAuth from '@/views/common/CarAuth'
import CarCheck from '@/views/common/CarCheck'
import PaymentCheck from '@/views/common/PaymentCheck'
import ProductCheck from '@/views/common/ProductCheck'
import EtcInfoInput from '@/views/common/EtcInfoInput'
import PinSetting from '@/views/common/PinSetting'

import AgencySelect from '@/views/common/AgencySelect'
import PopCarAuth from '@/views/PopCarAuth'
import PopAddr from '@/views/PopAddr'

import GuideText from '@/views/common/GuideText'
export default {
  components:{
    SelfAuth,
    CarAuth,
    CarCheck,
    PaymentCheck,
    ProductCheck,
    EtcInfoInput,
    PinSetting,

    AgencySelect,
    PopCarAuth,
    PopAddr,

    GuideText
  },
  data(){
    return{
      status: 'selfAuth',
      guideTextStatus: 'selfAuth',
      form:{
        agency: {},
        tel: '',
        auth: '',
        addr:'',
        addr2:'',
        pin: '',
        pin2: '',        
      }, 

      btmLayer:{
        agency: false,
        PopCarAuth: false,
        PopAddr: false,
      }, 
      alert: {
        uncertifiedCar: false,
        biometricsPop: false
      }
    }
  },
  methods: {
    agencySelect(val){
      val ? this.form.agency = val : ''
      this.btmLayer.agency = false
    },
  }
}
</script>
