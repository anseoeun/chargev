<template>
  <div class="contents">
    <div class="charge-point-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>
      <!-- 완성차 프로모션 상품 -->
      <div class="shadow-box">
        <h3 class="tit-type4">완성차 프로모션 상품<button class="btn-info"><Icon type="info"/></button></h3>
        <div class="black-box">
          <router-link to="/" class="box">
            <Icon type="arr-right" />
            <div class="check">
              <button @click="checkIcon($event, 'promotionChecked')">
                <Icon type="check" :class="{on: promotionChecked}" />
              </button>
            </div>
            <div class="t-wrap">
              <div class="row"><div class="cell">BMW Charging 프로모션</div></div>
              <div class="row"><div class="cell"><b class="price">250,000</b>원</div></div>
              <div class="row"><div class="cell">2021-07-01 ~ 2022-07-01</div></div>
            </div>
          </router-link>
        </div>  
        <button class="btn-type1 st1">사용내역 확인</button>
      </div>  

      <!-- 모바일 충전권 -->
      <div class="shadow-box">
        <h3 class="tit-type4">모바일 충전권<button class="btn-info"><Icon type="info"/></button></h3>
        <div class="black-box">
          <router-link to="/" class="box">
            <Icon type="arr-right" />
            <div class="check">
              <button @click="checkIcon($event, 'mobileChecked')">
                <Icon type="check" :class="{on: mobileChecked}" />
              </button>
            </div>
            <div class="t-wrap">
              <div class="row"><div class="cell">모바일 충전권</div></div>
              <div class="row"><div class="cell"><b class="price">10,000</b>원</div></div>
              <div class="row"><div class="cell">2021-10-01 ~ 2022-10-01</div></div>
            </div>
          </router-link>
        </div>  
        <template v-if="mobileCodeShow">
          <input type="text" placeholder="12자리 코드를 입력해주세요." v-model="mobileCode">
          <button class="btn-type1 st1" @click="alertPop = true">확인</button>
        </template>
        <button v-else class="btn-type1 st1" @click="mobileCodeShow = true">등록하기</button>
        <button class="btn-type1 st1">사용내역 확인</button>
      </div>
    </div>

    <!-- 팝업 -->
    <Alert :is-open="alertPop" @close="alertPop = false">      
        <template slot="header">모바일 충전권 등록</template>
        <template slot="body">
            모바일 충전권 등록이 완료되었습니다.
        </template>
    </Alert>
  </div>
</template> 

<script>
export default {
  components: {
    
  },
  data(){
    return{
      promotionChecked: false,
      cardChecked: [],
      mobileCodeShow: false,
      mobileCode: '',
      // 팝업
      alertPop: false,
    }
  },
   mounted(){

  }
}
</script>
