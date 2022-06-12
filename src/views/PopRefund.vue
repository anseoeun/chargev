<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-refund max">
      <template slot="content">
        <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page">
          <template slot="content">
              <splide-slide>
                <div class="refund-wrap">
                    <!-- 환불항목 -->
                    <h2 class="tit-type1">환불항목</h2>
                    <ul class="grid-menu-list">
                        <li v-for="(item, index) in refundList" :key="index"><button v-html="item" @click="refundItem = item.replace('<br />', ' ');currentPage = 1"></button></li>
                    </ul>

                </div>
              </splide-slide>
              <splide-slide>
                <div class="refund-wrap">
                    <!-- 환불항목 -->
                    <h2 class="tit-type1">환불항목</h2>
                    <p class="item-selected-text">{{ refundItem }}</p>
                    <!-- 결제 후 미충전 -->
                    <template v-if="refundItem === '결제 후 미충전'">
                      <h2 class="tit-type1">결제건 선택</h2>
                      <UsingHistory
                          @detailUsingHistory="$emit('detailUsingHistory')"
                      />
                      <div class="btn-box">
                        <button class="btn-type1 st2" @click="$emit('qnaRegistCompleted')">문의사항 등록하기</button>
                      </div>
                    </template>

                    <!-- 선불 상품 -->
                    <template v-if="refundItem === '선불 상품'">
                      <!-- 상품 선택 -->
                      <h2 class="tit-type1">상품 선택</h2>
                      <ul class="history-list">
                        <li v-for="(item, index) in prePaymentList" :key="index">
                          <button class="box" :class="{on: item.checked}" @click="item.checked = true;refundReasonShow = true">
                            <div class="t-wrap">
                              <div class="row">
                                <div class="cell">
                                  <p>{{ item.product }}</p>
                                  <p><b class="price">{{ item.price }}</b>원</p>
                                  <p class="regular">{{ item.date }}</p>
                                </div>
                              </div>
                            </div>
                          </button>
                        </li>
                      </ul>

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
                        <p class="item-selected-text">{{ refundReason }}</p>
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
              </splide-slide>
          </template>
        </Carousel>
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

      options: {
        perPage: 1,
        perMove: 1,
      },
      currentPage: 0
    }
  }
}
</script>
