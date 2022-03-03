<template>
  <div class="contents">
      <div class="event-wrap">
          <div class="event-detail">
              <div class="event" :style="`background-image:url(${eventData.bg})`">
                <div class="title">{{ eventData.title }} </div>
                <div class="type">{{ eventData.type }} </div>
                <div class="period">
                  <div class="month">{{ eventData.month }}</div>
                  <div class="day">{{ eventData.day }}</div>
                </div>
              </div>
              <div class="event-view" v-html="eventData.content"></div>
              <div class="btn-wrap">
                  <a href="/" class="btn"><span>확인하러가기</span><Icon type="arr-right-red" /></a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
        eventData:{
          bg: require('@/assets/images/temp-event.jpg'),
          month: '1월',
          day: '1~31',
          title: '삼성 iD EV 카드 프로모션',
          type: '충전요금 할인 카드',
          content:'차지비 충전 서비스 이용시 할인이 가능한 삼성 iD 카드가 출시되었습니다. <br> <br> 해당 카드를 등록 후 충전을 하실 경우 최대 70%할인이 가능합니다.<br> <br> 전기차 충전기 할인 이외에 아래의 혜택이 있으며,<br> <br> 자세한 사항은 카드사 홈페이지를 통해 확인 부탁드립니다.<br> <br> 1.전기차 충전요금 50% · 70% 결제일 할인<br> 2.주차장·하이패스·대리운전 10% 결제일 할인<br> 3.현대해상 다이렉트 자동차보험 30,000원 결제일 할인'
        },
    }
  },
}
</script>
