<template>
  <div class="contents">
    <div class="login-wrap">
      <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page parallel-slider">
        <template slot="content">
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <div class="min-fix">
              <!-- 본인인증 -->
              <SelfAuth :form="form" @agencyOpen="btmLayer.agency = true" @complete="currentPage = 1" />
            </div>
          </splide-slide>
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <!-- 결제정보 추가 -->
            <div class="min-fix">
              <PaymentAdd
                completeType="list"
                @confirm="paymentAddConfirm"
                @status="(val)=>{paymentIniputStatus = val}"                
               />
            </div>

            <div v-if="paymentIniputStatus == 'camera'" class="info-text">
                테두리에 신용카드를 맞춰주시면<br />
                자동으로 신용카드정보가 입력됩니다.
            </div>
            <div v-else-if="paymentIniputStatus == 'form'" class="info-text">
                신욕카드번호 및 유효기간, 비밀번호 앞2자리를<br />입력해주세요.
            </div>
          </splide-slide>
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <!-- 차량 추가 -->
            <div class="min-fix">
              <CarInfoAdd
                :corper="true"
                completeType="list"
                @confirm="carInfoAddConfirm"
                @status="(val)=>{carIniputStatus = val}"
               />
            </div>
             <div v-if="carIniputStatus === 'basic'" class="info-text">
              차량번호를 통해 차량정보를 추가합니다.
            </div>
             <div v-else-if="carIniputStatus === 'more'" class="info-text">
              정보 확인 후 등록을 진행해주세요.<br />
              멤버십카드가 없을 경우 모바일 카드번호가 부여됩니다.
            </div>
             <div v-else class="info-text">
              차량번호를 통해 차량정보를 추가합니다.
            </div>
          </splide-slide>
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <div class="min-fix">
              <div class="card-wrap">
                <h2 class="tit-type1 c-white">상품 확인</h2>
                <Carousel class="slide-list" :content="true" :options="cardSliderOpt">
                      <template slot="content">
                          <splide-slide v-for="(item, index) in cargePointList" :key="index">
                              <div class="card2">
                                  <div class="bg" :style="`background-image:url(${item.src})`"></div>
                                  <Icon v-if="item.company === 'bmw'" type="logo-bmw" />
                                  <Icon v-if="item.company === 'chargev'" type="chargev4" />
                                  <div class="main-txt">
                                      <div v-if="Array.isArray(item.text)" class="space-text">
                                          <span v-for="(txt, i) in item.text" :key="i">{{ txt }}</span>
                                      </div>
                                      <template v-else>{{ item.text }}</template>
                                  </div>
                                  <div class="date">{{ item.date }}</div>
                                  <div class="price">{{ item.price }}원</div>
                              </div>
                          </splide-slide>
                          <splide-slide>
                              <button class="card2" @click="btmLayer.PopCouponRegist = true">
                                  <div class="center">
                                      <Icon type="add-plus" />
                                      <p class="txt">충전포인트 추가</p>
                                  </div>
                              </button>
                          </splide-slide>
                      </template>
                  </Carousel>
                <div class="btn-box">
                  <button class="btn-type1 st2" @click="currentPage = 4">확인</button>
                </div>
              </div>
            </div>
            <div class="info-text">
              차량에 부여된 상품을 확인합니다.
            </div>
          </splide-slide>
          
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <div class="min-fix">
              <!-- pin설정 -->
              <PinSetting :form="form" @pinset="pinIniputStatus = 'completion'" />
              </div>
              <div v-if="pinIniputStatus != 'completion'" class="info-text">
                PIN코드를 입력해주세요.
              </div>
              <div v-else class="info-text">
                PIN코드를 확인해주세요.
              </div>
          </splide-slide>
        </template>
      </Carousel>
    </div>

    <!-- 팝업:통신사 선택 -->
    <AgencySelect :visible="btmLayer.agency" @close="agencySelect"/>

  </div>
</template>

<script>
import SelfAuth from '@/views/common/SelfAuth'
import PinSetting from '@/views/common/PinSetting'
import AgencySelect from '@/views/common/AgencySelect'
import PaymentAdd from '@/views/common/PaymentAdd'
import CarInfoAdd from '@/views/common/CarInfoAdd'
export default {
  components:{
    SelfAuth,
    PinSetting,
    AgencySelect,
    PaymentAdd,
    CarInfoAdd
  },
  data(){
    return{
      paymentIniputStatus: 'camera',
      carIniputStatus: 'basic',
      pinIniputStatus: '',
      form:{
        carnum: '',
        memcardnum: '',
        user: '',
        id: '',
        pw: '',
        agency: {},
        tel: '',
        auth: '',
        pin: '',
        pin2: '',
      },
      options: {
        perPage: 1,
        perMove: 1,
        arrows: false,
      },    
      currentPage: 0,  
      paging: new Array(6),

      cardSliderOpt: {
        autoWidth: true,
        perMove:1,
        pagination:false,
      },   
    // 상품확인
      cargePointList: [
          {
              src: require('@/assets/images/temp-place.jpg'),
              company: 'bmw',
              text: ['20년', 'BMW', 'Charging'],
              date: '2021. 07. 01 ~ 2022. 07. 01',
              price: '360,000',
          },
          {
              src: require('@/assets/images/temp-place.jpg'),
              company: 'chargev',
              text: '모바일충전권',
              date: '2021. 07. 01 ~ 2022. 07. 01',
              price: '100,000',
          },
          {
              company: 'chargev',
              text: '이벤트 쿠폰',
              date: '2021. 07. 01 ~ 2022. 07. 01',
              price: '100,000',
          },
      ],    

      btmLayer:{
        agency: false,
      },      
    }
  },
  methods: {
    agencySelect(val){
      val ? this.form.agency = val : ''
      this.btmLayer.agency = false
    },
    paymentAddConfirm(form){
      this.currentPage = 2;
      this.form = Object.assign({}, this.form, form)
    },
    carInfoAddConfirm(form){
      this.currentPage = 3;
      this.form = Object.assign({}, this.form, form)
    },
  }
}
</script>
