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
            <div class="charge-list-wrap">
                <div class="card-wrap">
                    <ul v-if="currentTab === 'point'" class="list">
                        <li v-for="(item, index) in cargePointList" :key="index">
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
                    <ul v-if="currentTab === 'card'" class="list">
                        <li v-for="(item, index) in cardList" :key="index">
                            <div class="card3" :class="{on: item.selected}">
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
                            <button class="card3" @click="btmLayer.PopPaymentAdd = true">
                                <div class="center">
                                    <Icon type="add-plus" />
                                    <p class="txt">신용카드 등록</p>
                                </div>
                            </button>
                        </li>
                    </ul>
                    <ul v-if="currentTab === 'payment'" class="list">
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
          <splide-slide>
            <div class="car-manage-wrap">
                <h2 class="tit-type1">차량관리</h2>
                <div class="card-wrap">
                <ul class="list">
                    <li>
                        <button class="card5" @click="btmLayer.PopCarInfoAdd = true">
                            <div class="center">
                                <Icon type="add-plus" />
                                <p class="txt">차량추가</p>
                            </div>
                        </button>
                    </li>                        
                    <li v-for="(item, index) in carList" :key="index">
                        <div class="card5" :class="{on: item.selected}">
                            <Icon v-if="item.company === 'bmw'" type="logo-bmw2" class="company-logo" />
                            <Icon v-if="item.company === 'chargev'" type="chargev4" class="company-logo" />
                            <div class="car-info">
                                <p class="space-txt"><span>{{ item.carInfo[0] }}</span><span>{{ item.carInfo[1] }}</span></p>
                                <p>{{ item.carInfo[2] }}</p>
                            </div>
                            <div class="key">{{ item.key }}</div>
                            <div class="number">{{ item.num }}</div>
                        </div>
                        <div class="btn-box">
                            <button v-if="item.share" class="btn-type1 st2">차량공유 해제</button>
                            <button class="btn-type1 st2" :class="{full: !item.share}" @click="btmLayer.PopPaymentList = true">결제내역 확인</button>
                            <button class="btn-type1 st2 full" @click="$set(item, 'selected', !item.selected)">충전차량 선택<Icon v-if="item.selected" type="check" class="on" /></button>
                        </div>                                
                    </li>
                </ul>                
                </div>
            </div>
          </splide-slide>
          <splide-slide>
              <div class="qna-wrap">
                  <h2 class="tit-type1">문의하기</h2>
                  <!-- 차지비 서비스 -->
                  <h3 class="tit-type2">차지비 서비스</h3>
                  <ul class="qna-list">
                      <li v-for="(item, index) in qnaServiceList" :key="index">
                          <button @click="popQna('service'+index);">{{ item }}</button>
                      </li>
                  </ul>
                  <!-- 모바일카드/멤버십카드 -->
                  <h3 class="tit-type2">모바일카드/멤버십카드</h3>
                  <ul class="qna-list">
                      <li v-for="(item, index) in qnaCardList" :key="index">
                          <button @click="popQna('card'+index);">{{ item }}</button>
                      </li>
                  </ul>
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
    <!-- 차량정보 -->
    <PopCarInfoAdd :visible="btmLayer.PopCarInfoAdd" @close="btmLayer.PopCarInfoAdd = false"/>
    <!-- 문의내역리스트 -->
    <PopQnaList 
     :visible="btmLayer.PopQnaList"
     :gbn="qnaGbn"
     @close="btmLayer.PopQnaList = false"/>
    <!-- 충전기 고장신고 -->
    <PopBreakdownReport :visible="btmLayer.PopBreakdownReport" @close="btmLayer.PopBreakdownReport = false"/>     
    <!-- 환불항목 -->
    <PopRefund :visible="btmLayer.PopRefund" @close="btmLayer.PopRefund = false" @detailUsingHistory="aaa"/>
    <!-- 상세 결제내역 -->
    <PopPaymentDetail :visible="btmLayer.popPaymentDetail" @close="btmLayer.popPaymentDetail = false"/>

  </div>
</template>

<script>
import PopPaymentList from '@/views/PopPaymentList'
import PopCouponRegist from '@/views/PopCouponRegist'
import PopPaymentAdd from '@/views/PopPaymentAdd'
import PopCarInfoAdd from '@/views/PopCarInfoAdd'
import PopQnaList from '@/views/PopQnaList'
import PopBreakdownReport from '@/views/PopBreakdownReport'
import PopRefund from '@/views/PopRefund'
import PopPaymentDetail from '@/views/PopPaymentDetail'
export default {
  components:{
    PopPaymentList,
    PopCouponRegist,
    PopPaymentAdd,
    PopCarInfoAdd,
    PopQnaList,
    PopBreakdownReport,
    PopRefund,
    PopPaymentDetail
  },
  data(){
    return{
     // 내정보
      pinChecked: false,
      bodyChecked: false,
      pushChecked: false,
      eventChecked: false,

      // 충전포인트
      currentTab: 'point',
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
      // 신용카드
      cardChecked: [],
      cardList: [
          {
              src: require('@/assets/images/temp-card.jpg'),
              date: '02/24',
              company: '삼성',
              num: ['5361', '48**', '****', '4151'],
              selected: true,
          },
          {
              src: require('@/assets/images/temp-card.jpg'),
              date: '02/24',
              company: '삼성',
              num: ['5361', '48**', '****', '4151'],
          },
      ],
      // 간편결제
      paymentCardList: [
          {
              logo: 'payco'
          },
          {
              logo: 'chargev'
          }
      ],
      // 차량관리
      carList: [
          {
              company: 'bmw',
              key: 'A62S-ZB9Q',
              carInfo: ['BMW', '530e', '02보6596'],
              num: '1010-0101-1234-1234',
              selected: true,
          },
          {
              company: 'chargev',
              key: '김김김에게 공유중',
              carInfo: ['BMW', '530e', '02보6596'],
              num: '1010-0101-1234-1234',
              share: true,
              selected: false,
          },
      ],
      //문의내역
      qnaServiceList: [
          '충전기 사용방법',
          '충전기 설치신청',
          '충전기 종류 안내',
          'PHEV차량 충전안내',
          '충전기 고장신고',
          '환불문의',
          '충전요금 안내',
          '로밍서비스 안내',
      ],
      qnaCardList: [
          '모바일카드 이용',
          '멤버십카드 발급',
          '배송현황 확인',
          '멤버십카드 재발급',
          '멤버십카드 인증불가',
      ],
      qnaGbn: '',

      options: {
        perPage: 1,
        perMove: 1,
      },
      currentPage: 0,
      btmLayer:{
        PopPaymentList: false,
        PopCouponRegist: false,
        PopPaymentAdd: false,
        PopCarInfoAdd: false,
        PopQnaList: false,
        PopBreakdownReport: false,
        PopRefund: false,
        PopPaymentDetail: false,
      },      
    }
  },
  methods:{
      aaa(){
          console.log('s')
          this.btmLayer.popPaymentDetail = true
      },
    popQna(index){
        switch (index) {
         case 'service0':
            this.btmLayer.PopQnaList = true;
            this.qnaGbn = 'cargerUseMethod'
            break;
        case 'service1':
            this.btmLayer.PopQnaList = true;
            this.qnaGbn = 'cargerInstallApply'
            break;
        case 'service2':
            this.btmLayer.PopQnaList = true;
            this.qnaGbn = 'cargerSortGuide'
            break;
        case 'service3':
            this.btmLayer.PopQnaList = true;
            this.qnaGbn = 'phevGuide'
            break;
        case 'service4':
            this.btmLayer.PopBreakdownReport = true;
            break;
        case 'service5':
            this.btmLayer.PopRefund = true;
            break;
        case 'service7':
            this.btmLayer.PopQnaList = true;
            this.qnaGbn = 'roamingGuide'
            break;
        default:
            break;
      }
    }
  }
}
</script>
