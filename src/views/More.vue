<template>
  <div class="contents">
    <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page">
      <template slot="content">
          <splide-slide>
            <div class="more-wrap">
              <!-- 내정보 -->
              <h2 class="tit-type1">내정보</h2>
              <div class="my-info">
                  <p>이상욱</p>
                  <p>1989.08.24</p>
                  <p>010-9467-4694</p>
              </div>
              <!-- 등급 -->
              <h2 class="tit-type1">등급</h2>
              <div class="grade">GOLD</div>
            </div>
          </splide-slide>
          <splide-slide>
             
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
    PopChargerApply
  },
  data(){
    return{
      place: {
        type: '단독주택',
        src: require('@/assets/images/temp-place.jpg'),
      },

      options: {
        perPage: 1,
        perMove: 1,
      },
      currentPage: 0,
      btmLayer:{
        PopAddr: false,
        PopChargerApply: false
      },      
    }
  },
}
</script>
