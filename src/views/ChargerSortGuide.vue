<template>
  <div class="contents">
    <div class="support-guide-wrap">
      <div class="support-guide-header">
        <h2 class="tit-type2">충전기 종류 안내</h2>
        <div class="header-menu">
          <div class="date">2022-02-02</div>
          <div class="right">
            <button>
              <Icon type="sns" />
            </button>
          </div>
        </div>
      </div>
      
      <!-- 속도별 구분 -->
      <div class="shadow-box">
        <h3 class="tit-type4"><span class="i-wrap"><Icon type="charge" /><span>속도별 구분</span></span></h3>
        <ul class="dash-indent-list">
          <li>- 급속: 시간당 50KW, 100kW 이상 충전이 가능한 충전기입니다.</li>
          <li>- 완속: 시간당 3~7kW 충전이 가능한 충전기입니다.</li>
        </ul>
      </div>
      
      <!-- 개방여부별 구분 -->
      <div class="shadow-box">
        <h3 class="tit-type4"><span class="i-wrap"><Icon type="charge" /><span>개방여부별 구분</span></span></h3>
        <ul class="dash-indent-list">
          <li>- 개방형: 외부인에게 개방되어 모두 사용할 수 있도록 설치된 충전기입니다.</li>
          <li>- 비개방형: 외부로 개방되지 않아 승인된 사용자만 사용할 수 있는 충전기(사옥, 아파트 등)입니다.</li>
        </ul>
      </div>
      
      <!-- 규격별 구분 -->
      <div class="shadow-box">
        <h3 class="tit-type4"><span class="i-wrap"><Icon type="charge" /><span>규격별 구분</span></span></h3>
        <div class="text-wrap">
          <p>DC콤보(급속): 대한민국 표준으로 정해진 급속충전 규격으로 현재 출시 중인 대부분의 차량이 DC콤보 규격을 사용하고 있습니다.</p>
          <p>DC차데모(급속): 일본의 급속충전 표준 규격으로 2018년 이전 현대차 (아이오닉), KIA (레이, 구형 쏘울), 닛산 리프 등에서 사용이 가능합니다.</p>
          <p>※ 테슬라 고객은 차데모 어댑터를 이용하여 충전이 가능합니다. <span class="c-red">단, 어댑터 사용으로 인한 차량, 충전기 고장 등의 책임은 사용자에게 있습니다.</span></p>
          <p>AC3상(급속): 르노 삼성 SM3 ZE 차량에서 사용되는 급속충전 규격입니다.</p>
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
