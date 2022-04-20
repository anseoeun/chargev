<template>
  <div class="contents">
    <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page">
      <template slot="content">
          <splide-slide>
            <div class="more-wrap">
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
            <div v-if="currentTab === 'point'" class="charge-point-wrap">
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
                                <router-link to="/" class="btn-type2 st2">결제내역 확인</router-link>
                            </div>
                        </li>
                        <li>
                            <button class="card2">
                                <div class="center">
                                    <Icon type="add-plus" />
                                    <p class="txt">상품등록</p>
                                </div>
                            </button>
                        </li>
                    </ul>
              </div>
            </div>
            <div v-if="currentTab === 'card'" class="credit-card-wrap">
                <div class="card-wrap">
                    <ul class="list">
                        <li v-for="(item, index) in cardList" :key="index">
                            <div class="card3">
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
                                <router-link to="/" class="btn-type1 st2">신용카드 삭제</router-link>
                                <router-link to="/" class="btn-type1 st2">결제내역 확인</router-link>                    
                            </div>
                        </li>
                        <li>
                            <button class="card2">
                                <div class="center">
                                    <Icon type="add-plus" />
                                    <p class="txt">신용카드 등록</p>
                                </div>
                            </button>
                        </li>
                    </ul>
              </div>
            </div>
            <div v-if="currentTab === 'payment'" class="simple-payment-wrap">

            </div>
            
          </splide-slide>
      </template>
    </Carousel>

    <!-- 주소 -->
    <PopAddr :visible="btmLayer.PopAddr" @close="btmLayer.PopAddr = false"/>
    <!-- 충전기설치신청 -->
    <PopChargerApply :visible="btmLayer.PopChargerApply" @close="btmLayer.PopChargerApply = false"/>
  </div>
</template>

<script>
import PopAddr from '@/views/PopAddr'
import PopChargerApply from '@/views/PopChargerApply'
export default {
  components:{
    PopAddr,
    PopChargerApply
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
      cardList: [
          {
              src: require('@/assets/images/temp-card.jpg'),
              logo: 'bmw',
              text: ['20년', 'BMW', 'Charging'],
              date: '2021. 07. 01 ~ 2022. 07. 01',
              price: '360,000',
          },
          {
              src: require('@/assets/images/temp-card.jpg'),
              logo: 'chargev',
              text: '모바일충전권',
              date: '2021. 07. 01 ~ 2022. 07. 01',
              price: '100,000',
          }
      ],

      options: {
        perPage: 1,
        perMove: 1,
      },
      currentPage: 0,
      btmLayer:{
        PopAddr: false,
        PopChargerApply: false
      },      
    }
  },
  methods:{

  }
}
</script>
