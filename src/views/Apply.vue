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
            <div class="charger-install-wrap">
              <!-- 충전기 설치신청 -->
              <h2 class="tit-type1">충전기 설치신청</h2>
              <div class="btn-box">
                  <button class="btn-type1 st2" @click="btmLayer.PopChargerApply = true">충전기 설치 신청</button>
              </div>              
              <!-- 충전기 설치신청 -->
              <h2 class="tit-type1">충전기 설치신청</h2>
              <div class="selected-place">
                <div class="place-card">
                  <div class="img" :style="`background-image:url(${place.src})`"></div>
                  <div class="desc">
                    <strong class="tit">{{ place.type }}</strong>
                    <div class="txt">신청이 완료되었습니다.<br />설치업체에서 날짜를 확인중입니다.</div>
                  </div>
                </div>
              </div>              
              <div class="btn-box">
                  <button class="btn-type1 st2" @click="btmLayer.PopProgressCheck = true">진행상황 확인</button>
              </div>              
            </div> 
          </splide-slide>
      </template>
    </Carousel>

    <!-- 주소 -->
    <PopAddr :visible="btmLayer.PopAddr" @close="btmLayer.PopAddr = false"/>
    <!-- 충전기설치신청 -->
    <PopChargerApply :visible="btmLayer.PopChargerApply" @close="btmLayer.PopChargerApply = false"/>
    <PopProgressCheck :visible="btmLayer.PopProgressCheck" @close="btmLayer.PopProgressCheck = false"/>
  </div>
</template>

<script>
import PopAddr from '@/views/PopAddr'
import PopChargerApply from '@/views/PopChargerApply'
import PopProgressCheck from '@/views/PopProgressCheck'
export default {
  components:{
    PopAddr,
    PopChargerApply,
    PopProgressCheck
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
        PopChargerApply: false,
        PopProgressCheck: false
      },      
    }
  },
}
</script>
