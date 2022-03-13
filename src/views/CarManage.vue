<template>
  <div class="contents">
    <div class="car-manage-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>
      <!-- 가입자정보 -->
      <div class="shadow-box">
        <h3 class="tit-type4">등록차량정보 <div class="right"><button class="c-gray">수정</button></div></h3>
        <div class="blackbox-list">
          <div v-for="(item, index) in carList" :key="index" class="black-box">
            <router-link to="/" class="box">
              <div class="t-wrap">
                <div class="row">
                  <div class="cell">{{ item.name }}
                    <div v-if="item.regist" class="fr">
                        <button  @click="checkIcon($event, 'complteChecked', index)">
                          <Icon type="check" :class="{on: complteChecked[index]}" />
                          차량공유 등록 완료
                        </button>
                    </div>
                  </div>
                </div>
                <div class="row"><div class="cell">{{ item.number }}</div></div>
                <div class="row"><div class="cell">{{ item.card }}</div></div>
              </div>
            </router-link>
          </div>
        </div>  
        <button class="btn-type1 st1">확인</button>
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
      complteChecked: [],
      carList: [
        {
          name: 'BMW 530e',
          regist: true,
          number: '02보6596',
          card: '(삼성) 5361 48** **** 4151',
        },
        {
          name: '벤츠 EQC400',
          regist: false,
          number: '10가0101',
          card: '(삼성) 5361 48** **** 4151',
        },
      ]
    }
  },
   mounted(){
   for(let i=0; i <= this.carList.length; i++){
     if(this.carList[i].regist) this.$set(this.complteChecked, i, true)
   }
  }
}
</script>
