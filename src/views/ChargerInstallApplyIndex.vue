<template>
  <div class="contents">
    <div class="index-list-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>
      <!-- 신청/설치 -->
      <div class="shadow-box">
        <h3 class="tit-type4">신청/설치</h3>
        <div class="grid-list">
            <router-link to="/" class="row link">
                <div class="txt">멤버십카드관리</div>
                <div class="right">
                    <Icon type="arr-right" />
                </div>
            </router-link>
            <router-link to="/" class="row link">
                <div class="txt">충전기설치신청</div>
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
