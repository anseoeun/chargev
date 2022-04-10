<template>
  <div class="contents">
    <div class="support-guide-wrap">
      <div class="support-guide-header">
        <h2 class="tit-type2">모바일카드 이용</h2>
        <div class="header-menu">
          <div class="date">2022-02-02</div>
          <div class="right">
            <button>
              <Icon type="sns" />
            </button>
          </div>
        </div>
      </div>
      
      <!-- 모바일카드 안내 -->
      <div class="shadow-box">
        <h3 class="tit-type4"><span class="i-wrap"><Icon type="logo-s" /><span>모바일카드 안내</span></span></h3>
        <div class="text-wrap">
            <p>모바일카드는 최초가입시 발급되는 16자리 멤버십 번호가 부여된 카드로써 차지비 충전기에서 실물카드 없이 사용 가능합니다.</p>
        </div>
      </div>
      
      <!-- 멤버십카드 신청 -->
      <div class="shadow-box">
        <h3 class="tit-type4"><span class="i-wrap"><Icon type="card" /><span>멤버십카드 신청</span></span></h3>
        <div class="text-wrap">
            <p>실물 충전카드 발급을 원하실 경우 멤버십카드 신청에서 발급 신청 가능합니다. <br />(충전카드 발급비용 유료 6,000원)</p>
            <p>차지비 충전카드 발급을 원하실 경우 아래의 버튼을 눌러주세요.</p>
        </div>
        <router-link to="/" class="btn-type1 st1">멤버십카드 신청 하러가기</router-link>
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
