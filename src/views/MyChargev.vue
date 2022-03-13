<template>
  <div class="contents">
    <div class="my-chargv-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>
      <!-- 상태 -->
      <div class="shadow-box black">
        <h3 class="tit-type4">상태</h3>
        <template v-if="!wating">
          <div class="grid-list">
              <div class="row">
                  <div class="tit"><b class="c-green">충전중</b></div>
              </div>
              <div class="row">
                  <div class="tit">충전기</div>
                  <div class="txt align-r">롯데타워지하2층 완속#1</div>
              </div>
              <div class="row">
                  <div class="tit">충전량</div>
                  <div class="txt align-r"><b class="c-green">15.6</b><span class="unit">kWh</span></div>
              </div>
              <div class="row">
                  <div class="tit">충전시간</div>
                  <div class="txt align-r"><b class="c-green">30</b><span class="unit">분</span></div>
              </div>
          </div>
          <button class="btn-type1 st1" @click="wating = true">종료하기</button>
        </template>
        <div v-if="wating" class="wating">
          충전 대기중입니다.
        </div>
      </div>
      <!-- 마이차지비 -->
      <div class="shadow-box">
        <h3 class="tit-type4">마이차지비</h3>
        <div class="grid-list">
            <router-link to="/" class="row link">
                <div class="txt">내정보</div>
                <div class="right">
                    <Icon type="arr-right" /> 
                </div>
            </router-link>
            <router-link to="/" class="row link">
                <div class="txt">차량관리</div>
                <div class="right">
                    <Icon type="arr-right" />
                </div>
            </router-link>
            <router-link to="/" class="row link">
                <div class="txt">결제관리</div>
                <div class="right">
                    <Icon type="arr-right" />
                </div>
            </router-link>
            <router-link to="/" class="row link">
                <div class="txt">이용내역</div>
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
     wating: false,
    }
  },
   mounted(){
   
  }
}
</script>
