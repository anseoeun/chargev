<template>
  <div class="contents">
    <div class="login-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>      
      <Slider :options="options" :content="true" class="slider-page" :key="componentKey" @init="pageSliderInit" @onMove="pageSliderMove" @onMoved="pageSliderMoved">
        <template slot="content">
          <splide-slide>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
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
    <Slider :options="options" :content="true" class="slider-default" :key="componentKey">
      <template slot="content">
        <splide-slide>
          <div style="height: 200px; background: red">가나다</div>
        </splide-slide>
        <splide-slide>
          <div style="height: 200px; background: green">라마바</div>
        </splide-slide>
        <splide-slide v-if="slider1">
          <div style="height: 200px; background: black">아자차</div>
        </splide-slide>
        <splide-slide v-if="false">
          <div style="height: 200px; background: black">파하</div>
        </splide-slide>
      </template>
    </Slider>      
           

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
