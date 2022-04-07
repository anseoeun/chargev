<template>
    <BtmLayer :visible="visible" @close="$emit('close')" class="pop-payment-detail">
      <template slot="content">
        <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" :key="key" class="slider-page">
          <template slot="content">
              <splide-slide>
                <h2 class="tit-type1">상세 결제내역</h2>
                <div class="payment-desc">
                    <Icon type="chargev2" />
                    <p class="addr">서울시 송파구 롯데타워지하4층 완속#1</p>
                    <div class="number">2008082001</div>
                    <div class="total">9,010원</div>
                </div>
                <ul class="payment-info-list">
                    <li><em>결제방법</em><div>태깅</div> </li>
                    <li><em>결제상태</em><div class="c-green">미결제</div> </li>
                    <li><em>결제구분</em><div>일시불</div> </li>
                    <li><em>승인번호</em><div>09876543</div> </li>
                    <li><em>승인상태</em><div>미결제</div> </li>
                    <li><em>충전량</em><div>3kWh</div> </li>
                    <li><em>시작일시</em><div>2021-11-02 15:05:02</div> </li>
                    <li><em>종료일시</em><div>2021-11-02 15:05:02</div> </li>
                </ul>
                <button class="btn-type1 st2">결제수단 변경</button>
              </splide-slide>
              <splide-slide>
                dfasdf
                </splide-slide>
          </template>
        </Carousel>
      </template>
    </BtmLayer>
</template>

<script>

export default {
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  },  
  watch:{
    visible(value){
      console.log(value)
      if(value){
        this.options = {
            perPage: 1,
            perMove: 1,
            start: 1  
        }
      }
    }
  },
  data(){
    return{
      options: {
        perPage: 1,
        perMove: 1,
        start: 1
        // breakpoints: {
        //   640: {
        //     destroy: true,
        //   },
        // }
      },
      key:1,
      currentPage: 0      
    }
  },
  mounted(){

    // this.options = {
    //     perPage: 1,
    //     perMove: 1,
    //     start: 2
    // }
    // this.key = 2        
  },
  methods:{

  }
}
</script>
