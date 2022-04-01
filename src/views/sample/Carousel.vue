<template>
  <div class="contents">
    <div class="login-wrap">
      <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page parallel-slider" @init="pageSliderInit" @onMove="pageSliderMove" @onMoved="pageSliderMoved">
        <template slot="content">
          <splide-slide>
            페이지1
            <button class="btn-type1 st2" @click="currentPage = 1">2페이지로</button>
          </splide-slide>
          <splide-slide>
            페이지2
            <button class="btn-type1 st2" @click="currentPage = 2">3페이지로</button>
          </splide-slide>
          <splide-slide>
            페이지3
          </splide-slide>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>

// 참조사이트
// https://splidejs.com/integration/vue-splide/

export default {
  data(){
    return{
      currentPage: 0,
      paging: new Array(6),
      options: {
        perPage: 1,
        perMove: 1,
        arrows: false,
        // rewind: true, // 맨끝에서 처음으로 다시 돌아가기
        // pagination: false
        //star :start index
      },
    }
  },
  methods: {
    pageSliderInit(slider){
      this.currentPage = slider.index
    },
    pageSliderMove(slider){
      this.currentPage = slider.index
    },
    pageSliderMoved(slider){
      this.currentPage = slider.index
    }
  }
}
</script>
