<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-refund max">
      <template slot="content">
        <div class="cont-scroll">        
            <div class="refund-wrap">
                <!-- 환불항목 -->
                <h2 class="tit-type1">환불항목</h2>
                <ul v-if="refundItem === ''" class="grid-menu-list">
                    <li v-for="(item, index) in refundList" :key="index"><button v-html="item" @click="refundItem = item.replace('<br />', ' ');currentPage = 1"></button></li>
                </ul>

                <p class="item-selected-text">{{ refundItem }}</p>

                <!-- 결제 후 미충전 -->
                <template v-if="refundItem === '결제 후 미충전'">
                  <h2 class="tit-type1">결제건 선택</h2>
                  <UsingHistory
                      @detailUsingHistory="$emit('detailUsingHistory')"
                      :checkType="true"
                  />
                  <div class="btn-box">
                    <button class="btn-type1 st2" @click="$emit('qnaRegistCompleted')">문의사항 등록하기</button>
                  </div>
                </template>

                <!-- 선불 상품 -->
                <template v-if="refundItem === '선불 상품'">
                  <!-- 상품 선택 -->
                  <h2 class="tit-type1">상품 선택</h2>
                  <div class="card-wrap">
                    <Carousel class="slide-list" :content="true" :options="cardSliderOpt" :key="currentTab">
                        <template slot="content">
                            <splide-slide v-for="(item, index) in cargeList" :key="index">
                                <button class="card2" :class="{on: item.selected}" @click="item.checked = true;refundReasonShow = true">
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
                                </button>
                            </splide-slide>
                        </template>
                    </Carousel>    
                  </div> 

                  <!-- 환불 사유 -->
                  <template v-if="refundReasonShow">
                    <h2 class="tit-type1">환불 사유</h2>
                    <ul class="grid-menu-list">
                        <li v-for="(item, index) in refundReasonList" :key="index">
                          <button v-html="item" @click="refundReason = item.replace('<br />', ' ');refundReasonShow = false;refundReasonCompletedShow = true;"></button>
                        </li>
                    </ul>
                  </template>
                  <template v-if="refundReasonCompletedShow">
                    <h2 class="tit-type1">환불 사유</h2>
                    <button class="btn-type1 st2" @click="refundReasonShow = true;refundReasonCompletedShow = false;">{{ refundReason }}</button>
                    <div class="btn-box">
                      <button class="btn-type1 st2" @click="$emit('qnaRegistCompleted')">문의사항 등록하기</button>
                    </div>
                  </template>
                </template>

                <!-- 기타 -->
                <template v-if="refundItem === '기타'">
                    <div class="btn-box">
                      <button class="btn-type1 st2" @click="$emit('qnaRegistCompleted')">문의사항 등록하기</button>
                    </div>
                </template>

            </div>
        </div>
      </template>
    </BtmLayer>
</template>

<script>
import UsingHistory from '@/views/common/UsingHistory'
export default {
  components:{
    UsingHistory
  },  
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  },  

  data(){
    return{
      // 고장        
      refundItem: '',
      refundList:[
          '결제 후<br />미충전',
          '선불 상품',
          '기타'
      ],
      refundReasonShow: false,
      refundReasonCompletedShow: false,
      refundReason: '',      
      refundReasonList:[
          '차지비<br />사용안함',
          '실수로 구매',
          '기타' 
      ],
      prePaymentList: [
        {
          product:'모바일 충전권',
          price:'9,010',
          date:'2021-10-01 ~ 2022-10-01',
          checked: false
        },
        {
          product:'모바일 충전권',
          price:'9,010',
          date:'2021-10-01 ~ 2022-10-01',
          checked: false
        }
      ],
      cardSliderOpt: {
        autoWidth: true,
        perMove:1,
        pagination:false,
      },
      cargeList: [
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
      
      options: {
        perPage: 1,
        perMove: 1,
      },
      currentPage: 0
    }
  }
}
</script>
