<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-charger-apply max">
      <template slot="content">
        <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page">
          <template slot="content">
              <splide-slide>
                <div class="charger-install-wrap">
                    <!-- 설치장소 선택 -->
                    <h2 class="tit-type1">설치장소 선택</h2>
                    <div class="place-list">
                        <Carousel :data ="placeList" :options="placeSlideOpt">
                            <template slot-scope="props">
                                <button class="place-card" @click="currentPage = 1">
                                <div class="img" :style="`background-image:url(${props.item.src})`"></div>
                                <div class="desc">
                                    <strong class="tit">{{ props.item.title }}</strong>
                                </div>
                                </button>
                            </template>
                        </Carousel>
                    </div>
                </div>
              </splide-slide>
              <splide-slide>
                <div class="charger-install-wrap">
                    <!-- 충전기 선택 -->
                    <h2 class="tit-type1">충전기 선택</h2>
                    <div class="place-list">
                        <Carousel :data ="placeList2" :options="placeSlideOpt">
                            <template slot-scope="props">
                                <button class="place-card" @click="currentPage = 2">
                                    <div class="img" :style="`background-image:url(${props.item.src})`"></div>
                                    <div class="desc">
                                        <strong class="tit">{{ props.item.title }}</strong>
                                        <div class="price">{{ props.item.price }}</div>
                                        <div class="item">{{ props.item.item }}</div>
                                    </div>
                                </button>
                            </template>
                        </Carousel>
                    </div>
                    <!-- 추가비용 안내 -->
                    <h2 class="tit-type1">추가비용 안내</h2>    
                    <ul class="dash-indent-list">
                        <li>- 표준공사 30m기준<br />(초과시 m당 초과 비용 발생)</li>
                        <li>- 스탠드형 설치시 20만원 추가 부담금 발생</li>
                        <li>- 한국전력 표준 시설부담금 별도(발생 시)</li>
                        <li>- 완속충전기 취득세(지방세) 발생 가능</li>
                    </ul>
                </div>
              </splide-slide>
              <splide-slide>
                <AddrSearch @confirm="currentPage = 3" />
              </splide-slide>
              <splide-slide>
                <div class="charger-install-wrap">
                    <h2 class="tit-type1">실사 방문 요청일 선택</h2>
                    <div class="select-date">
                      <div class="row row-header">
                          <div class="cell"><button disabled>이전</button></div>
                          <div class="cell">시간대 선택</div>
                          <div class="cell"><button>다음</button></div>
                      </div>
                      <div class="row">
                          <div class="cell">설치<br>시간대</div>
                          <div v-for="(item, name) in dateList" :key="name" class="cell tit" v-html="getDay(name)"></div>
                      </div>
                      <div class="row">
                          <div class="cell">09:00<br>~13:00</div>
                          <div v-for="(item, name) in dateList" :key="name" class="cell">
                              <button :disabled="!item['09:00 ~ 13:00']" v-html="getTimeStatus(item['09:00 ~ 13:00'])" @click="currentPage = 4"></button>
                          </div>
                      </div>
                      <div class="row">
                          <div class="cell">14:00<br>~17:00</div>
                          <div v-for="(item, name) in dateList" :key="name" class="cell">
                              <button :disabled="!item['09:00 ~ 13:00']" v-html="getTimeStatus(item['14:00 ~ 17:00'])" @click="currentPage = 4"></button>
                          </div>
                      </div>
                    </div>
                </div>
              </splide-slide>
              <splide-slide>
                <div class="charger-install-wrap">
                    <h2 class="tit-type1">옵션선택</h2>
                    <div class="option-select">
                        <div class="grid-list type2">
                             <button class="row" v-for="(item , index) in optList" :key="index" @click="checkIcon($event, 'optChecked', index)">
                                <div class="tit">
                                    <Icon type="check" :class="{on: optChecked[index]}" />
                                    <span v-html="item.name"></span>
                                </div>
                                <div class="text right">{{ item.price }}원</div>
                            </button>
                        </div>
                        <div class="btn-box">
                            <button class="btn-type1 st2" @click="currentPage = 5">확인</button>
                        </div>
                    </div>
                </div>
              </splide-slide>
              <splide-slide>
                <div class="charger-install-wrap">
                    <!-- 결제정보 -->
                    <h2 class="tit-type1">결제정보</h2>
                    <div class="payment-info">
                        <div class="grid-list">
                            <div class="row" v-for="(item , index) in paymentInfoList" :key="index">
                                <div class="tit">{{ item.name }}</div>
                                <div class="text right">{{ item.price }}원</div>
                            </div>
                            <div class="row">
                                <div class="tit">합계(VAT 포함)</div>
                                <div class="text right">1,870,000원</div>
                            </div>
                        </div>
                        <div class="gray-box">
                          <ul class="dash-indent-list">
                              <li>- 표준공사 30m기준으로 초과시 m당 초과 비용  이 발생할 수 있습니다.</li>
                              <li>- 여유 전력이 부족할 경우 전력 증설로 인한 한국 전력 표준 시설부담금이 발생할 수 있습니다.</li>
                              <li>- 완속충전기 취득세가 부과될 수 있습니다.</li>
                          </ul>
                        </div>
                    </div>
                    <!-- 개인정보 제3자 제공 동의 -->
                    <h2 class="tit-type1">개인정보 제3자 제공 동의</h2>
                    <div class="rule-agree">
                        <div class="grid-list">
                            <div class="row">
                                <div class="tit">
                                  <button  @click="checkIcon($event, 'ruleChecked')">
                                    <Icon type="check" :class="{on: ruleChecked}" />개인정보 제3자 제공 동의
                                  </button>
                                </div>
                                <div class="right">
                                    <button class="btn-toggle-slide" @click="toggleSlide($event, '#slide-rule')"><Icon type="arr-right" /></button>
                                </div>
                            </div>
                        </div>
                        <div id="slide-rule" style="display:none">
                          개인정보 제3자 제공 동의 <br />
                          개인정보 제3자 제공 동의 <br />
                          개인정보 제3자 제공 동의 <br />
                          개인정보 제3자 제공 동의 <br />
                          개인정보 제3자 제공 동의 <br />
                          개인정보 제3자 제공 동의 <br />
                          개인정보 제3자 제공 동의 <br />
                          개인정보 제3자 제공 동의 <br />
                          개인정보 제3자 제공 동의 <br />
                          개인정보 제3자 제공 동의 <br />
                          개인정보 제3자 제공 동의 <br />
                          개인정보 제3자 제공 동의 <br />
                          개인정보 제3자 제공 동의 <br />
                          개인정보 제3자 제공 동의 <br />
                          개인정보 제3자 제공 동의 <br />
                          개인정보 제3자 제공 동의 <br />
                          개인정보 제3자 제공 동의 <br />
                          개인정보 제3자 제공 동의 <br />
                          개인정보 제3자 제공 동의 <br />
                          개인정보 제3자 제공 동의 <br />
                          개인정보 제3자 제공 동의 <br />
                          개인정보 제3자 제공 동의 <br />
                          개인정보 제3자 제공 동의 <br />
                          개인정보 제3자 제공 동의 <br />
                        </div>
                    </div>
                    <div class="btn-box">
                        <button class="btn-type1 st2">충전기 설치 신청</button>
                    </div>

                </div>
              </splide-slide>
          </template>
        </Carousel>
      </template>
    </BtmLayer>
</template>

<script>
import AddrSearch from '@/views/common/AddrSearch'
export default {
  components:{
    AddrSearch
  },  
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  },  

  data(){
    return{
      placeSlideOpt: {
        autoWidth:true,
        perMove:1,
        pagination:false,
      },

      //설치장소 선택
      placeList: [
        {
          title: '단독주택',
          src: require('@/assets/images/temp-place.jpg'),
        },
        {
          title: '아파트',      
          src: require('@/assets/images/temp-place.jpg'),
        },
        {
          title: '빌라',      
          src: require('@/assets/images/temp-place.jpg'),
        },
        {
          title: '단독주택',
          src: require('@/assets/images/temp-place.jpg'),
        },
        {
          title: '아파트',      
          src: require('@/assets/images/temp-place.jpg'),
        },
        {
          title: '빌라',      
          src: require('@/assets/images/temp-place.jpg'),
        },
      ],
      //충전기 선택
      placeList2: [
        {
          title: '모델A',
          price: '1,500,000',
          item: '설치비, vat포함',
          src: require('@/assets/images/temp-place.jpg'),
        },
        {
          title: '모델B',
          price: '1,500,000',
          item: '설치비, vat포함',          
          src: require('@/assets/images/temp-place.jpg'),
        },
        {
          title: '모델C',
          price: '1,500,000',
          item: '설치비, vat포함',          
          src: require('@/assets/images/temp-place.jpg'),
        },
      ],
      //실사 방문 요청일 선택
      dateList: {
        '2022.오늘<br>(목)' : {
        '09:00 ~ 13:00' : false,
        '14:00 ~ 17:00' : false
        },
        '2022.02.04<br>(금)' : {
        '09:00 ~ 13:00' : false,
        '14:00 ~ 17:00' : false
        },
        '2022.02.05<br>(토)' : {
        '09:00 ~ 13:00' : false,
        '14:00 ~ 17:00' : false
        },
        '2022.02.06<br>(일)' : {
        '09:00 ~ 13:00' : false,
        '14:00 ~ 17:00' : false
        },
        '2022.02.07<br>(월)' : {
        '09:00 ~ 13:00' : true,
        '14:00 ~ 17:00' : true
        },
        '2022.02.08<br>(화)' : {
        '09:00 ~ 13:00' : true,
        '14:00 ~ 17:00' : true
        },
        '2022.02.09<br>(수)' : {
        '09:00 ~ 13:00' : true,
        '14:00 ~ 17:00' : true
        },
      },
      //옵션 선택
      optList: [
        {
          name : '스탠드 추가',
          price: '200,000'
        },
        {
          name : '케이블 연장<br />(5m → 8m)',
          price: '200,000'
        }
      ],    
      optChecked: new Array(2).fill(false),  
      //결제정보
      paymentInfoList: [
        {
          name : '충전기',
          price: '1,500,000'
        },
        {
          name : '스탠드 추가',
          price: '200,000'
        },
        {
          name : '부가세',
          price: '170,000'
        }
      ],      
      //개인정보 제3자 제공 동의
      ruleChecked: false ,  

      options: {
        perPage: 1,
        perMove: 1,
      },
      currentPage: 0
    }
  },
  methods: {
    getDay(day){
      return day.substring(5, 20)
    },
    getTimeStatus(status){  
      return status ? '접수<br>가능' : '접수<br>마감'
    },  
  }
}
</script>
