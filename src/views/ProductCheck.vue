<template>
  <div class="contents">
    <button class="back"><Icon type="back" /></button>        
    <div class="login-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>
      <div class="min-fix">
        <div class="card-wrap">
          <h2 class="tit-type1">상품확인</h2>
          <!-- 
            //상품하나일경우 아래 옵션설정
            //destroy: true
           -->
            <Carousel class="slide-list" :content="true" :options="cardSliderOpt">
                <template slot="content">
                    <splide-slide v-for="(item, index) in cargePointList" :key="index">
                        <div class="card2" :class="{on: item.selected}">
                            <!-- <div class="bg" :style="`background-image:url(${item.src})`"></div> -->
                            <Icon v-if="item.company === 'bmw'" type="logo-bmw" />
                            <Icon v-if="item.company === 'chargev'" type="chargev4" />
                            <div class="main-txt">
                                <div v-if="Array.isArray(item.text)" class="space-text">
                                    <span v-for="(txt, i) in item.text" :key="i">{{ txt }}</span>
                                </div>
                                <template v-else>{{ item.text }}</template>
                            </div>
                            <div class="date">{{ item.date }}</div>
                            <div class="price">{{ item.price }}원</div>
                        </div>
                    </splide-slide>
                </template>
            </Carousel>
            <div class="card2">
              <div class="center">
                  <p class="s-t">일치하는 상품이 없습니다.</p>
              </div>
          </div>
        </div>
        <div class="btn-box">
            <button class="btn-type1 st2">확인</button>
        </div>
      </div>
      <div class="info-text">
          상품정보를 확인 해주세요.
      </div>
      <div class="info-text">
          차대번호 대조를 통해
          <br />차량에 부여된 프로모션 상품이 조회되었습니다.
      </div>
      <div class="info-text">
        일치하는 프로모션 상품이 없습니다.
        <br />프로모션 상품은 차대번호가 등록된 후 지급됩니다.
      </div>
    </div>

  </div>
</template>

<script>
export default { 
  data(){
    return{
      cardSliderOpt: {
        autoWidth: true,
        perMove:1,
        pagination:false,
        //하나일경우 아래 옵션설정
        //destroy: true
      },
      // 신용카드
      cargePointList: [
          {
              src: require('@/assets/images/temp-place.jpg'),
              company: 'bmw',
              text: ['20년', 'BMW', 'Charging'],
              date: '2021. 07. 01 ~ 2022. 07. 01',
              price: '360,000',
              selected: true,
          },
          {
              src: require('@/assets/images/temp-place.jpg'),
              company: 'chargev',
              text: '모바일충전권',
              date: '2021. 07. 01 ~ 2022. 07. 01',
              price: '100,000',
          },
          {
              company: 'chargev',
              text: '이벤트 쿠폰',
              date: '2021. 07. 01 ~ 2022. 07. 01',
              price: '100,000',
          },
      ],
    }
  },
}
</script>
