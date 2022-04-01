<template>
  <div class="contents">
    <div class="login-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>      
      <Slider :options="options" :content="true" class="slider-page" :key="componentKey" @init="pageSliderInit" @onMove="pageSliderMove" @onMoved="pageSliderMoved">
        <template slot="content">
          <splide-slide>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
      <!-- <div class="x-scrolling-list">
        <ul class="event-list">
          <li v-for="(item, index) in eventList" :key="index">
            <div class="event" :style="`background-image:url(${item.bg})`">
              <button class="link-btn">
                <div class="title">{{ item.title }} </div>
                <div class="type">{{ item.type }} </div>
                <div class="period">
                  <div class="month">{{ item.month }}</div>
                  <div class="day">{{ item.day }}</div>
                </div>
              </button>
            </div>
          </li>
        </ul>
      </div>             -->
            <Slider :options="options2" :content="true" class="expct">
              <template slot="content">
                <splide-slide>가나달<br>가가나달가나달나다<br>가나다<br>가t나다</splide-slide>
                <splide-slide>가나달2<br>가가나달가나달나다<br>가나다<br>가나다</splide-slide>
                <splide-slide>가나달3<br>가나다<br>가나다<br>가가나달가나달가나달나다</splide-slide>
                <splide-slide>가나달3<br>가나다<br>가나다<br>가가나달가나달가나달나다</splide-slide>
                <splide-slide>가나달3<br>가나다<br>가나다<br>가가나달가나달가나달나다</splide-slide>
                <splide-slide>가나달3<br>가나다<br>가나다<br>가가나달가나달가나달나다</splide-slide>
                <splide-slide>가나달3<br>가나다<br>가나다<br>가가나달가나달가나달나다</splide-slide>
                <splide-slide>가나달3<br>가나다<br>가나다<br>가가나달가나달가나달나다</splide-slide>
              </template>
            </Slider>
            <div class="transparent-box-wrap">
              <strong class="tit">로그인</strong>
              <div class="transparent-box">
                <div class="form-box">
                  <div class="row">
                    <div class="input">
                        <input type="text" placeholder="ID(Email)">
                    </div>
                  </div>
                  <div class="row">
                    <div class="input">
                        <input type="text" placeholder="비밀번호">
                    </div>
                  </div>
                </div>
                <div class="box-btn">
                  <button class="btn-type1 st1">로그인</button>
                </div>
              </div>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="transparent-box-wrap">
              <strong class="tit">로그인</strong>
              <div class="transparent-box">
                <div class="form-box">
                  <div class="row">
                    <div class="input">
                        <input type="text" placeholder="ID(Email)">
                    </div>
                  </div>
                  <div class="row">
                    <div class="input">
                        <input type="text" placeholder="비밀번호">
                    </div>
                  </div>
                </div>
                <div class="box-btn">
                  <button class="btn-type1 st1">로그인</button>
                </div>
              </div>
            </div>
            
            <div class="info-text">
              결제 정보를 확인해주세요.
            </div>
          </splide-slide>
          <splide-slide>
            <div class="transparent-box-wrap">
              <strong class="tit">로그인</strong>
              <div class="transparent-box">
                <div class="form-box">
                  <div class="row">
                    <div class="input">
                        <input type="text" placeholder="ID(Email)">
                    </div>
                  </div>
                  <div class="row">
                    <div class="input">
                        <input type="text" placeholder="비밀번호">
                    </div>
                  </div>
                </div>
                <div class="box-btn">
                  <button class="btn-type1 st1">로그인</button>
                </div>
              </div>
            </div>
          </splide-slide>
          <!-- <splide-slide v-if="false"> -->
          <splide-slide>
          <div class="transparent-box-wrap">
              <strong class="tit">로그인</strong>
              <div class="transparent-box">
                <div class="form-box">
                  <div class="row">
                    <div class="input">
                        <input type="text" placeholder="ID(Email)">
                    </div>
                  </div>
                  <div class="row">
                    <div class="input">
                        <input type="text" placeholder="비밀번호">
                    </div>
                  </div>
                </div>
                <div class="box-btn">
                  <button class="btn-type1 st1">로그인</button>
                </div>
              </div>
            </div>
          </splide-slide>
        </template>
      </Slider>      


      <div class="grident-bottom">
        <div class="custom-dotting">
            <button v-for="(item, index) in paging" :key="index" :class="{on: currentPage === index}" @click="gotoPage(index)"></button>
        </div>
      </div>

        <!-- <button @click="btmLayer.agency = true">레이어 클릭</button>
        <button @click="update">슬라이더 추가</button> -->
    </div>

    <BtmLayer :visible="btmLayer.agency" @close="btmLayer.agency = false">
      <template slot="content">
          dfsf
      </template>
    </BtmLayer>
  </div>
</template>

<script>

export default {
  data(){
    return{
      btmLayer:{
        agency: false,
      },
      currentPage: 0,
      slider1: false,
       componentKey: 2,
      options: {
        // rewind: true, // 맨끝에서 처음으로 다시 돌아가기
        // width: 800,
        perPage: 1,
        perMove: 1,
        // pagination: false,
        // arrows: false,
      },      
      options2: {
        focus    : 'center',
        autoWidth: true,
        perPage: 1,
      },        
      paging: new Array(6),
      eventList: [
        {
          bg: require('@/assets/images/temp-event.jpg'),
          month: '1월',
          day: '1~31',
          title: '삼성 iD EV 카드 프로모션',
          type: '충전요금 할인 카드',
        },
        {
          bg: require('@/assets/images/temp-event.jpg'),
          month: '1월',
          day: '1~31',
          title: '삼성 iD EV 카드 프로모션',
          type: '충전요금 할인 카드',
        },
        {
          bg: require('@/assets/images/temp-event.jpg'),
          month: '1월',
          day: '1~31',
          title: '삼성 iD EV 카드 프로모션',
          type: '충전요금 할인 카드',
        },
        {
          bg: require('@/assets/images/temp-event.jpg'),
          month: '1월',
          day: '1~31',
          title: '삼성 iD EV 카드 프로모션',
          type: '충전요금 할인 카드',
        },
        {
          bg: require('@/assets/images/temp-event.jpg'),
          month: '1월',
          day: '1~31',
          title: '삼성 iD EV 카드 프로모션',
          type: '충전요금 할인 카드',
        },
      ]      
    }
  },
  mounted(){
    var el = document.querySelector('.expct')
  el.addEventListener("touchstart", function(e){ e.stopPropagation() });
  },
  methods: {
    update(){
      this.slider1 = true;
      this.componentKey += 1;   
      this.options.start = 1
      // this.$forceUpdate();
    },
    pageSliderInit(slider){
      this.currentPage = slider.index
    },
    pageSliderMove(slider){
      this.currentPage = slider.index
    },
    pageSliderMoved(slider){
      this.currentPage = slider.index
    },
    gotoPage(index){
      document.querySelector('.splide__pagination li:nth-child('+(index +  1)+') button').click()
    }
  }
}
</script>
