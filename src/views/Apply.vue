<template>
  <div class="contents">
    <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page">
      <template slot="content">
          <splide-slide>
            <div class="apply-wrap">
              <!-- 멤버십카드 -->
              <h2 class="tit-type1">멤버십카드</h2>
              <div class="card-wrap">
                  <div class="card">
                      <Icon type="chargev2" />
                      <div class="number">
                          <div class="space-text"><span>02보</span><span>6596</span></div>
                      </div>
                  </div>
                  <div class="info"><span class="name">멤버십카드</span><span class="num">1955-1231-1231-1231</span></div>
                  <div class="btn-box">
                      <router-link to="/" class="btn-type1 st2">멤버십카드 재발급</router-link>
                      <router-link to="/" class="btn-type1 st2">배송현황 확인</router-link>                    
                  </div>
              </div>
              <!-- 멤버십카드 -->
              <h2 class="tit-type1">멤버십카드</h2>
              <div class="card-wrap">
                  <div class="card">
                      <Icon type="chargev3" />
                      <div class="number">
                          <div class="space-text"><span>01가</span><span>6596</span></div>
                      </div>
                  </div>
                  <div class="info"><span class="name">모바일카드</span><span class="num">1955-1231-1231-1231</span></div>
                  <div class="btn-box">
                      <button class="btn-type1 st2" @click="btmLayer.PopAddr = true">멤버십카드 발급</button>
                  </div>
              </div>
            </div>
          </splide-slide>
          <splide-slide>
                          
          </splide-slide>
      </template>
    </Carousel>

    <!-- 주소 -->
    <PopAddr :visible="btmLayer.PopAddr" @close="btmLayer.PopAddr = false"/>
    <!-- 충전소 -->
    <PopCharge :visible="btmLayer.PopCharge" @close="btmLayer.PopCharge = false"/>
  </div>
</template>

<script>
import PopAddr from '@/views/PopAddr'
import PopCharge from '@/views/PopCharge'
export default {
  components:{
    PopAddr,
    PopCharge
  },
  data(){
    return{

      options: {
        perPage: 1,
        perMove: 1,
      },
      currentPage: 0,
      btmLayer:{
        PopAddr: false,
        PopCharge: false
      },      
    }
  },
}
</script>
