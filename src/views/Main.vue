<template>
  <div class="contents">
    <div class="home-wrap">
      <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page parallel-slider">
        <template slot="content">
            <splide-slide>
                <div class="using-history">
                    <h2 class="tit-type1">이용기록</h2>
                </div>
            </splide-slide>
            <splide-slide>
                <div class="charge-status">
                    <!-- 충전차량 -->
                    <h2 class="tit-type1">충전차량</h2>
                    <div class="desc">
                        <div class="space-text"><span>BMW</span><span>530e</span></div>
                        02보6596
                    </div>
                    <button class="btn-type1 st3">충전차량 설정</button>

                    <!-- 충전포인트 -->
                    <h2 class="tit-type1">충전포인트</h2>
                    <div class="desc">
                        <div class="point">360,000원</div>
                    </div>
                    <button class="btn-type1 st3">상세확인</button>
                </div>
            </splide-slide>
        </template>
      </Carousel>
    </div>

    <!-- 팝업:통신사 선택 -->
    <AgencySelect :visible="btmLayer.agency" @close="agencySelect"/>

  </div>
</template>

<script>
import AgencySelect from '@/views/common/AgencySelect'
export default {
  components:{
    AgencySelect
  },
  data(){
    return{
      btmLayer:{
        agency: false,
      },
      agency: {},
      options: {
        perPage: 1,
        perMove: 1,
        arrows: false,
      },
      currentPage: 0,
      paging: new Array(6),
    }
  },
  mounted(){

  },
  methods: {
    agencySelect(val){
      val ? this.agency = val : ''
      this.btmLayer.agency = false
    },
  }
}
</script>
