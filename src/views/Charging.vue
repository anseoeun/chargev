<template>
  <div class="contents">
    <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page">
      <template slot="content">
          <splide-slide class="v-center2">
            <div class="charge-wrap v-center-scroll">
                <h2 class="tit-type1">잔여충전시간</h2>
                <div class="text-remind-time">3시간 45분</div>

                <div class="kwh-text">
                  <b>15.6kWh</b>
                  <p>CHARGED</p>
                  <p>충전 개시 대기중</p>
                </div>

                <h2 class="tit-type1">현재 충전예상금액</h2>
                <div class="text-price">6,520원</div>

                <div class="btn-box align-c">
                  <router-link to="/" class="btn-type1 st2">충전종료</router-link>
                </div>
            </div>
          </splide-slide>
          <splide-slide class="v-center2">
            <div class="charge-wrap v-center-scroll">
                <h2 class="tit-type1">충전시간</h2>
                <div class="text-remind-time">2시간 40분</div>

                <h2 class="tit-type1">충전기</h2>
                <div class="charge-place">
                  <p class="place-tit">서울시 송파구<br />롯데타워 지하2층</p>
                  <p class="txt">서울시 송파구 올림픽로 300</p>
                </div>

                <div class="time-start-end">
                  <div class="cell">
                    <strong>충전시작</strong>
                    <div class="time">
                      12:10<span class="ampm">AM</span>
                    </div>
                  </div>
                  <div class="cell">
                    <strong>충전종료</strong>
                    <div class="time">
                      7:40<span class="ampm">PM</span>
                    </div>
                  </div>
                </div>

                <div class="btn-box align-c">
                  <router-link to="/" class="btn-type1 st2">충전종료</router-link>
                  <router-link to="/" class="btn-type1 st2">예약취소</router-link>
                </div>
            </div>
          </splide-slide>
      </template>
    </Carousel>
  </div>
</template>

<script>
export default {
  data(){
    return{
      options: {
        perPage: 1,
        perMove: 1,
      },
      currentPage: 0,   
    }
  },
}
</script>
