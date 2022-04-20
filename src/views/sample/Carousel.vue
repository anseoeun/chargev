<template>
  <div class="contents">
    <div class="login-wrap">
      <Carousel 
        :options="options" 
        :content="true" 
        :customPaging="true" 
        :page.sync="currentPage" 
        :key="totalPage"
        :tempPage="3"
        class="slider-page" 
        @init="pageSliderInit" 
        @onMove="pageSliderMove" 
        @onMoved="pageSliderMoved"
      >
        <template slot="content">
          <splide-slide>
            <div style="height:10rem;padding:1rem;background:red">
              페이지1
              <button class="btn-type1 st2" @click="currentPage = 1">2페이지로</button>
            </div>
          </splide-slide>
          <splide-slide>
            <div style="height:10rem;padding:1rem;background:gray">
              페이지2
              <button class="btn-type1 st2" @click="addPage(3);">3페이지추가 및 이동</button>
            </div>
          </splide-slide>
          <splide-slide v-if="page3">
            <div style="height:10rem;padding:1rem;background:green">페이지3</div>
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
      totalPage: 2,
      page3: false,
      options: {
        perPage: 1,
        perMove: 1,
        arrows: false,
        // destroy: true, 슬라이드 destroy
        // rewind: true, // 맨끝에서 처음으로 다시 돌아가기
        // pagination: false
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
    },
    addPage(page){
      this.page3 = true
      this.options.start = this.currentPage;
      this.totalPage = page;
      setTimeout(()=>{
        this.currentPage = 2;
      }, 400)
    }
  }
}
</script>
