<template>
  <div class="contents">
    <div class="charger-install-wrap">
      <div class="charger-install-header">
        <h2 class="tit-type3">충전기 모델 선택</h2>
        <p class="text-type1">충전기 모델을 골라주세요.</p>
      </div>
      <div class="x-scrolling-list">
        <ul class="place-list">
          <li v-for="(item, index) in placeList" :key="index">
            <router-link to="/" class="place-card">
              <div class="img" :style="`background-image:url(${item.src})`"></div>
              <div class="desc">
                <strong class="tit">{{ item.title }}</strong>
                <div class="price">{{ item.price }}</div>
                <div class="item">{{ item.item }}</div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="shadow-box">
          <h3 class="tit-type4">결제 정보</h3>
          <ul class="dash-indent-list">
            <li>- 표준공사 30m기준(초과시 m당 초과 비용 발생)</li>
            <li>- 스탠드형 설치시 20만원 추가 부담금 발생</li>
            <li>- 한국전력 표준 시설부담금 별도(발생 시)</li>
            <li>- 완속충전기 취득세(지방세) 발생 가능</li>
          </ul>
      </div>
    </div>
    <!-- // charger-install-wrap -->
  </div>
</template>

<script>
export default {
  name: 'ChargerInstallApplyPlace',
  components: {
    
  },
  data(){
    return{
      placeList: [
        {
          title: '모델A',
          price: '1,500,000',
          item: '설치비, vat포함',
          src: require('@/assets/images/temp-place.jpg'),
        },
        {
          title: '모델B',
          price: '1,500,000',
          item: '설치비, vat포함',          
          src: require('@/assets/images/temp-place.jpg'),
        },
        {
          title: '모델C',
          price: '1,500,000',
          item: '설치비, vat포함',          
          src: require('@/assets/images/temp-place.jpg'),
        },
      ]
    }
  },
   mounted(){
   
  }
}
</script>
