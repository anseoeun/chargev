<template>
  <div class="contents">
    <div class="car-manage-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>
      <!-- 충전 포인트 -->
      <div class="shadow-box">
        <h3 class="tit-type4">충전 포인트<button class="btn-info"><Icon type="info"/></button></h3>
        <div class="black-box">
          <router-link to="/" class="box">
            <Icon type="arr-right" />
            <div class="check">
              <button @click="checkIcon($event, 'pointChecked')">
                <Icon type="check" :class="{on: pointChecked}" />
              </button>
            </div>
            <div class="t-wrap">
              <div class="row"><div class="cell">충전포인트</div></div>
              <div class="row"><div class="cell"><b class="price">270,000</b>원</div></div>
            </div>
          </router-link>
        </div>  
        <button class="btn-type1 st1">사용내역 확인</button>
      </div>  

      <!-- 신용카드 -->
      <div class="shadow-box">
        <h3 class="tit-type4">신용카드<button class="btn-info"><Icon type="info"/></button></h3>
        <div class="card-type">
          <div class="card line">
              <img :src="`${require('@/assets/images/temp-card2.jpg')}`" alt="">
              <div class="card-info">
                <button  @click="checkIcon($event, 'cardChecked', index)">
                  <Icon type="check" :class="{on: cardChecked[index]}" />
                </button>                
                <div class="date">02/24</div>
                <div class="number">(삼성) 5361 48** **** 4151</div>
              </div>
          </div>
          <div class="menu">
            <button class="on">선택</button>
            <button>추가</button>
            <button>삭제</button>
          </div>
        </div>  
        <button class="btn-type1 st1">사용내역 확인</button>
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
      pointChecked: false,
      cardChecked: [],
    }
  },
   mounted(){

  }
}
</script>
