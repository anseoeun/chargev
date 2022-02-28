<template>
  <div class="contents">
    <div class="charger-install-wrap">
      <p class="noti-txt">충전소 설치를 원하는 장소를 선택해주세요</p>
      <div class="x-scrolling-list">
        <ul>
          <li v-for="(item, index) in placeList" :key="index">
            <router-link to="/" class="gradient-box">
              <strong class="tit">{{ item.title }}</strong>
              <div class="text">
                {{ item.text }}
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
          text: '현장실사 설치 사진',
        },
        {
          title: '빌라, 오피스텔',
          text: '현장실사 설치 사진',
        },
        {
          title: '단독주택',
          text: '현장실사 설치 사진',
        },
      ]
    }
  },
   mounted(){
   
  }
}
</script>
