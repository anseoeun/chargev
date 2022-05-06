<template>
  <div class="contents">
    <div class="login-wrap">
      <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page parallel-slider">
        <template slot="content">
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <!-- 로그인 -->
            <div class="min-fix">
              <div class="form-box-wrap">
                <h2 class="tit-type1 c-white">로그인</h2>
                <div class="form-box">
                  <div class="row">
                    <div class="input">
                      <Input type="text" v-model="form.id" placeholder="ID(Email)" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="input">
                      <Input type="password" v-model="form.pw" placeholder="비밀번호" />
                    </div>
                  </div>
                </div>
                <div class="btn-box">
                  <button class="btn-type1 st2" @click="currentPage = 1">로그인</button>
                </div>
              </div>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <!-- 결제정보 확인 -->
            <div class="min-fix">
              <div class="card-wrap">
                <h2 class="tit-type1 c-white">결제정보 확인</h2>
                <Carousel class="slide-list" :content="true" :options="cardSliderOpt">
                    <template slot="content">
                        <splide-slide v-for="(item, index) in cardList" :key="index">
                            <div class="card3" :class="{on: item.selected}">
                                <div class="card-info">
                                    <div class="card-name">{{ item.name }}</div>
                                    <div class="card-num">
                                        <span>{{ item.company }}</span>
                                        <span>{{ item.num[0] }}</span>
                                        <span>{{ item.num[1] }}</span>
                                        <span>{{ item.num[2] }}</span>
                                        <span>{{ item.num[3] }}</span>
                                    </div>
                                    <div class="card-date">{{ item.date }}</div>
                                </div>
                                <div class="btn-box-inner">
                                    <button class="btn">카드삭제 <Icon type="delete" /></button>
                                    <div class="btn btn-order">
                                        <button class="btn-left"><Icon type="arr-left" /></button>
                                        결제순서변경
                                        <button class="btn-right"><Icon type="arr-right" /></button>
                                    </div>
                                </div>
                            </div>
                        </splide-slide>
                        <splide-slide>
                            <button class="card3" @click="btmLayer.PopPaymentAdd = true">
                                <div class="center">
                                    <Icon type="add-plus" />
                                    <p class="txt">카드추가</p>
                                </div>
                            </button>
                        </splide-slide>
                    </template>
                </Carousel>
                <div class="btn-box">
                  <button class="btn-type1 st2" @click="currentPage = 2">확인</button>
                </div>
              </div>
            </div>
            <div class="info-text">
              결제 정보를 확인해주세요.
            </div>
          </splide-slide>
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <!-- 차량정보 확인 -->
            <div class="min-fix">
              <div class="card-wrap">
                <h2 class="tit-type1 c-white">차량확인</h2>
                  <Carousel class="slide-list" :content="true" :options="carSliderOpt">
                      <template slot="content">
                          <splide-slide v-for="(item, index) in carList" :key="index">
                              <div class="card5">
                                  <Icon v-if="item.company === 'bmw'" type="logo-bmw2" class="company-logo" />
                                  <Icon v-if="item.company === 'benz'" type="logo-benz" :src="require('@/assets/images/logo/logo-me.png')" class="company-logo" />
                                  <div class="car-info">
                                      <p class="space-txt"><span>{{ item.carInfo[0] }}</span><span>{{ item.carInfo[1] }}</span></p>
                                      <p>{{ item.carInfo[2] }}</p>
                                  </div>
                                  <div class="number">{{ item.num }}</div>
                              </div>
                          </splide-slide>
                          <splide-slide>
                              <button class="card5" @click="btmLayer.PopCarInfoAdd = true">
                                  <div class="center">
                                      <Icon type="add-plus" />
                                      <p class="txt">차량추가</p>
                                  </div>
                              </button>
                          </splide-slide>
                      </template>
                  </Carousel>
                <div class="btn-box">
                  <button class="btn-type1 st2" @click="currentPage = 3">확인</button>
                </div>
              </div>
            </div>
             <div class="info-text">
              차량정보를 확인 해주세요.
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
                    <button class="btn-type1 st2" @click="currentPage = 5">확인</button>
                  </div>                  
              </div>
            </div>
            <div class="info-text">
              상품정보를 확인 해주세요.
            </div>
          </splide-slide>
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <div class="min-fix">
               <!-- 본인인증 -->
              <SelfAuth :form="form" @agencyOpen="btmLayer.agency = true" @complete="currentPage = 5" />
            </div>
            <div class="info-text">
              신규앱 최초 1회 로그인 시<br />
              인증키 생성을 위한 정보확인 및<br />
              전화번호 인증을 진행합니다.
            </div>
          </splide-slide>
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <div class="min-fix">
                <PinSetting :form="form" @pinSetting="pinSet = true" />
            </div>
            <div v-if="!pinSet" class="info-text">
              보안을 위한 PIN을 설정합니다.
            </div>
            <div v-else class="info-text">
              확인을 위해 한 번 더 입력해 주세요.
            </div>
          </splide-slide>
        </template>
      </Carousel>
    </div>
    
    <!-- 결제정보 추가 -->
    <PopPaymentAdd :visible="btmLayer.PopPaymentAdd" @close="btmLayer.PopPaymentAdd = false"/>
    <!-- 차량정보 -->
    <PopCarInfoAdd :visible="btmLayer.PopCarInfoAdd" @close="btmLayer.PopCarInfoAdd = false"/>
    <!-- 모바일 충전권 / 쿠폰 등록 -->
    <PopCouponRegist :visible="btmLayer.PopCouponRegist" @close="btmLayer.PopCouponRegist = false"/>    
    <!-- 팝업:통신사 선택 -->
    <AgencySelect :visible="btmLayer.agency" @close="agencySelect"/>

  </div>
</template>

<script>
import SelfAuth from '@/views/common/SelfAuth'
import PinSetting from '@/views/common/PinSetting'
import PopPaymentAdd from '@/views/PopPaymentAdd'
import PopCarInfoAdd from '@/views/PopCarInfoAdd'
import PopCouponRegist from '@/views/PopCouponRegist'
import AgencySelect from '@/views/common/AgencySelect'
export default {
  components:{
    SelfAuth,
    PinSetting,
    PopPaymentAdd,
    PopCarInfoAdd,
    PopCouponRegist,
    AgencySelect
  },
  data(){
    return{
      form:{
        id: '',
        pw: '',
        agency: {},
        tel: '',
        auth: '',
        pin: '',
        pin2: '',
      },
      pinSet: false,

      cardSliderOpt: {
        autoWidth: true,
        perMove:1,
        pagination:false,
      },   
      cardList: [
          {
              name: '결제카드 1',
              date: '02/24',
              company: '삼성',
              num: ['5361', '48**', '****', '4151'],
              selected: true,
          },
          {
              name: '결제카드 2',
              date: '02/24',
              company: '삼성',
              num: ['5361', '48**', '****', '4151'],
              selected: true,
          },
      ],      

      // 차량확인
      carSliderOpt: {
        autoWidth: true,
        perMove:1,
        pagination:false,
      },      
      carList: [
          {
              company: 'bmw',
              carInfo: ['BMW', '530e', '02보6596'],
              num: '9999-9999-9999-9999',
          },
          {
              company: 'benz',
              carInfo: ['BMW', '530e', '02보6596'],
              num: '1010-0101-1234-1234',
          },
      ],

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

      options: {
        perPage: 1,
        perMove: 1,
        arrows: false,
      },
      currentPage: 0,
      paging: new Array(6),

      btmLayer:{
        agency: false,
        PopPaymentAdd: false,
        PopCarInfoAdd: false,
        PopCouponRegist: false,
      }, 
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
