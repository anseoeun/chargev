<template>
  <div class="contents">
    <button class="back"><Icon type="back" /></button>        
    <div class="login-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>
      <div v-if="status === 'selfAuth'" class="min-fix">
        <!-- 본인인증 -->
        <SelfAuth :form="form" @agencyOpen="btmLayer.agency=true"
          @complete="status='carRegistMenu';guideTextStatus='carRegistMenu'"
         />
      </div>
      <div v-if="status === 'carRegistMenu'" class="min-fix">
        <!-- 차량등록메뉴 -->
        <CarRegistMenu
          @basic="status='carRegist-basic';guideTextStatus='carRegist-basic'"
          @rent="status='carRegist-rent';guideTextStatus='carRegist-rent'"
          @later="registAfterPop = true"
         />
      </div>
      <div v-if="status.includes('carRegist-')" class="min-fix">
        <!-- 차량등록 -->
        <CarInfoAdd
            :status="status"
            @find="status='carRegist-regist';guideTextStatus='carRegist-complete'"
            @inconsistencyPop="alert.inconsistencyPop = true"
            @shareKey="status='carRegist-shareKey';guideTextStatus='carRegist-shareKey'"
            @cardRegist="status='cardRegist';guideTextStatus='cardRegist'"
          />
      </div>
      <div v-if="status === 'cardRegist'" class="min-fix">
        <!-- 카드등록 -->
        <CardRegist :form="form"
          @regist="status='carAdd';guideTextStatus='carAdd-promo'"
          @nocard="status='carAdd';guideTextStatus='carAdd-complete'"
         />
      </div>
      <div v-if="status === 'carAdd'" class="min-fix">
        <!-- 차량추가 -->
        <CarAdd
          :isPromo="true"
          @promoSearch="status='productCheck';guideTextStatus='productCheck2'"
          @promoSearchNo="status='productCheck-noProduct';guideTextStatus='productCheck-noProduct'"
         />
      </div>

      <div v-if="status.includes('productCheck')" class="min-fix">
        <!-- 상품확인 -->
        <ProductCheck
           :status="status"
           @complete="status='paymentAdd';guideTextStatus='paymentAdd'"
         />
      </div>
      <div v-if="status === 'paymentAdd'" class="min-fix">
        <!-- 결제정보추가 -->
        <PaymentAdd
          :form="form"
            @add="guideTextStatus='paymentAdd-complete'"
           @complete="status='etcInfoInput';guideTextStatus='etcInfo'"
         />
      </div>
      <div v-if="status === 'etcInfoInput'" class="min-fix">
        <!-- 기타정보입력 -->
        <EtcInfoInput
          :form="form"
           @popAddr="btmLayer.PopAddr=true"
           @complete="status='pinSetting';guideTextStatus='pinSetting'"
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
    <!-- 팝업:주소 -->
    <PopAddr :visible="btmLayer.PopAddr" @close="btmLayer.PopAddr=false"/>

    <!-- 팝업:차량등록 -->
    <Alert :is-open="alert.registAfterPop" @close="alert.registAfterPop = false" :close="true" class="header-title-size2">      
        <template slot="header">차량등록</template>
        <template slot="body">
          차량을 등록하지 않아도 충전소조회는 가능합니다.
          <br />다만 즉시충전 및 충전이력 확인 등의 기능은
          <br />사용이 불가능합니다.
        </template>
    </Alert>   
    <!-- 팝업:소유자명 불일치 -->
    <Alert :is-open="alert.inconsistencyPop" @close="alert.inconsistencyPop = false" :close="true" class="header-title-size2">
        <template slot="header">소유자명 불일치</template>
        <template slot="body">
        소유자가 일치하지 않습니다.
        <br />차량정보 등록은 실 소유자만 가능합니다.
        </template>
    </Alert>     
  </div>
</template>

<script>
import SelfAuth from '@/views/common/SelfAuth'
import CarRegistMenu from '@/views/common/CarRegistMenu'
import CarInfoAdd from '@/views/common/CarInfoAdd'
import CardRegist from '@/views/common/CardRegist'
import CarAdd from '@/views/common/CarAdd'
import ProductCheck from '@/views/common/ProductCheck'
import PaymentAdd from '@/views/common/PaymentAdd'
import EtcInfoInput from '@/views/common/EtcInfoInput'
import PinSetting from '@/views/common/PinSetting'

import AgencySelect from '@/views/common/AgencySelect'
import PopAddr from '@/views/PopAddr'

import GuideText from '@/views/common/GuideText'
export default {
  components:{
    SelfAuth,
    CarRegistMenu,
    CarInfoAdd,
    CardRegist,
    CarAdd,
    ProductCheck,
    PaymentAdd,
    EtcInfoInput,
    PinSetting,

    AgencySelect,
    PopAddr,

    GuideText
  },
  data(){
    return{
      status: 'selfAuth',
      guideTextStatus: 'selfAuth-join',
      form:{
        agency: {},
        tel: '',
        carnum: '',
        name: '',
        auth: '',
        cardnum: '',
        maxdate: '',
        password: '',        
        addr:'',
        addr2:'',
        pin: '',
        pin2: '',        
      }, 

      btmLayer:{
        agency: false,
        PopAddr: false,
      }, 
      alert: {
        registAfterPop: false,
        inconsistencyPop: false
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
