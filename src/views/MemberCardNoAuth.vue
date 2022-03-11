<template>
  <div class="contents">
    <div class="support-guide-wrap">
      <div class="support-guide-header">
        <h2 class="tit-type2">멤버십카드 인증불가</h2>
        <div class="header-menu">
          <div class="date">2022-02-02</div>
          <div class="right">
            <button>
              <Icon type="sns" />
            </button>
          </div>
        </div>
      </div>
      
      <!-- 결제카드 문제로인한 미결제 -->
      <div class="shadow-box">
        <h3 class="tit-type4"><span class="i-wrap"><Icon type="card-x" /><span>결제카드 문제로인한 미결제</span></span></h3>
        <div class="text-wrap">
            <p>등록된 신용카드들이 거래정지, 분실, 유효기간 만료 등의 이유료 사용불가되어 미결제 충전건이 발생된 경우 더이상 충전이 불가능해집니다.</p>
            <p>아래의 버튼을 통해 신용카드 정보를 변경해주세요.</p>
        </div>
        <router-link to="/" class="btn-type1 st1">신용카드 정보 변경하기</router-link>
      </div>
      
      <!-- 충전기 통신장애 -->
      <div class="shadow-box">
        <h3 class="tit-type4"><span class="i-wrap"><Icon type="communication-x" /><span>충전기 통신장애</span></span></h3>
        <div class="text-wrap">
            <p>충전기 통신장애가 있을 경우 회원정보 인증이 불가능해집니다. 다른 충전기를 이용바랍니다.</p>
        </div>
        <router-link to="/" class="btn-type1 st1">충전기 고장신고하기</router-link>
      </div>
      
      <!-- 비제휴 로밍사 -->
      <div class="shadow-box">
        <h3 class="tit-type4"><span class="i-wrap"><Icon type="roaming-x" /><span>비제휴 로밍사</span></span></h3>
        <div class="text-wrap">
            <p>제휴가 되지 않은 로밍사, 한국전력 공동주택 충전기는 이용이 불가능합니다. 제휴 로밍사를 확인부탁드립니다.</p>
        </div>
        <router-link to="/" class="btn-type1 st1">로밍사 확인하러가기</router-link>
      </div>
      
      <!-- 충전카드 불량 -->
      <div class="shadow-box">
        <h3 class="tit-type4"><span class="i-wrap"><Icon type="card-x" /><span>충전카드 불량</span></span></h3>
        <div class="text-wrap">
            <p>여러 충전기에서 반복적으로 충전이 되지 않은 경우 충전카드의 문제일 수 있습니다. 충전카드는 반영구 적으로 사용이 가능하나 자성 강력한 물체 옆에 두거 나, 높은 온도에 오래 두었을 경우 문제가 생길 수 있 습니다. 아래의 버튼을 통해 충전카드 재발급을 진행 해주세요.</p>
        </div>
        <router-link to="/" class="btn-type1 st3">멤버십카드 재발급하러가기</router-link>
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
