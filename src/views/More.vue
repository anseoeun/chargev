<template>
  <div class="contents">
    <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page">
      <template slot="content">
          <splide-slide>
            <div class="mypage-wrap">
              <!-- 내정보 -->
              <h2 class="tit-type1">내정보</h2>
              <div class="my-info-box">
                  <div class="grid-list">
                      <div class="row">
                          <div class="tit">가입자</div>
                          <div class="text">이상욱</div>
                      </div>
                      <div class="row">
                          <div class="tit">생년월일</div>
                          <div class="text">1989.08.24</div>
                      </div>
                      <div class="row">
                          <div class="tit">전화번호</div>
                          <div class="text">010-9467-3693</div>
                          <div class="text right">
                              <button class="btn">다시인증</button>
                          </div>
                      </div>
                      <div class="row">
                          <div class="tit">회원등급</div>
                          <div class="text">GOLD</div>
                      </div>
                  </div>
              </div>

              <!-- 선택정보 -->
              <h2 class="tit-type1">선택정보</h2>
              <div class="my-info-box">
                  <div class="grid-list">
                      <div class="row">
                          <div class="tit">주소</div>
                          <div class="text">서울시 송파구 올림픽로 300</div>
                      </div>
                      <div class="row">
                          <div class="tit">상세주소</div>
                          <div class="text">30층 3045호 </div>
                          <div class="text right">
                              <button class="btn" @click="btmLayer.PopAddr = true">변경하기</button>
                          </div>
                      </div>
                  </div>
              </div>

              <!-- 보안설정 -->
              <h2 class="tit-type1">보안설정</h2>
              <div class="my-info-box">
                  <div class="grid-list">
                      <div class="row">
                          <div class="tit">PIN</div>
                          <div class="text right">
                              <button class="btn" @click="btmLayer.PopPin = true">재설정</button>
                          </div>
                      </div>
                      <div class="row">
                          <div class="tit">생체인증</div>
                          <div class="text">사용중 </div>
                          <div class="text right">
                              <button class="btn">사용안하기</button>
                              <button class="btn">재설정</button>
                          </div>
                      </div>
                  </div>
              </div>

              <!-- 권한설정 -->
              <h2 class="tit-type1">권한설정</h2>
              <div class="my-info-box">
                  <div class="grid-list">
                      <div class="row">
                          <div class="tit">푸시알림</div>
                          <div class="text">허용</div>
                          <div class="text right">
                              <button class="btn">안받기</button>
                          </div>
                      </div>
                      <div class="row">
                          <div class="tit">이벤트알림</div>
                          <div class="text">허용</div>
                          <div class="text right">
                              <button class="btn">안받기</button>
                          </div>
                      </div>
                  </div>
              </div>

            </div>
          </splide-slide>
          <splide-slide class="no-scroll">
            <UpContent class="charge-list-wrap"  :upHide="currentTab == 'payment' ? false : true">
                <template slot="hide">
                    <div class="tab-type1 center">
                        <button @click="currentTab = 'point';cardSliderOpt.start = 0" :class="{on: currentTab === 'point'}">충전포인트</button>
                        <button @click="currentTab = 'card';cardSliderOpt.start = 0" :class="{on: currentTab === 'card'}">신용카드</button>
                        <button @click="currentTab = 'payment'" :class="{on: currentTab === 'payment'}">간편결제</button>
                    </div>
                    <div class="card-wrap">
                        <Carousel v-if="currentTab === 'point'" class="slide-list" :content="true" :options="cardSliderOpt" :key="currentTab">
                            <template slot="content">
                                <splide-slide v-for="(item, index) in cargePointList" :key="index">
                                    <div class="card2" :class="{on: item.selected}">
                                        <!-- <div class="bg" :style="`background-image:url(${item.src})`"></div> -->
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
                        <Carousel v-if="currentTab === 'card'" class="slide-list" :content="true" :options="cardSliderOpt" :key="currentTab">
                            <template slot="content">
                                <splide-slide v-for="(item, index) in cardList" :key="index">
                                    <div class="card3" :class="{on: item.selected}">
                                        <div class="card-info">
                                            <div class="card-name">{{ item.company }}카드</div>
                                            <div class="card-num">
                                                <span>{{ item.num[0] }}</span>
                                                <span>{{ item.num[1] }}</span>
                                                <span>{{ item.num[2] }}</span>
                                                <span>{{ item.num[3] }}</span>
                                            </div>
                                        </div>
                                        <div class="btn-box-inner">
                                            <div class="btn btn-order">
                                                <button class="btn-left"><Icon type="arr-left" /></button>
                                                결제순서변경
                                                <button class="btn-right"><Icon type="arr-right" /></button>
                                            </div>
                                            <button class="btn">카드삭제 <Icon type="delete" /></button>
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
                        <ul v-if="currentTab === 'payment'" class="list">
                            <li v-for="(item, index) in paymentCardList" :key="index">
                                <button class="card3" @click="btmLayer.PopBlumembersAdd = true">
                                    <div class="center">
                                        <Icon type="add-plus" />
                                        <p class="txt">블루멤버스 계정연동</p>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </template>
                <template slot="tit">결제수단별 이용기록</template>
                <template slot="up">
                    <UsingHistory
                        @detailUsingHistory="$set(btmLayer, 'popPaymentDetail', true);"
                    />
                </template>
            </UpContent>
          </splide-slide>
          <splide-slide class="no-scroll">
              <UpContent class="charge-list-wrap">
                  <template slot="hide">
                    <div class="car-manage-wrap">
                        <h2 class="tit-type1">충전차량</h2>
                        <div class="card-wrap">
                            <Carousel class="slide-list" :content="true" :options="carSliderOpt">
                                <template slot="content">
                                    <splide-slide v-for="(item, index) in carList" :key="index">
                                        <div class="card5" :class="{on: item.selected}">
                                            <div class="car-info-wrap">
                                                <Icon v-if="item.company === 'bmw'" type="logo-bmw2" class="company-logo" />
                                                <Icon v-if="item.company === 'benz'" type="logo-benz" :src="require('@/assets/images/logo/logo-me.png')" class="company-logo" />
                                                <div class="car-info">
                                                    <p class="space-txt"><span>{{ item.carInfo[0] }}</span><span>{{ item.carInfo[1] }}</span></p>
                                                    <p>{{ item.carInfo[2] }}</p>
                                                </div>
                                            </div>
                                            <div class="number">
                                                <span>{{ item.num[0] }}</span> -
                                                <span>{{ item.num[1] }}</span> -
                                                <span>{{ item.num[2] }}</span> -
                                                <span>{{ item.num[3] }}</span>
                                            </div>
                                            <div class="btn-box-inner">
                                                <button class="btn-type1 st2" @click="$set(item, 'selected', !item.selected)">
                                                    <template v-if="item.selected">충전차량<Icon type="check" class="on" /></template>
                                                    <template v-else>충전차량으로 설정</template>
                                                </button>
                                            </div> 
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
                        </div>
                    </div>
                  </template>
                  <template slot="up">
                    <!-- 차량별 이용 기록 -->
                    <h2 class="tit-type1">차량별 이용 기록</h2>
                    <UsingHistory
                        @detailUsingHistory="$set(btmLayer, 'popPaymentDetail', true);"
                    />
                </template>
            </UpContent>
          </splide-slide>
          <splide-slide class="no-scroll">
              <button class="btn-type1 st2" @click="btmLayer.PopCaseAdd = true">유형선택 추가 팝업</button>
          </splide-slide>
          <splide-slide>
            <div class="qna-wrap">
                <h2 class="tit-type1">문의하기</h2>
                <!-- 차지비 서비스 -->
                <h3 class="tit-type2">차지비 서비스</h3>
                <ul class="qna-menu-list">
                    <li v-for="(item, index) in qnaServiceList" :key="index">
                        <button @click="popQna('service'+(index + 1));">{{ item }}</button>
                    </li>
                </ul>
                <!-- 모바일카드/멤버십카드 -->
                <h3 class="tit-type2">모바일카드/멤버십카드</h3>
                <ul class="qna-menu-list">
                    <li v-for="(item, index) in qnaCardList" :key="index">
                        <button @click="popQna('card'+(index + 1));">{{ item }}</button>
                    </li>
                </ul>
                <!-- 완성차 프로모션 -->
                <h3 class="tit-type2">완성차 프로모션</h3>
                <ul class="qna-menu-list">
                    <li v-for="(item, index) in carPromoList" :key="index">
                        <button @click="popQna('carpromo'+(index + 1));">{{ item }}</button>
                    </li>
                </ul>
                <!-- 기타 -->
                <h3 class="tit-type2">기타</h3>
                <ul class="qna-menu-list">
                    <li v-for="(item, index) in etcList" :key="index">
                        <button @click="popQna('etc'+(index + 1));">{{ item }}</button>
                    </li>
                </ul>
            </div>
          </splide-slide>
          <splide-slide>
           <div class="qna-wrap">
               <h2 class="tit-type1">문의내역</h2>
               <ul v-if="qnaList.length > 0" class="link-box-list">
                   <li v-for="(item, index) in qnaList" :key="index">
                       <button class="box" @click="btmLayer.PopQnaDetail = true">
                           <Icon type="arr-right" />
                           <p class="info">
                               <span class="date">{{ item.date }}</span>
                               <span class="status" :class="{end: item.status == 'end'}">
                                   {{ item.status == 'ing' ? '답변대기중' : '답변완료' }}
                               </span>
                           </p>
                           <p class="sort">{{ item.sort }}</p>
                       </button>
                   </li>
               </ul>
               <p v-else class="no-result">문의 내역이 없습니다.</p>
           </div>
          </splide-slide>
          <splide-slide>
            <div class="rule-wrap">
               <h2 class="tit-type1">약관 및 정책</h2>
               <ul class="link-box-list">
                   <li v-for="(item, index) in ruleList" :key="index">
                       <button class="box" @click="popRule('rule'+(index + 1));">
                           <Icon type="arr-right" />
                           <p class="tit">{{ item }}</p>
                       </button>
                   </li>
               </ul>
               <h2 class="tit-type1">앱 정보</h2>
               <ul class="link-box-list">
                   <li>
                       <button class="box">
                           <Icon type="arr-right" />
                           <p class="tit">앱 정보</p>
                       </button>
                   </li>
               </ul>               
            </div>
          </splide-slide>
      </template>
    </Carousel>


    <!-- 주소 -->
    <PopAddr :visible="btmLayer.PopAddr" @close="btmLayer.PopAddr = false"/>
    <!-- 모바일 충전권 / 쿠폰 등록 -->
    <PopPin :visible="btmLayer.PopPin" @close="btmLayer.PopPin = false"/>
    <!-- 모바일 충전권 / 쿠폰 등록 -->
    <PopCouponRegist :visible="btmLayer.PopCouponRegist" @close="btmLayer.PopCouponRegist = false"/>
    <!-- 결제정보 추가 -->
    <PopPaymentAdd :visible="btmLayer.PopPaymentAdd" @close="btmLayer.PopPaymentAdd = false"/>
    <!-- 블루멤버스 계정연동 -->
    <PopBlumembersAdd :visible="btmLayer.PopBlumembersAdd" @close="btmLayer.PopBlumembersAdd = false"/>
    <!-- 차량정보 -->
    <PopCarInfoAdd :visible="btmLayer.PopCarInfoAdd" @close="btmLayer.PopCarInfoAdd = false"/>
    <!-- 유형선택 -->
    <PopCaseAdd :visible="btmLayer.PopCaseAdd" @close="btmLayer.PopCaseAdd = false"/>
    <!-- 문의내역리스트 -->
    <PopQnaList :visible="btmLayer.PopQnaList" :gbn.sync="qnaGbn" @close="btmLayer.PopQnaList = false"
        @chargerBreakdownApply="btmLayer.PopBreakdownReport = true;"
        @creditCardInfoChange="btmLayer.PopQnaList = false;currentPage = 1"
        @qnaRegistCompleted="alertPopColpleted = true"
    />
    <!-- 충전기 고장신고 -->
    <PopBreakdownReport :visible="btmLayer.PopBreakdownReport" @close="btmLayer.PopBreakdownReport = false"
        @qnaRegistCompleted="alertPopColpleted = true"
        @inquiryRegistCompleted="alertPopColpleted = true"
    />     
    <!-- 환불항목 -->
    <PopRefund :visible="btmLayer.PopRefund" @close="btmLayer.PopRefund = false" 
        @detailUsingHistory="btmLayer.PopPaymentDetail = true"
        @qnaRegistCompleted="alertPopColpleted = true"
     />
    <!-- 상세 결제내역 -->
    <PopPaymentDetail :visible="btmLayer.popPaymentDetail" @close="btmLayer.popPaymentDetail = false"/>
    <!-- 완성차 멤버십카드 -->
    <PopCarMembershipCard :visible="btmLayer.PopCarMembershipCard" @close="btmLayer.PopCarMembershipCard = false"
        @qnaRegistCompleted="alertPopColpleted = true"    
     />     
    <!-- 문의상세 -->
    <PopQnaDetail :visible="btmLayer.PopQnaDetail" @close="btmLayer.PopQnaDetail = false"/>
    <!-- 약관리스트 -->
    <PopRuleList :visible="btmLayer.PopRuleList" :gbn.sync="ruleGbn" @close="btmLayer.PopRuleList = false" />


    <!-- 팝업 -->
    <Alert :is-open="alertPopColpleted" @close="alertPopColpleted = false" class="header-title-size2">
        <template slot="header">문의가 등록되었습니다.</template>
        <template slot="body">
          고객센터에서 확인 후 답변드리도록 하겠습니다.<br />
          차지비 서비스 이용에 감사드립니다.
        </template>
    </Alert>     
  </div>
</template>

<script>
import PopAddr from '@/views/PopAddr'
import PopPin from '@/views/PopPin'
import UsingHistory from '@/views/common/UsingHistory'
import PopCouponRegist from '@/views/PopCouponRegist'
import PopPaymentAdd from '@/views/PopPaymentAdd'
import PopBlumembersAdd from '@/views/PopBlumembersAdd'
import PopCarInfoAdd from '@/views/PopCarInfoAdd'
import PopCaseAdd from '@/views/PopCaseAdd'
import PopQnaList from '@/views/PopQnaList'
import PopBreakdownReport from '@/views/PopBreakdownReport'
import PopRefund from '@/views/PopRefund'
import PopPaymentDetail from '@/views/PopPaymentDetail'
import PopCarMembershipCard from '@/views/PopCarMembershipCard'
import PopQnaDetail from '@/views/PopQnaDetail'
import PopRuleList from '@/views/PopRuleList'
export default {
  components:{
    PopAddr,
    PopPin,
    UsingHistory,
    PopCouponRegist,
    PopPaymentAdd,
    PopBlumembersAdd,
    PopCarInfoAdd,
    PopCaseAdd,
    PopQnaList,
    PopBreakdownReport,
    PopRefund,
    PopPaymentDetail,
    PopCarMembershipCard,
    PopQnaDetail,
    PopRuleList
  },
  data(){
    return{
      cardSliderOpt: {
        autoWidth: true,
        perMove:1,
        pagination:false,
      },

      // 충전포인트
      currentTab: 'point',
      cargePointList: [
          {
              src: require('@/assets/images/temp-place.jpg'),
              company: 'bmw',
              text: ['20년', 'BMW', 'Charging'],
              date: '2021. 07. 01 ~ 2022. 07. 01',
              price: '360,000',
              selected: true,
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
      cardList: [
          {
              date: '02/24',
              company: '삼성',
              num: ['****', '****', '****', '4151'],
              selected: true,
          },
          {
              date: '02/24',
              company: '삼성',
              num: ['****', '****', '****', '4151'],
              selected: false,
          },
      ],
      // 간편결제
      paymentCardList: [
          {
              logo: 'payco'
          }
      ],
      // 차량관리
      carSliderOpt: {
        autoWidth: true,
        perMove:1,
        pagination:false,
      },      
      carList: [
          {
              company: 'bmw',
              carInfo: ['BMW', '530e', '02보6596'],
              num: ['9999', '9999', '9999', '9999'],
              selected: true,
          },
          {
              company: 'benz',
              carInfo: ['BMW', '530e', '02보6596'],
              num: ['9999', '9999', '9999', '9999'],
              selected: false,
          },
      ],
      //문의하기
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
      carPromoList: [
          '완성차 프로모션',
          '완성차 멤버쉽카드',
      ],
      etcList: [
          '비회원 충전',
          '기타문의',
          '회원탈퇴',
      ],
      qnaGbn: '',
      // 문의내역
      qnaList:[
          {
              date:'2021- 01-02-03',
              status:'ing',
              sort:'환불 문의',
          },
          {
              date:'2021- 01-02-03',
              status:'ing',
              sort:'기타문의',
          },
          {
              date:'2021- 01-02-03',
              status:'end',
              sort:'충전기 고장신고',
          },
      ],
      // 약관 및 정책
      ruleGbn: '',
      ruleList: [
        '서비스 이용 약관',
        '개인정보 처리방침',
        '위치기반서비스 이용 약관',
        '휴대폰본인확인서비스'
      ],

      options: {
        perPage: 1,
        perMove: 1,
      },
      currentPage: 0,

      alertPopColpleted: false,
      btmLayer:{
        PopAddr: false,
        PopPin: false,
        PopCouponRegist: false,
        PopPaymentAdd: false,
        PopBlumembersAdd: false,
        PopCarInfoAdd: false,
        PopCaseAdd: false,
        PopQnaList: false,
        PopBreakdownReport: false,
        PopRefund: false,
        PopPaymentDetail: false,
        PopCarMembershipCard: false,
        PopQnaDetail: false,
        PopRuleList: false,
      },      
    }
  },
  methods:{
    popQna(index){
        this.qnaGbn = index;

        if(index === 'service5'){
          this.btmLayer.PopBreakdownReport = true;
        }else if(index === 'service6'){
          this.btmLayer.PopRefund = true;
        }else if(index === 'carpromo2'){
          this.btmLayer.PopCarMembershipCard = true;
        }else{
            this.btmLayer.PopQnaList = true;
        }
    },
    popRule(index){
        this.ruleGbn = index;
        this.btmLayer.PopRuleList = true;
    }
  }
}
</script>
