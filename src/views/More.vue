<template>
  <div class="contents">
    <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page">
      <template slot="content">
          <splide-slide>
            <div class="mypage-wrap">
              <!-- 내정보 -->
              <h2 class="tit-type1">내정보</h2>
              <div class="my-info">
                  <p>이상욱</p>
                  <p>1989.08.24</p>
                  <p>010-9467-4694</p>
              </div>

              <!-- 등급 -->
              <h2 class="tit-type1">등급</h2>
              <div class="grade">GOLD</div>

              <!-- 보안설정 -->
              <h2 class="tit-type1">보안설정</h2>
              <ul class="setting-check-list">
                  <li>
                    <button  @click="checkIcon($event, 'pinChecked')">
                        <Icon type="check" :class="{on: pinChecked}" />
                        <span class="txt">PIN</span>
                    </button>
                  </li>
                  <li>
                    <button  @click="checkIcon($event, 'bodyChecked')">
                        <Icon type="check" :class="{on: bodyChecked}" />
                        <span class="txt">생체인증</span>
                    </button>
                  </li>
              </ul>

              <!-- 권한설정 -->
              <h2 class="tit-type1">권한설정</h2>
              <ul class="setting-check-list">
                  <li>
                    <button  @click="checkIcon($event, 'pushChecked')">
                        <Icon type="check" :class="{on: pushChecked}" />
                        <span class="txt">푸시 알림</span>
                    </button>
                  </li>
                  <li>
                    <button  @click="checkIcon($event, 'eventChecked')">
                        <Icon type="check" :class="{on: eventChecked}" />
                        <span class="txt">프로모션/이벤트 알림</span>
                    </button>
                  </li>
              </ul>

            </div>
          </splide-slide>
          <splide-slide>
            <div class="tab-type1 center">
                <button @click="currentTab = 'point'" :class="{on: currentTab === 'point'}">충전포인트</button>
                <button @click="currentTab = 'card'" :class="{on: currentTab === 'card'}">신용카드</button>
                <button @click="currentTab = 'payment'" :class="{on: currentTab === 'payment'}">간편결제</button>
            </div>
            <div v-if="currentTab === 'point'" class="charge-list-wrap charge-point-wrap">
                <div class="card-wrap">
                    <ul class="list">
                        <li v-for="(item, index) in cargePointList" :key="index">
                            <div class="card2">
                                <div class="bg" :style="`background-image:url(${item.src})`"></div>
                                <Icon v-if="item.logo === 'bmw'" type="logo-bmw" />
                                <Icon v-if="item.logo === 'chargev'" type="chargev4" />
                                <div class="main-txt">
                                    <div v-if="Array.isArray(item.text)" class="space-text">
                                        <span v-for="(txt, i) in item.text" :key="i">{{ txt }}</span>
                                    </div>
                                    <template v-else>{{ item.text }}</template>
                                </div>
                                <div class="date">{{ item.date }}</div>
                                <div class="price">{{ item.price }}원</div>
                            </div>
                            <div class="btn-box">
                                <button class="btn-type2 st2" @click="btmLayer.PopPaymentList = true">결제내역 확인</button>
                            </div>
                        </li>
                        <li>
                            <button class="card2" @click="btmLayer.PopCouponRegist = true">
                                <div class="center">
                                    <Icon type="add-plus" />
                                    <p class="txt">상품등록</p>
                                </div>
                            </button>
                        </li>
                    </ul>
              </div>
            </div>
            <div v-if="currentTab === 'card'" class="charge-list-wrap credit-card-wrap">
                <div class="card-wrap">
                    <ul class="list">
                        <li v-for="(item, index) in cardList" :key="index">
                            <div class="card3">
                                <div class="bg" :style="`background-image:url(${item.src})`"></div>
                                <div class="card-info">
                                    <div class="card-date">{{ item.date }}</div>
                                    <div class="card-num">
                                        <button  @click="checkIcon($event, 'cardChecked', index)">
                                            <Icon type="check" :class="{on: cardChecked[index]}" />
                                        </button>
                                        <span>{{ item.company }}</span>
                                        <span>{{ item.num[0] }}</span>
                                        <span>{{ item.num[1] }}</span>
                                        <span>{{ item.num[2] }}</span>
                                        <span>{{ item.num[3] }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="btn-box">
                                <button class="btn-type1 st2">신용카드 삭제</button>
                                <button class="btn-type1 st2" @click="btmLayer.PopPaymentList = true">결제내역 확인</button>
                            </div>
                        </li>
                        <li>
                            <button class="card2" @click="btmLayer.PopPaymentAdd = true">
                                <div class="center">
                                    <Icon type="add-plus" />
                                    <p class="txt">신용카드 등록</p>
                                </div>
                            </button>
                        </li>
                    </ul>
              </div>
            </div>
            <div v-if="currentTab === 'payment'" class="charge-list-wrap simple-payment-wrap">
                <div class="card-wrap">
                    <ul class="list">
                        <li v-for="(item, index) in paymentCardList" :key="index">
                            <div class="card4">
                                <div class="center">
                                    <Icon v-if="item.logo === 'payco'" type="payco" />
                                    <Icon v-if="item.logo === 'chargev'" type="chargev4" />
                                    <p class="txt">등록하기</p>
                                </div>
                            </div>
                        </li>
                    </ul>
              </div>
            </div>
          </splide-slide>
      </template>
    </Carousel>

    <!-- 모바일 충전권 / 쿠폰 등록 -->
    <PopCouponRegist :visible="btmLayer.PopCouponRegist" @close="btmLayer.PopCouponRegist = false"/>
    <!-- 결제수단별 이용기록 -->
    <PopPaymentList :visible="btmLayer.PopPaymentList" @close="btmLayer.PopPaymentList = false"/>
    <!-- 결제정보 추가 -->
    <PopPaymentAdd :visible="btmLayer.PopPaymentAdd" @close="btmLayer.PopPaymentAdd = false"/>
  </div>
</template>

<script>
import PopPaymentList from '@/views/PopPaymentList'
import PopCouponRegist from '@/views/PopCouponRegist'
import PopPaymentAdd from '@/views/PopPaymentAdd'
export default {
  components:{
    PopPaymentList,
    PopCouponRegist,
    PopPaymentAdd
  },
  data(){
    return{
      pinChecked: false,
      bodyChecked: false,
      pushChecked: false,
      eventChecked: false,

      //
      currentTab: 'point',
      cargePointList: [
          {
              src: require('@/assets/images/temp-place.jpg'),
              logo: 'bmw',
              text: ['20년', 'BMW', 'Charging'],
              date: '2021. 07. 01 ~ 2022. 07. 01',
              price: '360,000',
          },
          {
              src: require('@/assets/images/temp-place.jpg'),
              logo: 'chargev',
              text: '모바일충전권',
              date: '2021. 07. 01 ~ 2022. 07. 01',
              price: '100,000',
          },
          {
              logo: 'chargev',
              text: '이벤트 쿠폰',
              date: '2021. 07. 01 ~ 2022. 07. 01',
              price: '100,000',
          },
      ],
      cardChecked: [],
      cardList: [
          {
              src: require('@/assets/images/temp-card.jpg'),
              date: '02/24',
              company: '삼성',
              num: ['5361', '48**', '****', '4151'],
          },
          {
              src: require('@/assets/images/temp-card.jpg'),
              date: '02/24',
              company: '삼성',
              num: ['5361', '48**', '****', '4151'],
          },
      ],
      paymentCardList: [
          {
              logo: 'payco'
          },
          {
              logo: 'chargev'
          }
      ],

      options: {
        perPage: 1,
        perMove: 1,
      },
      currentPage: 0,
      btmLayer:{
        PopPaymentList: false,
        PopCouponRegist: false,
        PopPaymentAdd: false,
      },      
    }
  },
  methods:{

  }
}
</script>
