<template>
  <div class="contents">
    <button class="back"><Icon type="back" /></button>        
    <div class="login-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>
      <div class="min-fix">
        <div class="card-wrap">
          <h2 class="tit-type1">차량확인</h2>
            <Carousel class="slide-list" :content="true" :options="carSliderOpt">
                <template slot="content">
                    <splide-slide v-for="(item, index) in carList" :key="index">
                        <div class="card5" :class="{on: item.selected}">
                            <div class="car-info-wrap">
                              <Icon v-if="item.company === 'bmw'" type="logo-bmw2" class="company-logo" />
                              <Icon v-if="item.company === 'benz'" type="logo-benz" :src="require('@/assets/images/logo/logo-me.png')" class="company-logo" />
                              <div class="car-info">
                                  <p class="space-txt"><span>{{ item.carInfo[0] }}</span><span>{{ item.carInfo[1] }}</span></p>
                                  <p>{{ item.carInfo[2] }}</p>
                              </div>
                            </div>
                            <div class="number">
                                <span>{{ item.num[0] }}</span> -
                                <span>{{ item.num[1] }}</span> -
                                <span>{{ item.num[2] }}</span> -
                                <span>{{ item.num[3] }}</span>
                            </div>
                            <div class="btn-box-inner">
                              <button class="btn-type1 st2" @click="$set(item, 'selected', !item.selected)">
                                  충전차량으로 설정 <Icon type="check" :class="{on: item.selected}" />
                              </button>
                            </div> 
                        </div>
                    </splide-slide>
                </template>
            </Carousel>
        </div>
        <div class="btn-box">
            <button class="btn-type1 st2">확인</button>
        </div>
      </div>
      <div class="info-text">
          전화번호와 성함이 일치하는 계정의
          <br />차량이 확인되었습니다.
          <br />인증하기를 눌러 차량을 인증해주세요.
          <br />인증이 완료된 차량만 등록이 가능합니다.  
      </div>
    </div>

  </div>
</template>

<script>
export default { 
  data(){
    return{
      carSliderOpt: {
        autoWidth: true,
        perMove:1,
        pagination:false,
      },                
      carList: [
          {
              company: 'bmw',
              carInfo: ['BMW', '530e', '02보6596'],
              num: ['9999', '9999', '9999', '9999'],
              selected: true,
          },
          {
              company: 'benz',
              carInfo: ['BMW', '530e', '02보6596'],
              num: ['9999', '9999', '9999', '9999'],
              selected: false,
          },
      ], 
    }
  },
}
</script>
