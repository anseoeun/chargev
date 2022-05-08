<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-case-wrap max">
      <template slot="content">
        <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page">
          <template slot="content">
              <splide-slide>
                <div class="form-box-wrap">
                    <h2 class="tit-type1 c-white">유형선택</h2>
                    <div class="btn-box">
                        <button class="btn-type1 st2">공용충전기</button>
                        <button class="btn-type1 st2">홈충전기</button>
                    </div>
                  </div>
              </splide-slide>
              <splide-slide>
                2페이지
              </splide-slide>
              <splide-slide>
                3페이지
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
  data(){
    return {
      options: {
        perPage: 1,
        perMove: 1,
      },
      currentPage: 0
    }
  }
}
</script>
