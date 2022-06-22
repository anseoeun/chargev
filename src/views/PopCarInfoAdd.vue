<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-car-add max">
      <template slot="content">
          <div class="cont-scroll">
            <template v-if="status.includes('carRegist')">
              <!-- 차량등록 -->
              <CarInfoAdd
                :status="status"
                @find="status='carRegist-regist';"
                @findShareKey="status='carRegist-regist';"
                @inconsistencyPop="alert.inconsistencyPop=true"
                @shareKey="status='carRegist-shareKey';"
                @cardRegist="status='cardRegist';"
                @copeerCheckPop="alert.copeerCheckPop=true"
                />
            </template>
            <!-- 카드등록 -->
            <template v-if="status === 'cardRegist'">
              <CardRegist
                :form="form"
                @regist="status='carAdd-promo';"
                @nocard="status='carAdd-complete';"
              />
            </template>
            <template v-if="status.includes('carAdd')">
              <!-- 차량추가 -->
              <CarAdd
                :status="status"
                @promoSearch="status='productCheck';"
                @promoSearchNo="status='productCheck-noProduct';"
                @complete="status='paymentAdd';"
                @cardIssue="status='cardIssue';"
              />
            </template>
            <template v-if="status.includes('cardIssue')">
              <!-- 카드발급 -->
              <CardIssue
                @payment="status='paymentAdd';"
              />
            </template>    
            <template v-if="status.includes('productCheck')">
              <!-- 상품확인 -->
              <ProductCheck
                :status="status"
                @complete="status='paymentAdd';"
              />
            </template>
            <template v-if="status.includes('paymentAdd')">
              <!-- 결제정보추가 -->
              <PaymentAdd
                  :form="form"
                  :status="status"
                  @add="status='paymentAdd-complete';"
                  @complete="status='etcInfoInput';"
                  @complete2="status='pinSetting';"
              />
            </template>
            <template v-if="status === 'etcInfoInput'">
              <!-- 기타정보입력 -->
              <EtcInfoInput
                :form="form"
                @popAddr="$emit('postCode')"
                @complete="status='pinSetting';"
              />
            </template>
            <template v-if="status === 'pinSetting'">
              <!-- PIN -->
              <PinSetting :form="form" />
            </template>              

            <!-- 팝업:소유자명 불일치 -->
            <Alert :is-open="alert.inconsistencyPop" @close="alert.inconsistencyPop = false" :close="true" class="header-title-size2">
                <template slot="header">소유자명 불일치</template>
                <template slot="body">
                소유자가 일치하지 않습니다.
                <br />차량정보 등록은 실 소유자만 가능합니다.
                </template>
            </Alert>  
            <!-- 팝업:법인명확인필요 -->    
            <Alert :is-open="alert.copeerCheckPop" @close="alert.copeerCheckPop = false" :close="true" class="header-title-size2">      
                <template slot="header">법인명 확인필요</template>
                <template slot="body">
                    법인명이 일치하지 않습니다.
                    <br />자동차등록증상의 법인명을
                    <br />정확하게 입력바랍니다.  ex) (주)차지비
                </template>
            </Alert>                           
          </div>
      </template>
    </BtmLayer>
</template>

<script>
import CarInfoAdd from '@/views/common/CarInfoAdd'
import CardRegist from '@/views/common/CardRegist'
import CarAdd from '@/views/common/CarAdd'
import CardIssue from '@/views/common/CardIssue'
import ProductCheck from '@/views/common/ProductCheck'
import PaymentAdd from '@/views/common/PaymentAdd'
import EtcInfoInput from '@/views/common/EtcInfoInput'
import PinSetting from '@/views/common/PinSetting'
export default {
  components:{
    CarInfoAdd,
    CardRegist,
    CarAdd,
    CardIssue,
    ProductCheck,
    PaymentAdd,
    EtcInfoInput,
    PinSetting,    
  },    
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  },  
  data(){
      return{
        status: 'carRegist-basic',
        form:{
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
        alert: {
          inconsistencyPop: false,
          copeerCheckPop: false
        }        
      }
  },
}
</script>
