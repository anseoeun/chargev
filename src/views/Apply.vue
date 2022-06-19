<template>
  <div class="contents">
    <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page">
      <template slot="content">
          <splide-slide class="no-scroll">
            <UpContent class="apply-wrap">
                <template slot="hide">              
                  <div class="card-wrap">
                    <h2 class="tit-type1">충전카드</h2>
                    <Carousel class="slide-list" :content="true" :options="cardSliderOpt">
                        <template slot="content">
                            <splide-slide v-for="(item, index) in cardList" :key="index">
                                <div class="card" :class="{on: item.selected}">
                                    <div class="logo">
                                      <Icon type="chargev" />
                                    </div>
                                    <div class="grid-list">
                                        <div class="row">
                                            <div class="tit">멤버십카드</div>
                                            <div class="text card-num">
                                              <span>{{ item.num[0] }}</span> -
                                              <span>{{ item.num[1] }}</span> -
                                              <span>{{ item.num[2] }}</span> -
                                              <span>{{ item.num[3] }}</span>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="tit">연동차량</div>
                                            <div class="text">{{ item.car }}</div>
                                        </div>
                                    </div>
                                    <div class="btn-box-inner">
                                        <button class="btn" @click="btmLayer.PopAddr = true">멤버십카드 재발급</button>
                                    </div>
                                </div>
                            </splide-slide>
                        </template>
                    </Carousel>
                  </div>
                </template>
                <template slot="tit">발급 이력</template>
                <template slot="up">
                  <div class="scroll-area">
                    <ul class="history-list2">
                      <li v-for="(item, index) in issueList" :key="index">
                        <div class="box" :class="{on:item.selected}">
                          <div class="txt-status">
                            <template v-if="item.status == 'complete'">수령완료</template>
                            <template v-if="item.status == 'ing'">배송중</template>
                            <template v-if="item.status == 'start'">발송완료</template>
                          </div>
                          <div class="grid-list">
                            <div v-if="item.status=='complete'" class="row">
                              <div class="tit">수령자</div>
                              <div class="text">{{ item.recipient }}</div>
                            </div>
                            <div class="row">
                              <template v-if="item.status=='complete' || item.status=='ing'">
                                <div class="tit">집배원</div>
                                <div class="text">{{ item.mailman }}</div>
                              </template>
                              <template v-if="item.status=='start'">
                                <div class="tit">발송처</div>
                                <div class="text">{{ item.mailman }}</div>
                              </template>
                            </div>
                            <div class="row">
                              <template v-if="item.status=='complete'">
                                <div class="tit">도착일</div>
                                <div class="text">{{ item.date }}</div>
                              </template>
                              <template v-if="item.status=='ing'">
                                <div class="tit">예상<br />도착일</div>
                                <div class="text">{{ item.date }}</div>
                              </template>
                              <template v-if="item.status=='start'">
                                <div class="tit">발송일</div>
                                <div class="text">{{ item.date }}</div>
                              </template>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </template>
            </UpContent>
          </splide-slide>
          <splide-slide class="no-scroll">
            <UpContent class="apply-wrap">
                <template slot="hide">
                  <div class="card-wrap">
                    <h2 class="tit-type1">충전기 설치신청</h2>
                    <Carousel class="slide-list" :content="true" :options="cardSliderOpt">
                        <template slot="content">
                            <splide-slide v-for="(item, index) in applyList" :key="index">
                                <div class="place-card">
                                  <div class="img" :style="`background-image:url(${item.src})`"></div>
                                  <div class="desc">
                                    <strong class="tit">{{ item.type }}</strong>
                                    <!-- <div v-if="item.status == 'complate'" class="txt">신청이 완료되었습니다.</div> -->
                                  </div>
                                </div>
                            </splide-slide>
                            <splide-slide>
                                <button class="card" @click="btmLayer.PopChargerApply = true">
                                    <div class="center">
                                        <Icon type="add-plus" />
                                        <p class="txt">충전기 추가 설치신청</p>
                                    </div>
                                </button>
                            </splide-slide>
                        </template>
                    </Carousel>
                  </div>
                </template>
                <template slot="tit">진행상황</template>                
                <template slot="up">
                  <div class="scroll-area">
                    <ul class="history-list2">
                      <li v-for="(item, index) in  statusList" :key="index">
                        <div class="box" :class="{on:item.selected}">
                          <div class="txt-status">
                            <template v-if="item.status == 'complete'">설치 완료</template>
                            <template v-if="item.status == 'ing'">공사중</template>
                            <template v-if="item.status == 'start'">결제완료</template>
                            <template v-if="item.status == 'apply'">설치신청완료</template>
                          </div>
                          <div class="grid-list">
                            <div class="row">
                              <template v-if="item.status=='complete' || item.status=='start' || item.status=='apply'">
                                <div class="tit">완료일</div>
                                <div class="text">{{ item.date }}</div>
                              </template>
                              <template v-if="item.status=='img'">
                                <div class="tit">예정일</div>
                                <div class="text">{{ item.date }}</div>
                              </template>
                            </div>
                            <div class="row">
                              <div class="tit">상태</div>
                              <div class="text">
                                <template v-if="item.status=='complete'">설치가 완료되었습니다.</template>
                                <template v-if="item.status=='ing'">공사 진행중입니다.</template>
                                <template v-if="item.status=='start'">결제가 완료되었습니다.</template>
                                <template v-if="item.status=='apply'">신청이 완료되어 요청하신 날짜에 방문이 가능한지 확인 중이며, 상담사가 연락할 예정입니다.</template>
                              </div>
                            </div>
                            <div v-if="item.status=='apply'" class="row">
                              <div class="tit">설치주소</div>
                              <div class="text">{{ item.addr }}</div>
                            </div>
                            <div v-if="item.status=='apply'" class="row">
                              <div class="tit">실사<br />요청일</div>
                              <div class="text">{{ item.visitDate }}</div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </template>
            </UpContent>
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
    PopChargerApply,
  },
  data(){
    return{
      applyList: [
        {
          type: '단독주택',
          src: require('@/assets/images/temp-place.jpg'),
          status: 'complate'
        }
      ],

      // 멤버십카드
      cardSliderOpt: {
        autoWidth: true,
        perMove:1,
        pagination:false,
      },
      cardList: [
          {
              num: ['0000', '0000', '0000', '0000'],
              car: '01가 5678',
              product: '상품상품',
              selected: true
          },
          {
              num: ['1010', '0101', '1234', '5678'],
              car: '01가 5678',
              product: '-'
          },
      ],
      // 발급 이력
      issueList: [  
        {
          status: 'complete',
          recipient: '김김김',
          mailman: '홍홍홍',
          date: '2022-05-03',
          selected: true,
        },
        {
          status: 'ing',
          recipient: '김김김',
          mailman: '홍홍홍',
          date: '2022-05-03',
        },
        {
          status: 'start',
          recipient: '김김김',
          mailman: '홍홍홍',
          date: '2022-05-03',
        },
        {
          status: 'complete',
          recipient: '김김김',
          mailman: '홍홍홍',
          date: '2022-05-03',
        },
        {
          status: 'ing',
          recipient: '김김김',
          mailman: '홍홍홍',
          date: '2022-05-03',
        },
        {
          status: 'start',
          recipient: '김김김',
          mailman: '홍홍홍',
          date: '2022-05-03',
        },
        {
          status: 'complete',
          recipient: '김김김',
          mailman: '홍홍홍',
          date: '2022-05-03',
        },
        {
          status: 'ing',
          recipient: '김김김',
          mailman: '홍홍홍',
          date: '2022-05-03',
        },
        {
          status: 'start',
          recipient: '김김김',
          mailman: '홍홍홍',
          date: '2022-05-03',
        },
      ],
      // 진행상황
      statusList: [  
        {
          status: 'complete',
          date: '2022-05-03',
          selected: true,
        },
        {
          status: 'ing',
          date: '2022-05-03',
        },
        {
          status: 'start',
          date: '2022-05-03',
        },
        {
          status: 'apply',
          date: '2022-05-03',
          addr: '서울시 송파구 올림픽로 300',
          visitDate: '2022-02-24',
          selected: true,
        },
      ],

      options: {
        perPage: 1,
        perMove: 1,
      },
      currentPage: 0,
      btmLayer:{
        PopAddr: false,
        PopChargerApply: false,
      },      
    }
  },
}
</script>
