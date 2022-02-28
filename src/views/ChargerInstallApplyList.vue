<template>
  <div class="contents">
    <div class="charger-install-wrap">
      <div class="user-desc">
        <div class="img"><img src="@/assets/images/temp-user.jpg" alt=""></div>
        <div class="desc">
          안녕하세요 <br>
          <b>김김김</b>님
        </div>
      </div>
      <!-- installing --> 
      <div class="installing">
        <p class="noti-txt">진행중인 설치건이 없습니다.</p>
        <p class="noti-txt">진행중인 설치건 <em>1건</em>이 있습니다.</p>
        <div class="guide-tag"><span>설치 단계 안내</span></div>
        <div class="x-scrolling-list">
          <ul>
            <li v-for="(item, index) in installList" :key="index">
              <router-link to="/" class="gradient-box">
                <sapn class="status">{{ item.status }}</sapn>
                <div class="text">
                  {{ item.text }}
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- // installing --> 
      <div class="fixed-btm">
        <div class="btn-wrap">
          <router-linlk class="btn-type1 st2">충전기 설치 신청</router-linlk>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChargerInstallApplyList',
  components: {
    
  },
  data(){
    return{
      installList: [
        {
          status: '신청접수',
          text: '설치업체에서 날짜를 확인중입니다.',
        },
        {
          status: '신청완료',
          text: '설치업체에서 날짜를 확인중입니다.',
        },
        {
          status: '신청접수',
          text: '설치업체에서 날짜를 확인중입니다.',
        },
      ]
    }
  },
   mounted(){
   
  }
}
</script>
