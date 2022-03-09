<template>
  <div class="contents">
    <div class="qnalist-wrap">
      <div class="search-wrap">
        <input type="text" placeholder="궁금하신 점을 검색해보세요">
      </div>
      <!-- 차지비 서비스 -->
      <div class="shadow-box">
        <h3 class="tit-type4"><span class="i-wrap"><Icon type="logo-s" /><span>차지비 서비스</span></span></h3>
        <div class="grid-list type2">
            <router-link to="/" class="row link"><div class="txt">충전기 사용방법</div></router-link>
            <router-link to="/" class="row link"><div class="txt">충전기 설치신청</div></router-link>
            <router-link to="/" class="row link"><div class="txt">충전기 종류 안내</div></router-link>
            <router-link to="/" class="row link"><div class="txt">PHEV차량 충전안내</div></router-link>
            <router-link to="/" class="row link"><div class="txt">충전기 고장신고</div></router-link>
            <router-link to="/" class="row link"><div class="txt">환불문의</div></router-link>
            <router-link to="/" class="row link"><div class="txt">충전요금 안내</div></router-link>
            <router-link to="/" class="row link"><div class="txt">로밍서비스 안내</div></router-link>
        </div>
      </div>
      <!-- 모바일카드/멤버십카드 -->
      <div class="shadow-box">
        <h3 class="tit-type4"><span class="i-wrap"><Icon type="card" /><span>모바일카드/멤버십카드</span></span></h3>
        <div class="grid-list type2">
            <router-link to="/" class="row link"><div class="txt">모바일카드 이용</div></router-link>
            <router-link to="/" class="row link"><div class="txt">멤버십카드 발급</div></router-link>
            <router-link to="/" class="row link"><div class="txt">배송현황 확인</div></router-link>
            <router-link to="/" class="row link"><div class="txt">멤버십카드 재발급</div></router-link>
            <router-link to="/" class="row link"><div class="txt">멤버십카드 인증불가</div></router-link>
        </div>
      </div>
      <!-- 완성차 프로모션 -->
      <div class="shadow-box">
        <h3 class="tit-type4"><span class="i-wrap"><Icon type="car" /><span>완성차 프로모션</span></span></h3>
        <div class="grid-list type2">
            <router-link to="/" class="row link"><div class="txt">완성차 프로모션</div></router-link>
            <router-link to="/" class="row link"><div class="txt">완성차 멤버십카드</div></router-link>
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
