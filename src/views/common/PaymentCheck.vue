<template>
    <div class="card-wrap-wrap">
        <div class="card-wrap">
          <h2 class="tit-type1">결제정보 확인</h2>
            <Carousel class="slide-list" :content="true" :options="cardSliderOpt">
                <template slot="content">
                    <splide-slide v-for="(item, index) in cardList" :key="index">
                        <div class="card3" :class="{on: item.selected}">
                            <div class="card-info">
                                <div class="card-name">{{ item.company }}카드</div>
                                <div class="card-num">
                                    <span>{{ item.num[0] }}</span>
                                    <span>{{ item.num[1] }}</span>
                                    <span>{{ item.num[2] }}</span>
                                    <span>{{ item.num[3] }}</span>
                                </div>
                            </div>
                            <div class="btn-box-inner">
                                <div class="btn btn-order">
                                    <button class="btn-left"><Icon type="arr-left" /></button>
                                    결제순서변경
                                    <button class="btn-right"><Icon type="arr-right" /></button>
                                </div>
                                <button class="btn">카드삭제 <Icon type="delete" /></button>
                            </div>
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
  data(){
    return{
      cardSliderOpt: {
        autoWidth: true,
        perMove:1,
        pagination:false,
      },                
      // 신용카드
      cardList: [
          {
              date: '02/24',
              company: '삼성',
              num: ['****', '****', '****', '4151'],
              selected: true,
          },
          {
              date: '02/24',
              company: '삼성',
              num: ['****', '****', '****', '4151'],
              selected: false,
          },
      ],
    }
  },
}
</script>
