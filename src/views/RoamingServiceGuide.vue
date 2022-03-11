<template>
  <div class="contents">
    <div class="support-guide-wrap">
      <div class="support-guide-header">
        <h2 class="tit-type2">로밍서비스 안내</h2>
        <div class="header-menu">
          <div class="date">2022-02-02</div>
          <div class="right">
            <button>
              <Icon type="sns" />
            </button>
          </div>
        </div>
      </div>
      
      <!-- 로밍 안내 -->
      <div class="shadow-box">
        <h3 class="tit-type4"><span class="i-wrap"><Icon type="logo-s" /><span>로밍 안내</span></span></h3>
        <div class="text-wrap">
          <p>차지비는 전기차 충전서비스 이용 고객들의 원할한 충전을 위하여 로밍서비스를 진행하고 있습니다.</p>
          <p>로밍이 가능한 충전소 및 요금은 ‘충전요금 안내’페이지에서 확인이 가능하며, 아래의 케이스는 로밍이 불가능할 수 있습니다.</p>
        </div>
        <router-link to="/" class="btn-type1 st1">충전요금 안내 페이지로 이동</router-link>
      </div>
      
      <!-- 한국전력 공동주택 충전기 -->
      <div class="shadow-box">
        <h3 class="tit-type4"><span class="i-wrap"><Icon type="logo-kepco-s" /><span>한국전력 공동주택 충전기</span></span></h3>
        <div class="text-wrap">
          <p>한국전력 공동주택 충전기는 한국전력 정책상 한국전력 회원으로만 이용이 가능합니다. 따라서 차지비 회원으로 이용이 불가능하며, 한국전력 회원으로 가입 후 사용하여 주시기 바랍니다.</p>
        </div>
      </div>
      
      <!-- 자체운영 충전기 -->
      <div class="shadow-box">
        <h3 class="tit-type4"><span class="i-wrap"><Icon type="building" /><span>자체운영 충전기</span></span></h3>
        <div class="text-wrap">
          <p>아파트에 설치된 충전기 중 아파트 자체관리 및 관리비로 청구되는 충전기는 차지비 회원으로 사용이 불가능합니다.</p>
          <p>이용 관련 문의는 관리사무소를 통해 진행해주시기 바랍니다. </p>
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
