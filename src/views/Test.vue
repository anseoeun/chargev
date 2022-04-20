<template>
  <div class="contents">
    <div class="login-wrap">
      <button @click="currentPage = 2;options.start = 2">3페이지추가</button>
          <Carousel :options="options" :content="true" class="slider-default" :key="currentPage">
            <template slot="content">
              <splide-slide>
                <div style="height: 200px; background: red">가나다</div>
              </splide-slide>
              <splide-slide>
                <div style="height: 200px; background: green">라마바</div>
              </splide-slide>
              <splide-slide v-if="currentPage === 2">
                <div style="height: 200px; background: black">아자차</div>
              </splide-slide>
              <splide-slide v-if="false">
                <div style="height: 200px; background: black">파하</div>
              </splide-slide>
            </template>
          </Carousel>      
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
