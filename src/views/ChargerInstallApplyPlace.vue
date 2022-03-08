<template>
  <div class="contents">
    <div class="charger-install-wrap">
      <div class="charger-install-header">
        <h2 class="tit-type3">설치 장소 선택</h2>
        <p class="text-type1">설치를 원하는 장소를 선택해주세요.</p>
      </div>
      <div class="x-scrolling-list">
        <ul class="place-list">
          <li v-for="(item, index) in placeList" :key="index">
            <router-link to="/" class="place-card">
              <div class="img" :style="`background-image:url(${item.src})`"></div>
              <div class="desc">
                <strong class="tit">{{ item.title }}</strong>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
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
          title: '단독주택',
          src: require('@/assets/images/temp-place.jpg'),
        },
        {
          title: '빌라, 오피스텔',
          src: require('@/assets/images/temp-place.jpg'),
        },
        {
          title: '단독주택',
          src: require('@/assets/images/temp-place.jpg'),
        },
      ]
    }
  },
   mounted(){
   
  }
}
</script>
