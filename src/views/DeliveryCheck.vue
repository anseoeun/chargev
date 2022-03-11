<template>
  <div class="contents">
    <div class="support-guide-wrap">
      <div class="support-guide-header">
        <h2 class="tit-type2">배송현황 확인</h2>
        <div class="header-menu">
          <div class="date">2022-02-02</div>
          <div class="right">
            <button>
              <Icon type="sns" />
            </button>
          </div>
        </div>
      </div>
      
      <!-- 멤버십카드 배송현황 확인 -->
      <div class="shadow-box">
        <h3 class="tit-type4"><span class="i-wrap"><Icon type="card" /><span>멤버십카드 배송현황 확인</span></span></h3>
        <div class="text-wrap">
            <p>아래의 버튼을 통해 배송현황을 확인하실 수 있습니다. 배송현황은 우체국 서버와의 통신을 통해 실시간으로 이루어지며, 우체국 서버에 등록이 되지 않은 경우 업데이트가 늦어질 수 있습니다.</p>
        </div>
        <router-link to="/" class="btn-type1 st1">배송현황 확인하러가기</router-link>
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
