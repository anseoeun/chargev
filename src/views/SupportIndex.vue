<template>
  <div class="contents">
    <div class="index-list-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>
      <!-- 고객센터 -->
      <div class="shadow-box">
        <h3 class="tit-type4">고객센터</h3>
        <div class="grid-list">
            <router-link to="/" class="row link">
                <div class="txt">문의하기</div>
                <div class="right">
                    <Icon type="arr-right" />
                </div>
            </router-link>
            <router-link to="/" class="row link">
                <div class="txt">문의내역</div>
                <div class="right">
                    <Icon type="arr-right" />
                </div>
            </router-link>
        </div>
      </div>
      <!-- 안내 -->
      <div class="shadow-box">
        <h3 class="tit-type4">안내</h3>
        <div class="grid-list">
            <router-link to="/" class="row link">
                <div class="txt">공지사항</div>
                <div class="right">
                    <Icon type="arr-right" />
                </div>
            </router-link>
            <router-link to="/" class="row link">
                <div class="txt">이벤트</div>
                <div class="right">
                    <Icon type="arr-right" />
                </div>
            </router-link>
            <router-link to="/" class="row link">
                <div class="txt">약관 및 정책</div>
                <div class="right">
                    <Icon type="arr-right" />
                </div>
            </router-link>
            <router-link to="/" class="row link">
                <div class="txt">앱정보</div>
                <div class="right">
                    <Icon type="arr-right" />
                </div>
            </router-link>
        </div>
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
