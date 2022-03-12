<template>
  <div class="contents">
    <div class="charger-price-wrap">
      <div class="charger-price-header">
        <h2 class="tit-type2">충전요금 안내</h2>
        <div class="header-info">
          <div class="date">2022년 02월 기준</div>
          <div class="right">원/kWh, 부가세 포함</div>
        </div>
      </div>
    
      <div class="price-info">
        <strong>충전요금</strong>
        <ul>
            <li>
                <div class="logo">
                    <img :src="`${require('@/assets/images/logo/logo-chargev.png')}`" alt="" class="logo-chargev">
                </div>
                <div class="place">
                    <p>공동주택</p>
                    <p>공공주택 외</p>
                    <p>급속충전기</p>
                    <p>롯데월드타워 2층</p>
                    <p>롯데월드타워 3층</p>
                    <p>롯데월드타워 4층</p>
                    <p>위탁운영 충전기</p>
                </div>
                <div class="info">
                    <p>심야 199, 주간 259</p>
                    <p>심야 249, 주간 269</p>
                    <p>단일 279</p>
                    <p>완속 269, 급속 279</p>
                    <p>단일 269</p>
                    <p>단일 259</p>
                    <p>단일 289</p>
                </div>
            </li>
            <li>
                <div class="logo">
                    <img :src="`${require('@/assets/images/logo/logo-jeju.png')}`" alt="" class="logo-jeju">
                </div>
                <div class="place">
                    <p>제주도청</p>
                </div>
                <div class="info">
                    <p>290</p>
                </div>
            </li>
            <li>
                <div class="logo">
                    <img :src="`${require('@/assets/images/logo/logo-me.png')}`" alt="" class="logo-me">
                </div>
                <div class="place">
                    <p>환경부 급속</p>
                </div>
                <div class="info">
                    <p>50kW 292.9</p>
                    <p>그외 309.1</p>
                </div>
            </li>
            <li>
                <div class="logo">
                    <img :src="`${require('@/assets/images/logo/logo-kepco.png')}`" alt="" class="logo-kepco">
                </div>
                <div class="place">
                    <p>한국전력공사</p>
                </div>
                <div class="info">
                    <p>심야 289,</p>
                    <p>주간 309</p>
                </div>
            </li>
            <li>
                <div class="logo">
                    <img :src="`${require('@/assets/images/logo/logo-lghellow.png')}`" alt="" class="logo-lghellow">
                </div>
                <div class="place">
                    <p>LG헬로비전</p>
                </div>
                <div class="info">
                    <p>300</p>
                </div>
            </li>
            <li>
                <div class="logo">
                    <img :src="`${require('@/assets/images/logo/logo-gs.png')}`" alt="" class="logo-gs">
                </div>
                <div class="place">
                    <p>GS칼텍스</p>
                </div>
                <div class="info">
                    <p>309</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  data(){
    return{
     
    }
  },
   mounted(){
   
  }
}
</script>
