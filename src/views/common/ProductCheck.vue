<template>
    <div class="card-wrap-wrap">
        <div class="card-wrap">
          <h2 class="tit-type1">상품확인</h2>
            <div v-if="status === 'productCheck-noProduct'" class="card2">
                <div class="center">
                    <p class="s-t">일치하는 상품이 없습니다.</p>
                </div>
            </div>          
          <!-- 
            //상품하나일경우 아래 옵션설정
            //destroy: true
           -->
            <Carousel v-else class="slide-list" :content="true" :options="cardSliderOpt">
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
        </div>
        <div class="btn-box">
            <button class="btn-type1 st2" @click="$emit('complete')">확인</button>
        </div>
    </div>
</template>

<script>
export default { 
 props:{
    status: {
        type: String,
        default: ''
    }
 },
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
